/// <reference types="vite/client" />

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const SCHOOL_CONTEXT = `
OFFICIAL SCHOOL INFORMATION FOR YOSOLA SCHOOL:

[GENERAL INFO]
- Name: Yosola School (Yosola Educational Services)
- Motto: "Excellence in Character and Learning" 
- Location: No, 17 Unity Cresent,
Bamboo Bus Stop,
Along Nigeria Navy,
School Of Music,
Akeja, Osi Ota, Ogun State.
- Opening Hours: Mon-Fri, 7:30 AM - 4:00 PM.

[ACADEMICS & CURRICULUM]
- We offer a blend of British and Nigerian Curricula.
- Levels: 
  1. Nursery (Ages 3-5): Focus on play-based learning, phonics, and social skills.
  2. Primary (Ages 6-11): Core subjects plus STEAM, Music, and French.
  3. Junior Secondary (JSS 1-3): Preparation for BECE, critical thinking focus.
  4. Senior Secondary (SSS 1-3): Science, Arts, and Commercial tracks.


[VOCATIONAL STUDIES CENTER]
- We have a dedicated vocational wing open to students and external candidates.
- Skills Taught: Fashion Design and garment making, Hospitality, ICT & Coding, Catering/Cosmetology.
- Goal: To produce self-reliant entrepreneurs, not just job seekers.

[ADMISSIONS PROCESS]
1. Purchase  at the school office (Online Purchase Coming Soon).
2. Submit completed form with 2 passport photos and birth certificate.
3. Child sits for an entrance assessment (Math & English).
4. Interview with parents.
5. Offer letter issued to successful candidates.

[FACILITIES]
- Modern Science Laboratories (Physics, Chem, Bio).
- ICT Suite with 24/7 Internet.
- Standard Football pitch and Basketball court.
- Well-stocked Library.
- School Bus Service: Available for specific routes (Ikeja, Magodo).
- Sick Bay with a qualified nurse.

[CONTACT]
- Phone: +234 808 769 4737
- Email: yorsolaschools@gmail.com
`;

// 2. INSTRUCT THE AI ON HOW TO BEHAVE
const SYSTEM_INSTRUCTION = `
You are "Yosola Bot", the official AI admissions assistant for Yosola School.

YOUR RULES:
1. Use the "OFFICIAL SCHOOL INFORMATION" provided above to answer questions.
2. Tone: Warm, professional, encouraging, and polite.
3. If a parent asks about a specific fee (like Tuition/School fees) that is NOT in your info, say: "For the most accurate tuition breakdown for your child's specific grade, please contact the School  directly at [Phone Number]."
4. Keep answers concise (under 4 sentences) unless asked for a detailed list.
5. Do not make up facts. If you don't know, provide the contact email.

CONTEXT DATA:
${SCHOOL_CONTEXT}
`;

let cachedModelName: string | null = null;

/**
 * Helper: Selects a STABLE model.
 * It avoids "preview" or "experimental" models which cause crashes.
 */
async function getWorkingModelName(): Promise<string> {
  if (cachedModelName) return cachedModelName;

  try {
    console.log("🔍 Finding best stable model...");
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
    );
    const data = await response.json();

    if (!data.models) throw new Error("No models found");

    const allModels = data.models.map((m: any) => m.name);
    console.log("📋 Available Models:", allModels);

    // === THE FIX: PRIORITY SELECTION ===
    // We look for these specific STABLE models in order.
    // We strictly avoid "preview" models unless absolutely necessary.
    const priorityList = [
      "models/gemini-1.5-flash",      // Best (Fast & Cheap)
      "models/gemini-1.5-flash-001",  // Versioned Flash
      "models/gemini-1.5-flash-8b",   // Light Flash
      "models/gemini-1.0-pro",        // Old Reliable
      "models/gemini-pro"             // Legacy Alias
    ];

    // 1. Try to find a match from our priority list
    for (const preferred of priorityList) {
      if (allModels.includes(preferred)) {
        console.log(`✅ Selected Stable Model: ${preferred}`);
        cachedModelName = preferred;
        return preferred;
      }
    }

    // 2. If none of the above exist, find ANY model that isn't a "preview"
    const fallback = data.models.find((m: any) => 
      m.name.includes("gemini") && 
      m.supportedGenerationMethods.includes("generateContent") &&
      !m.name.includes("preview") && // Critical: Avoid previews
      !m.name.includes("experimental")
    );

    if (fallback) {
        console.log(`⚠️ Using Fallback Model: ${fallback.name}`);
        cachedModelName = fallback.name;
        return fallback.name;
    }

    // 3. Absolute desperation: Take the first one
    return data.models[0].name;

  } catch (error) {
    console.warn("⚠️ Model list failed. Defaulting to gemini-pro.");
    return "models/gemini-pro";
  }
}

export const sendMessageToGemini = async (
  newMessage: string,
  history: { role: string; parts: { text: string }[] }[]
) => {
  try {
    if (!apiKey) return "System Error: API Key missing.";

    // 1. Get safe model
    const modelName = await getWorkingModelName();

    // 2. Prepare content
    const contents = [
      {
        role: "user",
        parts: [{ text: `INSTRUCTION: ${SYSTEM_INSTRUCTION}` }]
      },
      {
        role: "model",
        parts: [{ text: "Understood." }]
      },
      ...history,
      {
        role: "user",
        parts: [{ text: newMessage }]
      }
    ];

    // 3. Fetch
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/${modelName}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 250,
          }
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Generation Error:", errorData);
      return "I'm having technical difficulties. Please contact the school office.";
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "I didn't understand that.";

  } catch (error) {
    console.error("❌ Network Error:", error);
    return "Connection failed.";
  }
};
