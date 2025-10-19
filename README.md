🚀 Projectify — AI-Powered Project Idea Generator

Projectify is an intelligent web app that helps you generate creative tech project ideas instantly.
Simply choose your project type (e.g. website, app, hardware, etc.) and a few categories (like education, music, or health), and Projectify will create a unique idea for you — complete with a title and one-line description.

🌟 Features

⚙️ AI Idea Generation: Automatically generates creative project ideas using OpenAI’s GPT models.

🎨 Category-Based Customization: Tailor your idea to specific topics or industries.

⚡ Fast & Simple UI: Built with React for a smooth, modern user experience.

🧩 Full-Stack Setup: Integrated backend (Node.js + Express) and frontend.

🔒 Environment Variables: API keys are stored securely using .env.

🧠 Tech Stack

Frontend:

React (Next.js optional)

Tailwind CSS (or your preferred styling setup)

Backend:

Node.js

Express.js

OpenAI API integration

📦 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/farhadalibayli/Projectify.git
cd Projectify

2️⃣ Install dependencies
cd backend
npm install

3️⃣ Add your API key

Create a file named .env inside the backend folder and add:

OPENAI_API_KEY=your_api_key_here

4️⃣ Run the backend server
npm start


Server will start at http://localhost:5000

5️⃣ Run the frontend

If your frontend is in a separate folder (like /frontend):

cd ../frontend
npm install
npm run dev


Then open http://localhost:3000

💡 Example Usage

POST Request:

POST /api/generate-idea
{
  "projectType": "website",
  "categories": ["Education", "Health"]
}


Response:

{
  "idea": "EduPulse — an AI-driven web platform that personalizes learning paths based on student behavior."
}

🤝 Contributing

Pull requests are welcome!
If you’d like to improve the design, idea-generation logic, or overall user experience:

Fork the repo

Create your feature branch (git checkout -b feature-name)

Commit your changes

Push to your branch and open a Pull Request

✨ Author

Farhad Alibayli
Full-Stack Developer & Innovator

“Turn your ideas into projects, and your projects into impact.”