import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Server,
  Smartphone,
  Database,
  Cloud,
  Brain,
} from "lucide-react";

const categories = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: <Monitor className="w-5 h-5" />,
    color: "from-orange-500 to-amber-500",
    techs: [
      { name: "React", description: "Modern UI library by Meta", level: 92 },
      { name: "Next.js", description: "Fullstack React framework", level: 88 },
      { name: "TypeScript", description: "Typed JavaScript for scalability", level: 90 },
      { name: "Tailwind CSS", description: "Utility-first styling framework", level: 95 },
    ],
  },
  {
    id: "backend",
    name: "Backend Development",
    icon: <Server className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500",
    techs: [
      { name: "Node.js", description: "Event-driven backend runtime", level: 90 },
      { name: "Spring Boot", description: "Enterprise Java framework", level: 86 },
      { name: "Express", description: "Minimal Node.js backend", level: 82 },
      { name: "NestJS", description: "Scalable TypeScript backend", level: 84 },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Development",
    icon: <Smartphone className="w-5 h-5" />,
    color: "from-pink-500 to-rose-500",
    techs: [
      { name: "Flutter", description: "Cross-platform by Google", level: 88 },
      { name: "React Native", description: "Hybrid mobile framework", level: 85 },
      { name: "Swift", description: "Native iOS development", level: 80 },
      { name: "Kotlin", description: "Native Android development", level: 83 },
    ],
  },
  {
    id: "database",
    name: "Database & Storage",
    icon: <Database className="w-5 h-5" />,
    color: "from-green-500 to-emerald-500",
    techs: [
      { name: "PostgreSQL", description: "Advanced relational DB", level: 92 },
      { name: "MongoDB", description: "NoSQL document store", level: 87 },
      { name: "Redis", description: "In-memory caching", level: 85 },
      { name: "Firebase", description: "Cloud-hosted backend", level: 84 },
    ],
  },
  {
    id: "ai",
    name: "AI & Machine Learning",
    icon: <Brain className="w-5 h-5" />,
    color: "from-yellow-500 to-orange-500",
    techs: [
      { name: "TensorFlow", description: "ML platform by Google", level: 88 },
      { name: "PyTorch", description: "Dynamic neural network framework", level: 86 },
      { name: "OpenAI API", description: "AI model integration & GPT", level: 90 },
      { name: "LangChain", description: "AI workflow orchestration", level: 83 },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    color: "from-purple-500 to-indigo-500",
    techs: [
      { name: "AWS", description: "Cloud computing platform", level: 92 },
      { name: "Azure", description: "Microsoft cloud ecosystem", level: 85 },
      { name: "Docker", description: "Containerization platform", level: 93 },
      { name: "Kubernetes", description: "Container orchestration", level: 88 },
    ],
  },
];

// Helper function to get the correct border color class
const getBorderColorClass = (color: string, active: boolean) => {
  const colorName = color.split(' ')[0].split('-')[1];
  return active ? `border-${colorName}-500` : '';
};

export default function TechCategories() {
  const [active, setActive] = useState("ai");
  const selected = categories.find((c) => c.id === active)!;

  return (
    <section id="techStack" className="py-20 transition-colors duration-300 bg-gray-50 dark:bg-gradient-to-b dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Technology
            </span>{" "}
            Categories
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 text-sm sm:text-base">
            Comprehensive expertise across all layers of modern software development
          </p>
        </div>

        {/* Tabs */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-4 hide-scrollbar mb-10 -mx-4 px-4">
            <div className="flex gap-4 min-w-max w-full sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:max-w-5xl sm:mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-3 p-4 rounded-xl text-sm font-medium border-2 transition-all duration-200 h-full
                ${
                  active === cat.id
                    ? `bg-white dark:bg-gray-800 shadow-md transform scale-[1.02] ${getBorderColorClass(cat.color, true)}`
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
            >
              <div className={`p-2 rounded-lg ${active === cat.id ? 'bg-white dark:bg-gray-700' : 'bg-gray-100 dark:bg-gray-700'}`}>
                {React.cloneElement(cat.icon, {
                  className: `w-5 h-5 ${active === cat.id ? `text-${cat.color.split(' ')[0].split('-')[1]}-500` : 'text-gray-500 dark:text-gray-400'}`
                })}
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-800 dark:text-gray-200">{cat.name}</div>
                <div className="text-xs opacity-80 mt-0.5">
                  {cat.techs.length} technologies
                </div>
              </div>
            </button>
            ))}
            </div>
          </div>
        </div>

        {/* Tech Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {selected.techs.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all"
              >
                    <div className="flex items-center space-x-2 mb-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {tech.name}
                  </h3>
                  <span className="text-sm font-medium text-orange-500 dark:text-amber-400">
                    {tech.level}%
                  </span>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-3">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${selected.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
