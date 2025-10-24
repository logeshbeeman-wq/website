import React, { useRef, useState } from 'react';
import {
  Brain,
  BarChart3,
  Eye,
  MessageSquare,
  Cpu,
  Bot,
  Database,
} from 'lucide-react';

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
      {/* Gradient Glow */}
      <div
        className="absolute w-80 h-80 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          background: `radial-gradient(circle, ${service.gradient} 0%, transparent 70%)`,
          opacity: isHovered ? 0.6 * (1 - mouseDistance * 0.7) : 0,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.2 : 1})`,
          transition:
            'opacity 0.2s ease-out, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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
              <span className="text-violet-500 dark:text-violet-400">•</span>
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function AISolutionsPage() {
  const serviceCards: Service[] = [
    {
      icon: <BarChart3 className="w-6 h-6 text-violet-500 dark:text-violet-400" />,
      title: 'Predictive Analytics',
      description:
        'Leverage historical data to forecast future trends and make data-driven decisions.',
      features: ['Demand Forecasting', 'Customer Churn Prediction', 'Sales & Revenue Projections', 'Risk Assessment'],
      gradient: 'rgba(59,130,246,0.6)'
    },
    {
      icon: <Eye className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
      title: 'Computer Vision',
      description:
        'Extract meaningful information from images and videos to automate visual tasks.',
      features: ['Object Detection & Recognition', 'Facial Recognition', 'Quality Control Automation', 'Document Analysis'],
      gradient: 'rgba(139,92,246,0.6)'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
      title: 'Natural Language Processing',
      description:
        'Enable machines to understand, interpret, and generate human language.',
      features: ['Chatbots & Virtual Assistants', 'Sentiment Analysis', 'Text Classification', 'Document Summarization'],
      gradient: 'rgba(129,140,248,0.6)'
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
      title: 'Machine Learning',
      description:
        'Build custom ML models tailored to your specific business needs.',
      features: ['Custom Algorithm Development', 'Model Training & Optimization', 'Anomaly Detection', 'Recommendation Systems'],
      gradient: 'rgba(34,197,94,0.6)',
    },
  ];

  const whyChooseUs = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Expert Team',
      text: 'Years of AI experience across industries, delivering high-quality solutions.',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Custom Solutions',
      text: 'Tailored AI solutions to match your business needs and objectives.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'End-to-End Support',
      text: 'Comprehensive support from consultation to deployment and maintenance.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-violet-600 to-purple-600 text-white py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30">
              <Brain size={42} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Solutions</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Advanced AI and machine learning models to automate and optimize your business operations.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Intelligent Solutions for the Modern Business
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Harness the power of AI to transform operations, automate tasks, and gain actionable insights from your data.
            Stay ahead of the competition with our intelligent AI solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {serviceCards.map((service, idx) => (
            <CardWithGradient key={idx} service={service} />
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-10">Why Choose Our AI Solutions?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 z-10"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center group-hover:bg-violet-600 group-hover:scale-110 transition-all duration-300">
                  {React.cloneElement(item.icon, {
                    className: "text-violet-600 dark:text-violet-400 group-hover:text-white transition-colors duration-300",
                  })}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/10 p-10 rounded-2xl border border-violet-100 dark:border-violet-900/30 z-10">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Let’s discuss how our AI solutions can help you achieve your business goals.
            Contact us today for a free consultation.
          </p>
          <button className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
