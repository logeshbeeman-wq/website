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

  return (
    <div
      ref={elementRef}
      className={`group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
    </div>
  );
};

export const Features = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="features" className="pt-10 pb-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={elementRef}
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose <span className="bg-gradient-to-r from-green-600 to-purple-600 dark:from-green-400 dark:to-purple-400 bg-clip-text text-transparent">TechFlow</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
