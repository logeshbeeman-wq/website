export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'code' | 'smartphone' | 'layout' | 'cloud' | 'brain' | 'database';
  href: string;
}

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies',
    icon: 'code',
    href: '/services/web-development'
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications for iOS and Android',
    icon: 'smartphone',
    href: '/services/mobile-apps'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that drive engagement',
    icon: 'layout',
    href: '/services/ui-ux-design'
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure and services',
    icon: 'cloud',
    href: '/services/cloud-solutions'
  },
  {
    id: 'ai-ml',
    title: 'AI & ML',
    description: 'AI and machine learning solutions to automate and optimize',
    icon: 'brain',
    href: '/services/ai-ml'
  },
  {
    id: 'data',
    title: 'Data Engineering',
    description: 'Expert technology strategy and digital transformation',
    icon: 'database',
    href: '/services/data-engineering'
  }
  ];