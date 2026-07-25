import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { describeVibe } from "@/lib/describeVibe";
import { AXES, VibeVector } from "@/lib/types";

export const runtime = "nodejs";

interface RequestBody {
  vector: VibeVector;
  archetypeName: string;
  location: string;
}

export async function POST(req: NextRequest) {
  let body: RequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { vector, archetypeName, location } = body;

  if (!vector || !location || typeof location !== "string" || !location.trim()) {
    return NextResponse.json({ error: "Missing vector or location." }, { status: 400 });
  }
  for (const axis of AXES) {
    if (typeof vector[axis] !== "number") {
      return NextResponse.json({ error: "Malformed vibe vector." }, { status: 400 });
    }
  }

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "Server is missing OPENAI_API_KEY. Add it to .env.local and restart the dev server." },
      { status: 500 }
    );
  }

  const descriptors = describeVibe(vector);
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const systemPrompt = `You are a sharp, well-traveled local guide who matches real people to real places based on personality, not generic "top 10" lists. You avoid tourist traps unless the person's profile genuinely calls for them. You only recommend places that plausibly exist in the given location, drawing on your general knowledge of that kind of place and area; if you are not confident a specific real venue exists, describe a specific, plausible type of venue and neighborhood instead of inventing a fake proper name. You always respond with strict JSON and nothing else.`;

  const userPrompt = `Location: ${location.trim()}

Personality profile ("${archetypeName}"): this person is ${descriptors.join(", ") || "fairly balanced across the board"}.

Recommend exactly 6 local spots in or very near this location that fit this specific personality profile. Vary the categories (e.g. mix of café, bar, park, gallery, bookstore, market, viewpoint, live music, class or activity) rather than repeating the same type. Do not include generic mega-chains.

Respond with ONLY a JSON object of this exact shape, no markdown fences, no commentary:
{
  "spots": [
    {
      "name": "string, the venue or spot name",
      "category": "string, short category label like 'Coffee Shop' or 'Rooftop Bar'",
      "neighborhood": "string, neighborhood or area name, empty string if unknown",
      "description": "string, 1-2 sentences describing the spot itself",
      "whyItFits": "string, 1 sentence connecting it directly to this personality profile"
    }
  ]
}`;

  try {
    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      response_format: { type: "json_object" },
      temperature: 0.9,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    const raw = completion.choices[0]?.message?.content;
    if (!raw) {
      return NextResponse.json({ error: "Empty response from model." }, { status: 502 });
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.spots)) {
      return NextResponse.json({ error: "Model response was missing a spots array." }, { status: 502 });
    }

    return NextResponse.json({ spots: parsed.spots });
  } catch (err) {
    console.error("OpenAI request failed:", err);
    return NextResponse.json({ error: "Failed to generate spots. Please try again." }, { status: 500 });
  }
}
