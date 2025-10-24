import React from "react";
import { Link } from "react-router-dom";
import { Palette, ArrowLeft, Monitor, MousePointerClick, Smile, LineChart } from "lucide-react";

export default function UIUXDesignPage() {
  const services = [
    {
      title: "User Research",
      description:
        "Understand your users and their needs through comprehensive research.",
      features: [
        "User Interviews",
        "Persona Development",
        "User Journey Mapping",
        "Usability Testing",
      ],
      gradient: "from-orange-200/60 to-transparent dark:from-orange-800/40",
    },
    {
      title: "UI/UX Design",
      description: "Create intuitive and visually appealing user interfaces.",
      features: [
        "Wireframing & Prototyping",
        "Visual Design",
        "Interaction Design",
        "Design Systems",
      ],
      gradient: "from-red-200/60 to-transparent dark:from-red-800/40",
    },
    {
      title: "Mobile & Web Design",
      description: "Responsive designs that work seamlessly across all devices.",
      features: [
        "Responsive Web Design",
        "Mobile-First Approach",
        "Progressive Web Apps",
        "Cross-Platform Consistency",
      ],
      gradient: "from-amber-200/60 to-transparent dark:from-amber-800/40",
    },
    {
      title: "UI/UX Audit",
      description: "Evaluate and improve your existing user experience.",
      features: [
        "Heuristic Evaluation",
        "Usability Analysis",
        "Conversion Rate Optimization",
        "Accessibility Review",
      ],
      gradient: "from-orange-200/60 to-transparent dark:from-orange-800/40",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
     

      {/* 🎨 Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30">
              <Palette size={42} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">UI/UX Design</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Beautiful, intuitive interfaces that delight users and elevate your brand experience.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
      </section>

      {/* 📋 Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Design That Engages and Converts
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We create stunning, user-centered designs that not only look
            beautiful but also deliver exceptional experiences. Our process
            blends creativity with data-driven insights to ensure your product
            delights users and drives results.
          </p>
        </div>

        {/* 🧩 Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* 🌈 Gradient Light Effect */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.gradient} rounded-full blur-3xl opacity-60`}
              ></div>

              <div className="relative z-10">
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 pl-4">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-orange-500 dark:text-orange-400">
                        •
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 💡 Why Choose Us */}
        <div className="text-center mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-10">
            Why Choose Our Design Team?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Monitor className="w-8 h-8" />,
                title: "User-Focused Approach",
                text: "We design with empathy — focusing on user needs and real-world usability.",
              },
              {
                icon: <MousePointerClick className="w-8 h-8" />,
                title: "Interactive & Engaging",
                text: "We craft smooth, interactive interfaces that drive engagement and retention.",
              },
              {
                icon: <LineChart className="w-8 h-8" />,
                title: "Conversion-Oriented Design",
                text: "Every design decision aims to improve business metrics and user satisfaction.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* 🌈 Gradient top-right */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-orange-200/60 to-transparent dark:from-orange-800/40 rounded-full blur-3xl opacity-60"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300">
                    {React.cloneElement(item.icon, {
                      className:
                        "text-orange-600 dark:text-orange-400 group-hover:text-white transition-colors duration-300",
                    })}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🚀 CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/10 p-10 rounded-2xl border border-orange-100 dark:border-orange-900/30">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Elevate Your User Experience?
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Our design team is ready to create beautiful, intuitive interfaces
            that delight your users and deliver measurable business results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-orange-500/20"
          >
            Get in Touch
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
