import { Globe, Smartphone, Cloud, Palette, Database, Brain, Server } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices',
    gradient: 'from-orange-500 to-orange-500',
    path: '/services/web-development'
  },
  {
    icon: Server,
    title: 'AI & Machine Learning',
    description: 'Robust server-side solutions and API development',
    gradient: 'from-blue-500 to-blue-500',
    path: '/services/ai-ml'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions for iOS and Android',
    gradient: 'from-pink-500 to-pink-500',
    path: '/services/mobile-apps'
  },
  {
    icon: Brain,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that drive engagement',
    gradient: 'from-yellow-500 to-yellow-500',
    path: '/services/ui-ux-design'
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Expert technology strategy and digital transformation',
    gradient: 'from-green-500 to-green-500',
    path: '/services/data-engineering'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure and services',
    gradient: 'from-purple-500 to-purple-500',
    path: '/services/cloud-solutions'
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);
  const Icon = service.icon;

  return (
    <Link
      ref={elementRef}
      to={service.path}
      className={`group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 dark:border-gray-700 block h-full ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <div className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-full blur-3xl`}></div>
      </div>

      <div className="relative p-6">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-all duration-300 shadow-md border border-gray-200 dark:border-gray-700">
            <Icon className={`w-6 h-6 ${service.gradient.split(' ')[0].replace('from-', 'text-').replace('bg-', 'text-')}`} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 pl-16">{service.description}</p>
        
        <div className="flex justify-end">
          <div className={`font-semibold group-hover:gap-2 flex items-center gap-1 transition-all duration-300 ${service.gradient.split(' ')[0].replace('from-', 'text-').replace('bg-', 'text-')} dark:${service.gradient.split(' ')[0].replace('from-', 'text-').replace('bg-', 'text-').replace('500', '400')}`}>
            Learn More
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const Services = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="services" className="py-20 mb-3 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={elementRef}
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
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
