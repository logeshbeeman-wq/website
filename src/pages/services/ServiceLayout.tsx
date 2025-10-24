// src/layouts/ServiceLayout.tsx
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ServiceLayoutProps {
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
  children: ReactNode;
}

export default function ServiceLayout({ title, description, icon, gradient, children }: ServiceLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* 🔙 Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 mb-10 transition-colors duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Back to Services</span>
        </Link>

        {/* Header */}
        <div className={`rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700/50`}>
          <div className={`p-8 md:p-12 bg-gradient-to-r ${gradient} text-white relative`}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 dark:from-black/30 dark:to-black/50"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center">
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 md:mb-0 md:mr-8">
                {React.cloneElement(icon as React.ReactElement, {
                  className: 'w-10 h-10 text-white'
                })}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl">{description}</p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-12 bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
