import { ArrowRight, Sparkles } from "lucide-react";
import { useParallax } from "../hooks/useParallax";
import { MultiLineTypewriter } from "./MultiLineTypewriter";

export const Hero = () => {
  const parallaxOffset = useParallax(0.3);

  return (
    <section
      id="home"
      className="relative min-h-screen lg:min-h-[50vh] flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300 px-4"
    >
      {/* Top Right Gradient Effect */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/10 rounded-full filter blur-3xl -z-10"></div>
      {/* Bottom Left Gradient Effect */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/10 rounded-full filter blur-3xl -z-10"></div>
      {/* Background Blobs */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300 dark:bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-400 dark:bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-300 dark:bg-yellow-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative max-w-3xl w-full text-center py-32 flex flex-col items-center">
        {/* Tagline */}
        <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-full mb-8 animate-fade-in-down">
          <Sparkles className="w-4 h-4 text-orange-600 dark:text-amber-400" />
          <span className="text-xs xs:text-sm font-medium text-orange-600 dark:text-amber-400">
            Innovation Meets Excellence
          </span>
        </div>

        {/* Headline */}
        <div className="relative w-full break-words">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 animate-fade-in-up leading-tight md:leading-snug">
            <MultiLineTypewriter
              sets={[
                [
                  { text: "Transform Your Ideas", className: "text-gray-900 dark:text-white" },
                  { text: " Into Reality", className: "text-gray-900 dark:text-white" },
                ],
                [
                  { text: "Build Smarter AI-Driven", className: "text-gray-900 dark:text-white" },
                  { text: " Applications", className: "text-gray-900 dark:text-white" },
                ],
                [
                  { text: "Innovate Fast", className: "text-gray-900 dark:text-white" },
                  { text: " with AI", className: "text-gray-900 dark:text-white" },
                ],
              ]}
              typeSpeed={70}
              deleteSpeed={40}
              pauseTime={1500}
              soundUrl="/sounds/typing.wav"
            />
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12">
          We build cutting-edge software solutions that empower businesses to thrive in the digital age.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="group relative px-10 py-4 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-lg shadow-lg transition-all duration-300 ease-out transform hover:scale-[1.05] hover:shadow-xl hover:shadow-orange-500/30">
            <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>
            <span className="relative flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" />
            </span>
          </button>

          <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-xl font-semibold hover:border-orange-500 dark:hover:border-amber-400 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Learn More
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
          {[
            { value: "500+", label: "Projects" },
            { value: "200+", label: "Clients" },
            { value: "50+", label: "Team Members" },
            { value: "99%", label: "Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
