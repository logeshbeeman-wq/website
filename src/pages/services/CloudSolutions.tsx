import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cloud, ShieldCheck, Cpu, Zap, Layers } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

interface ServiceCardProps {
  service: Service;
}

const CardWithGradient: React.FC<ServiceCardProps> = ({ service }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouseDistance, setMouseDistance] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPosition({ x, y });

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distance = Math.sqrt(
        Math.pow((x - centerX) / centerX, 2) +
        Math.pow((y - centerY) / centerY, 2)
      ) / Math.SQRT2;

      setMouseDistance(Math.min(distance * 1.2, 1));
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group p-8 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden z-10"
    >
      <div
        className="absolute w-80 h-80 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          background: `radial-gradient(circle, ${service.gradient} 0%, transparent 70%)`,
          opacity: isHovered ? 0.6 * (1 - mouseDistance * 0.7) : 0,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.2 : 1})`,
          transition: 'opacity 0.2s ease-out, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          filter: `blur(${isHovered ? '90px' : '70px'})`,
          zIndex: 0,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-white dark:bg-gray-800/50 shadow-sm mr-4 z-10">
            {service.icon}
          </div>
          <h4 className="text-xl font-semibold">{service.title}</h4>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
        <ul className="space-y-2 mb-4">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-green-500 dark:text-green-400">•</span>
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function CloudSolutionsPage() {
  const serviceCards: Service[] = [
    {
      icon: <Cloud className="w-6 h-6 text-green-500 dark:text-green-400" />,
      title: "Cloud Migration",
      description:
        "Seamlessly transition your infrastructure and applications to the cloud.",
      features: [
        "Lift-and-shift migrations",
        "Replatforming & Refactoring",
        "Database Migration",
        "Hybrid Cloud Solutions",
      ],
      gradient: 'rgba(34,197,94,0.6)'
    },
    {
      icon: <Layers className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
      title: "Cloud Architecture",
      description:
        "Design and implement scalable, secure, and cost-effective cloud architectures.",
      features: [
        "Microservices Architecture",
        "Serverless Computing",
        "Containerization & Kubernetes",
        "Multi-Cloud Strategies",
      ],
      gradient: 'rgba(16,185,129,0.6)'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-500 dark:text-teal-400" />,
      title: "Cloud Security",
      description:
        "Protect your cloud infrastructure and data with enterprise-grade security.",
      features: [
        "Identity & Access Management",
        "Data Encryption",
        "Compliance & Governance",
        "Security Monitoring",
      ],
      gradient: 'rgba(20,184,166,0.6)'
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
      title: "Cloud Optimization",
      description:
        "Maximize performance and minimize costs with continuous cloud optimization.",
      features: [
        "Cost Management",
        "Performance Tuning",
        "Auto-scaling",
        "Resource Right-sizing",
      ],
      gradient: 'rgba(8,145,178,0.6)'
    },
    {
      icon: <Cpu className="w-6 h-6 text-sky-500 dark:text-sky-400" />,
      title: "Cloud Managed Services",
      description:
        "Focus on your business while we manage your cloud infrastructure.",
      features: [
        "24/7 Monitoring",
        "Incident Management",
        "Patch Management",
        "Backup & Recovery",
      ],
      gradient: 'rgba(14,165,233,0.6)'
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
      title: "DevOps & Automation",
      description:
        "Accelerate development cycles with CI/CD pipelines and automation.",
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Configuration Management",
        "Release Automation",
      ],
      gradient: 'rgba(59,130,246,0.6)'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-emerald-500 text-white py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30">
              <Cloud size={42} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cloud Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Scalable cloud infrastructure and migration services that empower
            innovation, flexibility, and growth.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
      </section>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cloud Solutions for the Modern Enterprise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform your business with our comprehensive cloud solutions.
            We help organizations leverage the power of cloud computing to
            improve agility, reduce costs, and accelerate innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {serviceCards.map((service, index) => (
            <CardWithGradient key={index} service={service} />
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-10">
            Why Choose Our Cloud Solutions?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Expert Cloud Architects",
                text: "Certified professionals with deep expertise in AWS, Azure, and GCP.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Enterprise Security",
                text: "Robust security and compliance frameworks to protect your data.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Performance & Scalability",
                text: "Architected for reliability, performance, and global scalability.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Light gradient top-right */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-green-200/60 to-transparent dark:from-green-800/40 rounded-full blur-3xl opacity-60"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center group-hover:bg-emerald-600 group-hover:scale-110 transition-all duration-300">
                    {React.cloneElement(item.icon, {
                      className:
                        "text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors duration-300",
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

        {/* ☁️ CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 p-10 rounded-2xl border border-green-100 dark:border-green-900/30">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business with Cloud?
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Our cloud experts can help you design, migrate, and optimize your
            cloud infrastructure for maximum performance and cost-efficiency.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-emerald-500/20"
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
