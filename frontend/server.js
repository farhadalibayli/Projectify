// frontend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/api/generate-idea", async (req, res) => {
  const { projectType, categories } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: `Generate 1 creative tech project idea for ${projectType} in categories: ${categories.join(
            ", "
          )}`
        }
      ]
    });

    const idea = response.choices[0].message.content;
    res.json({ idea });
  } catch (err) {
    console.error("Error generating idea:", err);
    res.status(500).json({ error: "Failed to generate idea" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
