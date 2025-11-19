// CHANGE 1: Ensure you are using the correct import. 
// If '@google/genai' gives errors, try 'npm install @google/generative-ai' 
// and import { GoogleGenerativeAI } from "@google/generative-ai";
/// <reference types="vite/client" />

import { GoogleGenAI } from "@google/genai";

// CHANGE 2: Use import.meta.env.VITE_... for browser apps
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Safety check to prevent the white screen crash
if (!apiKey) {
  console.error("API Key is missing! Check Vercel Environment Variables.");
}

const ai = new GoogleGenAI({ apiKey: apiKey });

const SYSTEM_INSTRUCTION = `
You are "Yosola Bot", the helpful AI admissions assistant for Yosola School.
Your tone should be warm, professional, and encouraging.
(Rest of your instructions...)
`;

export const sendMessageToGemini = async (message: string, history: { role: string; parts: [{ text: string }] }[] = []) => {
  try {
    if (!apiKey) throw new Error("API Key not found");

    // Ensure the model name matches what is available in your SDK version
    const model = 'gemini-1.5-flash'; 
    
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
    return "I'm having trouble connecting right now. Please contact the school directly at +234-800-123-4567.";
  }
};
