import { Zap, Shield, Rocket, Brain, Code, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance for seamless user experiences and rapid load times',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Enterprise-grade security measures to protect your data and users',
  },
  {
    icon: Rocket,
    title: 'Scalable Solutions',
    description: 'Built to grow with your business from startup to enterprise',
  },
  {
    icon: Brain,
    title: 'AI-Powered',
    description: 'Leverage cutting-edge AI and machine learning capabilities',
  },
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Maintainable, well-documented code following best practices',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Dedicated professionals committed to your success',
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);
  const Icon = feature.icon;
  const primaryGradient = 'from-orange-500 to-amber-500';

  return (
    <div
      ref={elementRef}
      className={`group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 dark:border-gray-700 h-full ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <div className={`w-full h-full bg-gradient-to-br ${primaryGradient} rounded-full blur-3xl`}></div>
      </div>

      <div className="relative p-6">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-all duration-300 shadow-md border border-gray-200 dark:border-gray-700">
            <Icon className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 pl-16">{feature.description}</p>
        
        <div className="flex justify-end">
          <div className="font-semibold group-hover:gap-2 flex items-center gap-1 transition-all duration-300 text-orange-500 dark:text-orange-400">
            Learn more
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Features = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={elementRef}
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Why Choose <span className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 bg-clip-text text-transparent">TechFlow</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            We combine innovation, expertise, and dedication to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
