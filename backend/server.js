import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/generate-idea", async (req, res) => {
  try {
    const { projectType, categories } = req.body;
    if (!projectType || !categories || categories.length === 0) {
      return res.status(400).json({ error: "Missing projectType or categories" });
    }

    const prompt = `Generate one creative and unique project idea for a ${projectType} app or website 
based on these categories: ${categories.join(", ")}. 
Give me a catchy title and a one-sentence description.`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct", // fast, open, creative
        messages: [
          { role: "system", content: "You are a creative startup idea generator." },
          { role: "user", content: prompt },
        ],
        max_tokens: 150,
      }),
    });

    const data = await response.json();
    const idea = data.choices?.[0]?.message?.content || "No idea generated";
    res.json({ idea });
  } catch (err) {
    console.error("Error generating idea:", err);
    res.status(500).json({ error: "Failed to generate idea" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
