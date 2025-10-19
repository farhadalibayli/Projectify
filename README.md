# AI-Powered Tech Idea Generator

A modern, minimalist web application that generates creative and innovative tech project ideas. Users can select from various project types (websites, mobile apps, AI tools, games, etc.) and multiple categories (music, gaming, education, health, etc.) to receive personalized project suggestions with witty descriptions.

## ✨ Features

- **8 Project Types**: Website, Mobile App, AI Tool, Game, Desktop App, API, Browser Extension, IoT Project
- **12 Categories**: Music, Gaming, Education, Health, Finance, Social, Productivity, Entertainment, Travel, Food, Fitness, Art & Design
- **Smart AI Generation**: Creates unique project ideas combining selected types and categories
- **Modern UI/UX**: Beautiful gradient design with smooth animations and responsive layout
- **Interactive Elements**: Hover effects, loading states, and smooth transitions
- **Tech Stack Suggestions**: Provides relevant technology recommendations for each generated idea
- **Difficulty Levels**: Shows project complexity (Beginner, Intermediate, Advanced)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Projectify
```

2. Navigate to the frontend directory:
```bash
cd frontend
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open your browser and visit `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Webpack 5
- **Styling**: Pure CSS with modern features (CSS Grid, Flexbox, CSS Variables)
- **Development**: Webpack Dev Server with hot reloading

## 🎨 Design Features

- **Modern Gradient Background**: Beautiful purple-blue gradient
- **Glass Morphism**: Frosted glass effects with backdrop blur
- **Smooth Animations**: CSS transitions and keyframe animations
- **Responsive Design**: Mobile-first approach with breakpoints
- **Interactive Feedback**: Hover states, loading spinners, and visual feedback
- **Color-coded Categories**: Each category has its unique color scheme

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 How It Works

1. **Select Project Type**: Choose from 8 different project types with descriptive icons
2. **Pick Categories**: Select one or more categories that interest you
3. **Generate Idea**: Click the generate button to create a unique project idea
4. **View Results**: Get a detailed project description with tech stack and difficulty level
5. **Generate Another**: Create more ideas by clicking "Generate Another"

## 🔧 Customization

### Adding New Project Types

Edit the `PROJECT_TYPES` array in `App.tsx`:

```typescript
const PROJECT_TYPES: ProjectType[] = [
  // Add your new project type
  { id: "new-type", name: "New Type", icon: "🆕", description: "Description here" }
];
```

### Adding New Categories

Edit the `CATEGORIES` array in `App.tsx`:

```typescript
const CATEGORIES: Category[] = [
  // Add your new category
  { id: "new-category", name: "New Category", color: "#FF5733" }
];
```

### Customizing Tech Stacks

Update the `TECH_STACKS` object in `App.tsx` to add technologies for specific project types.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or suggestions, please open an issue on GitHub.

---

Built with ❤️ for developers and creators
