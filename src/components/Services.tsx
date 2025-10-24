import { Globe, Smartphone, Cloud, Palette, Database, Brain } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices',
    gradient: 'from-blue-500 to-cyan-500',
    path: 'web-development'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions for iOS and Android',
    gradient: 'from-purple-500 to-pink-500',
    path: 'mobile-apps'
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Advanced AI and machine learning models to automate and optimize your business',
    gradient: 'from-violet-500 to-purple-500',
    path: 'ai-solutions'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services',
    gradient: 'from-green-500 to-emerald-500',
    path: 'cloud-solutions'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love',
    gradient: 'from-orange-500 to-red-500',
    path: 'ui-ux-design'
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Robust data pipelines and analytics solutions',
    gradient: 'from-indigo-500 to-purple-500',
    path: 'data-engineering'
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);
  const Icon = service.icon;

  return (
    <Link
      ref={elementRef}
      to={`/${service.path}`}
      className={`group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 dark:border-gray-700 block h-full ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <div className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-full blur-3xl`}></div>
      </div>

      <div className="relative p-8">
        <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>

        <div className="mt-6 text-purple-600 dark:text-purple-400 font-semibold group-hover:gap-2 flex items-center gap-1 transition-all duration-300">
          Learn More
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </div>
    </Link>
  );
};

export const Services = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="services" className="pt-10 pb-10 mb-3 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={elementRef}
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="bg-gradient-to-r from-green-600 to-purple-600 dark:from-green-400 dark:to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
