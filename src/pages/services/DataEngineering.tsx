import React from "react";
import { Link } from "react-router-dom";
import { Database, ArrowLeft, BarChart3, Server, Layers, Cpu } from "lucide-react";

export default function DataEngineeringPage() {
  const services = [
    {
      title: "Data Pipeline Development",
      description:
        "Build robust ETL/ELT pipelines for efficient data processing and movement.",
      features: [
        "Batch & Real-time Processing",
        "Data Integration",
        "Workflow Automation",
        "Data Quality Management",
      ],
      gradient: "from-indigo-200/60 to-transparent dark:from-indigo-800/40",
    },
    {
      title: "Data Warehousing",
      description: "Design and implement scalable data storage solutions.",
      features: [
        "Cloud Data Warehouses",
        "Data Lake Architecture",
        "Data Modeling",
        "Data Governance",
      ],
      gradient: "from-purple-200/60 to-transparent dark:from-purple-800/40",
    },
    {
      title: "Big Data Solutions",
      description: "Process and analyze large volumes of data efficiently.",
      features: [
        "Hadoop Ecosystem",
        "Apache Spark",
        "Stream Processing",
        "NoSQL Databases",
      ],
      gradient: "from-violet-200/60 to-transparent dark:from-violet-800/40",
    },
    {
      title: "BI & Analytics",
      description: "Turn data into actionable insights with powerful analytics.",
      features: [
        "Data Visualization",
        "Business Intelligence",
        "Predictive Analytics",
        "Dashboard Development",
      ],
      gradient: "from-indigo-200/60 to-transparent dark:from-indigo-800/40",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">

      {/* 🧠 Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30">
              <Database size={42} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Data Engineering
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Robust data pipelines and analytics solutions that empower
            data-driven decision-making across your organization.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
      </section>

      {/* 📊 Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Data Engineering for the Data-Driven Enterprise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform raw data into valuable insights with scalable, reliable,
            and secure data pipelines. Our data engineering solutions help you
            build a strong foundation for analytics and AI.
          </p>
        </div>

        {/* ⚙️ Services Grid */}
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
                      <span className="text-indigo-500 dark:text-indigo-400">
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

        {/* 🧩 Why Choose Us */}
        <div className="text-center mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-10">
            Why Choose Our Data Engineering Services?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Scalable Architecture",
                text: "We design future-ready data architectures that grow with your business.",
              },
              {
                icon: <Server className="w-8 h-8" />,
                title: "Advanced Technologies",
                text: "Expertise in Spark, Kafka, Hadoop, and modern cloud-native data stacks.",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Actionable Insights",
                text: "Transform your raw data into meaningful business intelligence.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Light gradient top-right */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-indigo-200/60 to-transparent dark:from-indigo-800/40 rounded-full blur-3xl opacity-60"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-300">
                    {React.cloneElement(item.icon, {
                      className:
                        "text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors duration-300",
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
        <div className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/10 p-10 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Unlock the Power of Your Data?
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Our data engineering experts can help you build a strong foundation
            for analytics, AI, and business intelligence. Let’s make your data
            work for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-indigo-500/20"
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
