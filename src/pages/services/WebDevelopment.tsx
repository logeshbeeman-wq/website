import { Globe, Code, Layout, Smartphone, Server, Zap, Palette } from 'lucide-react';
import { useState } from 'react';

const serviceCards = [
  {
    icon: <Code className="w-6 h-6 text-blue-500" />,
    title: "Custom Web Applications",
    description: "Tailored solutions built from scratch to meet your specific business requirements.",
    features: [
      "Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "Content Management Systems"
    ],
    gradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10"
  },
  {
    icon: <Layout className="w-6 h-6 text-blue-500" />,
    title: "Frontend Development",
    description: "Beautiful, responsive interfaces that work seamlessly across all devices.",
    features: [
      "React.js & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design"
    ],
    gradient: "from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/10"
  },
  {
    icon: <Server className="w-6 h-6 text-blue-500" />,
    title: "Backend Development",
    description: "Robust server-side solutions for your web applications.",
    features: [
      "Node.js & Express",
      "RESTful & GraphQL APIs",
      "Database Design & Optimization",
      "Serverless Architecture"
    ],
    gradient: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/10"
  },
  {
    icon: <Smartphone className="w-6 h-6 text-blue-500" />,
    title: "Mobile-First Development",
    description: "Responsive designs that look great on any device.",
    features: [
      "Responsive Web Design",
      "Mobile UI/UX Optimization",
      "Touch-Friendly Interfaces",
      "Performance Optimization"
    ],
    gradient: "from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/10"
  }
];

const techStack = [
  { name: "React", progress: 95 },
  { name: "Next.js", progress: 90 },
  { name: "TypeScript", progress: 90 },
  { name: "Node.js", progress: 85 },
  { name: "Tailwind CSS", progress: 95 },
  { name: "GraphQL", progress: 80 },
  { name: "MongoDB", progress: 75 },
  { name: "PostgreSQL", progress: 80 },
  { name: "Docker", progress: 70 },
  { name: "AWS", progress: 65 },
];

export default function WebDevelopmentPage() {
  return (
    <div className="text-gray-900 dark:text-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30">
              <Globe size={42} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Web Development</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Build modern, responsive, and scalable web applications that deliver exceptional digital experiences.
            We combine creativity with cutting-edge technology to bring your ideas to life.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Web Development Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceCards.map((service, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl border border-gray-100 dark:border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${service.gradient}`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-white dark:bg-gray-800/50 shadow-sm mr-4">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {service.title}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack with Progress Bars */}
      <section className="py-16 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technology Stack & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {techStack.map((tech, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-2">{tech.name}</h4>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                  <div 
                    className="bg-cyan-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${tech.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{tech.progress}% proficiency</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-600 dark:text-gray-300">
            Our team leverages a wide range of modern technologies to deliver scalable, efficient, and cutting-edge web applications.
            We continuously learn and adopt new tools to stay ahead in the fast-evolving web development landscape.
          </p>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="space-y-6">
            {[
              {
                title: "Discovery & Planning",
                description: "Understanding your business goals, target audience, and technical requirements to create a detailed roadmap.",
                icon: <Zap className="w-6 h-6 text-blue-500" />
              },
              {
                title: "Design & Prototyping",
                description: "Wireframes and prototypes visualize the user experience and interface before development begins.",
                icon: <Layout className="w-6 h-6 text-blue-500" />
              },
              {
                title: "Development & Testing",
                description: "Writing clean, maintainable code while following best practices and testing at every stage.",
                icon: <Code className="w-6 h-6 text-blue-500" />
              },
              {
                title: "Deployment & Maintenance",
                description: "Handling deployment and ongoing support to ensure your website stays secure and up-to-date.",
                icon: <Server className="w-6 h-6 text-blue-500" />
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="flex flex-col sm:flex-row p-6 rounded-xl bg-gradient-to-r from-blue-50/50 to-cyan-50/50 dark:from-blue-900/10 dark:to-cyan-900/10 border border-blue-100 dark:border-blue-900/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl max-w-6xl mx-auto my-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Let’s discuss your project and bring your vision to life with our expert web development services.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-white/90 transition-colors duration-300">
          Start Your Project
        </button>
      </section>

    </div>
  );
}
