/// <reference types="vite/client" />

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
// 1. UPDATED KNOWLEDGE BASE
const SCHOOL_CONTEXT = `
OFFICIAL KNOWLEDGE BASE FOR YOSOLA SCHOOL:

[IDENTITY & CONTACT]
- Name: Yosola School (Yosola Educational Services)
- Motto: "Excellence in Character and Learning"
- Address: No. 17 Unity Crescent, Bamboo Bus Stop, Along Nigeria Navy School of Music, Akeja, Osi Ota, Ogun State.
- Phone: +234 808 769 4737
- Email: yorsolaschools@gmail.com
- Office Hours: Monday - Friday, 7:30 AM - 4:00 PM.

[WHY CHOOSE YOSOLA?]
- Dual Curriculum: We blend British and Nigerian academic standards.
- Vocational Focus: Unlike regular schools, we teach trade skills (Fashion, Catering, Tech) so students graduate as entrepreneurs.
- Holistic Growth: We focus on character, discipline, and leadership, not just grades.

[ACADEMICS]
- Nursery (Ages 3-5): Play-based learning, phonics foundation, social development.
- Primary (Ages 6-11): Mathematics, English, Sciences, French, Music, and STEAM education.
- Junior Secondary (JSS 1-3): Prepares students for BECE; strong emphasis on critical thinking and basic technology.
- Senior Secondary (SSS 1-3): Specialized tracks in Science, Arts, and Commercial departments.

[VOCATIONAL WING (UNIQUE SELLING POINT)]
- Availability: Open to registered students and external candidates.
- Courses:
  1. Fashion Design & Garment Making
  2. Hospitality, Catering & Cosmetology
  3. ICT, Coding & Robotics
- Goal: Producing self-reliant, skilled graduates.

[ADMISSIONS GUIDE]
- Step 1: Purchase the admission form at the school office.
- Step 2: Submit the form with 2 passport photographs and a birth certificate.
- Step 3: Candidate takes the Entrance Assessment (Mathematics & English focus).
- Step 4: Parent & Student Interview with the Head of School.
- Step 5: Successful candidates receive an Offer Letter.

[FACILITIES]
- Science: Fully equipped Physics, Chemistry, and Biology laboratories.
- Tech: Modern ICT Suite with 24/7 internet access.
- Sports: Standard football pitch and basketball court.
- Health: Sick bay managed by a qualified nurse.
- Transport: School bus service available (Routes: Ikeja, Magodo, and Osi Ota environs).

[FREQUENT QUESTIONS]
- Boarding: We are currently a Day School.
- Fees: Tuition details are provided physically at the office or via phone inquiry.
`;

// 2. UPDATED BEHAVIOR RULES
const SYSTEM_INSTRUCTION = `
ROLE:
You are "Yosola Bot", the friendly and professional Admissions Assistant for Yosola School.

YOUR GOAL:
Convince parents that Yosola School is the best place for their child by providing accurate, helpful information based strictly on the context provided.

GUIDELINES:
1. **Be Warm & Welcoming**: Start answers with a polite tone (e.g., "That's a great question!").
2. **Stick to Facts**: Use the "OFFICIAL KNOWLEDGE BASE" above. Do not invent facilities or policies.
3. **Handling Fees**: If asked about specific prices (tuition, bus fees, uniform cost), strictly say: "For the most accurate and up-to-date fee schedule for your child's grade, please contact our accounts office directly at +234 808 769 4737."
4. **Vocational Emphasis**: If asked "Why Yosola?", mention the unique Vocational Wing and Entrepreneurial focus.
5. **Unknowns**: If the answer is not in the text, say: "I don't have that specific detail right now, but please email us at yorsolaschools@gmail.com and we will get back to you immediately."
6. **Brevity**: Keep responses under 4 sentences unless the user asks for a "list" or "details".

CONTEXT:
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
      "models/gemini-2.5-flash",      // Newest & Fastest (Priority 1)
      "models/gemini-2.0-flash",      // Reliable backup
      "models/gemini-1.5-flash",      // Old standard
      "models/gemini-1.5-flash-001", 
      "models/gemini-pro"
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
