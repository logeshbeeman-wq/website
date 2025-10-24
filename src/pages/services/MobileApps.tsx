import React from "react";
import { Link } from "react-router-dom";
import {
  Smartphone,
  ArrowLeft,
  Layers,
  RefreshCw,
  Code,
  MonitorSmartphone,
} from "lucide-react";

export default function MobileAppsPage() {
  const services = [
    {
      title: "Native iOS Development",
      description:
        "High-performance apps built specifically for Apple’s ecosystem.",
      features: [
        "Swift & SwiftUI",
        "iOS App Store Optimization",
        "Apple Pay Integration",
        "ARKit for Augmented Reality",
      ],
      gradient: "from-purple-200/60 to-transparent dark:from-purple-800/40",
    },
    {
      title: "Native Android Development",
      description:
        "Robust applications for the world’s most popular mobile platform.",
      features: [
        "Kotlin & Jetpack Compose",
        "Material Design 3",
        "Google Play Optimization",
        "Google Pay Integration",
      ],
      gradient: "from-pink-200/60 to-transparent dark:from-pink-800/40",
    },
    {
      title: "Cross-Platform Development",
      description: "Single codebase solutions for both iOS and Android.",
      features: ["React Native", "Flutter", "Ionic", "Xamarin"],
      gradient: "from-fuchsia-200/60 to-transparent dark:from-fuchsia-800/40",
    },
    {
      title: "App Maintenance & Support",
      description:
        "Keep your mobile applications up-to-date and performing at their best.",
      features: [
        "Regular Updates",
        "Bug Fixes",
        "Performance Optimization",
        "Security Patches",
      ],
      gradient: "from-purple-200/60 to-transparent dark:from-purple-800/40",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">

      {/* 📱 Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30">
              <Smartphone size={42} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mobile Apps</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Native and cross-platform mobile solutions for iOS and Android —
            built for performance, usability, and engagement.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
      </section>

      {/* 📋 Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mobile Solutions That Drive Engagement
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We create powerful, intuitive mobile applications that deliver
            seamless experiences across iOS and Android. Our mobile development
            expertise helps you connect with your customers on the devices they
            use most.
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
                      <span className="text-pink-500 dark:text-pink-400">•</span>
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
            Why Choose Our Mobile App Development?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Modern Technologies",
                text: "We use the latest frameworks like SwiftUI, Kotlin, and Flutter to build cutting-edge apps.",
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: "Seamless Experience",
                text: "Delivering smooth, fast, and intuitive interfaces users love to interact with.",
              },
              {
                icon: <RefreshCw className="w-8 h-8" />,
                title: "Continuous Support",
                text: "From updates to scaling — we ensure your app stays fast, secure, and reliable.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* 🌈 Gradient top-right */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-pink-200/60 to-transparent dark:from-pink-800/40 rounded-full blur-3xl opacity-60"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center group-hover:bg-pink-600 group-hover:scale-110 transition-all duration-300">
                    {React.cloneElement(item.icon, {
                      className:
                        "text-pink-600 dark:text-pink-400 group-hover:text-white transition-colors duration-300",
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
        <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/10 p-10 rounded-2xl border border-pink-100 dark:border-pink-900/30">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">
            Have a Mobile App Idea?
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can turn your vision into a successful mobile
            application with engaging design and rock-solid performance.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-pink-500/20"
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
