import { Search, Database, Globe } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="flex justify-center items-center mb-8 space-x-4">
          <div className="relative">
            <Search className="w-16 h-16 text-cyan-400 animate-pulse" />
            <div className="absolute inset-0 w-16 h-16 bg-cyan-400/20 rounded-full blur-md animate-ping"></div>
          </div>
          <Database className="w-12 h-12 text-blue-400" />
          <Globe className="w-14 h-14 text-purple-400" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Data Detective
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
          Master the Art of Web Scraping
        </p>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Unlock the web's hidden treasures. From Python libraries to no-code solutions, 
          discover the tools and techniques that turn any website into your personal dataset.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105">
            Start Investigating
          </button>
          <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
            View Tools
          </button>
        </div>
      </div>
    </section>
  );
};
