import { Github, Linkedin, Mail, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold gradient-text">
                TechFlow
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Building innovative software solutions that empower businesses to thrive in the digital age.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-100 group-hover:text-[#f0f6fc]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#e1306c] hover:bg-opacity-20 transition-colors duration-200 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#e1306c] group-hover:text-[#e1306c]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0a66c2] hover:bg-opacity-20 transition-colors duration-200 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[#0a66c2] group-hover:text-[#0a66c2]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1877f2] hover:bg-opacity-20 transition-colors duration-200 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#1877f2] group-hover:text-[#1877f2]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:bg-opacity-20 transition-colors duration-200 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-orange-500 group-hover:text-orange-500" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Features
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} TechFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
