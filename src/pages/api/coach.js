import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { mode = "script", text = "", question = "", wpmTarget = 155 } = req.body || {};
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "Missing GOOGLE_API_KEY" });

    const genai = new GoogleGenerativeAI(apiKey);
    const model = genai.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
You are PageantRina, an elite pageant interview coach.
Contestant mode: ${mode}.
Practice question: ${question}

Contestant answer/transcript:
"""${text}"""

Give concise, constructive feedback with:
1) Overall (1–5) and why
2) Structure (Opening • Core • Close)
3) Pacing: estimate if near ${wpmTarget} wpm (too fast/slow/just right)
4) Filler Words: note obvious ones
5) Tone & Presence: warmth, authenticity, clarity
6) One "Next-Rep Drill" (very specific)
Return a short markdown coach note for the app UI.`;

    const result = await model.generateContent(prompt);
    const coachNotes = result?.response?.text?.() || "No notes produced.";
    res.status(200).json({ coachNotes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Coach analysis failed" });
  }
}