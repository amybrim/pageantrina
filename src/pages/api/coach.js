import { GoogleGenerativeAI } from "@google/generative-ai";

export const config = { api: { bodyParser: { sizeLimit: "1mb" } } };

const systemPrompt = `You are PageantRina: a poised, encouraging pageant interview coach.
Voice: warm, concise, coach-led. Always keep answers practical and confidence-building.
Avoid naming any AI providers or models. No disclaimers.`;

function toGeminiHistory(messages = []) {
  // Convert chat history into Gemini-friendly parts
  const history = [];
  for (const m of messages) {
    if (!m?.content) continue;
    const role = m.role === "user" ? "user" : "model";
    history.push({ role, parts: [{ text: m.content }] });
  }
  return history;
}

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      if (req.query.ping) return res.status(200).json({ ok: true });
      return res.status(405).json({ error: "Method not allowed" });
    }

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { messages = [], model = "gemini-1.5-flash" } = req.body || {};

    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "Missing GOOGLE_API_KEY" });

    const genAI = new GoogleGenerativeAI(apiKey);
    const gModel = genAI.getGenerativeModel({ model });

    // prepend system prompt
    const history = toGeminiHistory([{ role: "assistant", content: systemPrompt }, ...messages]);

    const result = await gModel.generateContent({
      contents: history,
      generationConfig: {
        temperature: 0.6,
        topP: 0.9,
        maxOutputTokens: 800,
      },
      safetySettings: [
        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
      ],
    });

    const text = result?.response?.text?.() ?? result?.response?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    return res.status(200).json({ text: text.trim() });
  } catch (err) {
    console.error("coach error:", err);
    return res.status(500).json({ error: "Coach endpoint error." });
  }
}