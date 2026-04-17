// app/api/ask-shubot/route.js

import { askGemini } from "@/lib/gemini";


export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message) {
      return Response.json(
        { reply: "No message provided" },
        { status: 400 }
      );
    }

    const reply = await askGemini(message);

    return Response.json({ reply });
  } catch (error) {
    console.error("AskShubot route error:", error);

    return Response.json(
      {
        reply: "Something went wrong while talking to Gemini.",
      },
      { status: 500 }
    );
  }
}