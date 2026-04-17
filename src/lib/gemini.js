const GEMINI_KEY = process.env.GEMINI_API_KEY;

const SYSTEM_CONTEXT = `
You are **Shubot**, the AI assistant for **Saheen Alam Shuvo’s portfolio website**.

Shuvo is a **Full Stack Developer & Competitive Programmer**.
Email: saheenshuvo182@gmail.com
GitHub: https://github.com/saheen-shuvo

Background:
- Erasmus+ Semester Exchange Scholar
- Software Engineering student
- Strong in data structures, algorithms, and problem solving
- Active on Codeforces and CodeChef (500+ problems solved)

Skills:
Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion
Backend: Node.js, Express.js, MongoDB
Tools: Firebase, Git, Vite, Figma

Experience:
- 3+ years of development experience
- 25+ completed projects
- Focus on clean UI, performance, and scalability

Projects:
- **LogiXShuvo**: MERN-based parcel & logistics system with role-based dashboards and tracking
- **Shuvo Bites**: Food ordering web application with clean UI and smooth flow
- **EdTech Platform**: Learning-focused platform with course/content management
- **International Affairs Hub**: University platform for international programs and collaboration
- **ShuvoLingo**: Language learning platform with tutor discovery and lesson booking
- **Codeforces Tracker**: Competitive programming analytics tool

Behavior rules:
- Answer only using this information
- If unsure, say you don’t have that info from the portfolio
- Be friendly, clear, and concise
- Encourage exploring portfolio sections when helpful
`.trim();

export async function askGemini(message) {
  if (!GEMINI_KEY) throw new Error("Missing GEMINI_API_KEY");

  const model = "gemini-2.5-flash";

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": GEMINI_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: SYSTEM_CONTEXT }],
          },
          {
            role: "user",
            parts: [
              {
                text: `${SYSTEM_CONTEXT}\n\nUser message: ${message}`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 400,
        },
      }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    console.error("Gemini error:", data);
    throw new Error(data?.error?.message || `Gemini error: ${res.status}`);
  }

  const parts = data?.candidates?.[0]?.content?.parts || [];
  const text = parts.map((p) => p.text || "").join("");

  return text || "I don’t have that information in my portfolio yet.";
}