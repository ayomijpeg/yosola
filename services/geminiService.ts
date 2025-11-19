import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
// The API key must be provided via process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Yosola Bot", the helpful AI admissions assistant for Yosola School.
Your tone should be warm, professional, and encouraging.

Key Information about Yosola School:
- Tagline: Building Brilliant Minds, Together.
- Mission: Empowering futures through a blend of academics and practical skills.
- Programs: 
  1. Nursery (1-3): Ages 3-5. Play-based learning.
  2. Primary (1-6): Core academics + STEAM.
  3. Junior Secondary (JSS 1-3): Ages 12-14. Critical thinking & subject-based.
  4. Senior Secondary (SSS 1-3): Ages 15-17. Science, Arts, and Commercial tracks.
- Key Staff: Mr. Sola Ajayi (Chairman), Sarah Johnson (Director).
- Facilities: Modern ICT centers, labs, sports complex.
- Contact: info@yosolaschool.ng, +234-800-123-4567.
- Location: 123 Education Lane, Ikorodu, Lagos State.

Rules:
1. Keep answers concise (under 100 words unless asked for details).
2. If you don't know a specific detail (like current exact tuition fees), ask the user to contact the school office directly or visit the admissions page.
3. Always emphasize the welcoming nature of the school.
`;

export const sendMessageToGemini = async (message: string, history: { role: string; parts: [{ text: string }] }[] = []) => {
  try {
    const model = 'gemini-2.5-flash';
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};