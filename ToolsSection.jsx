import { Code, Zap, Mouse, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tools = [
  {
    icon: Code,
    name: "BeautifulSoup",
    category: "Python Library",
    description: "Perfect for beginners. Parse HTML and XML documents with ease using Python's most popular scraping library.",
    features: ["Easy to learn", "Great documentation", "HTML/XML parsing", "CSS selectors"],
    difficulty: "Beginner",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    name: "Scrapy",
    category: "Python Framework",
    description: "Industrial-strength scraping framework for large-scale data extraction projects with built-in concurrency.",
    features: ["High performance", "Built-in middleware", "Data pipelines", "Concurrent requests"],
    difficulty: "Advanced",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Mouse,
    name: "Octoparse",
    category: "No-Code Tool",
    description: "Visual web scraping tool with point-and-click interface. No programming knowledge required.",
    features: ["Visual interface", "Cloud-based", "Scheduling", "Free trial available"],
    difficulty: "No-Code",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Wrench,
    name: "ParseHub",
    category: "No-Code Tool",
    description: "Automated data extraction tool that can handle JavaScript-heavy sites and complex navigation.",
    features: ["JavaScript support", "API access", "Automatic pagination", "Free plan available"],
    difficulty: "No-Code",
    color: "from-purple-500 to-pink-500"
  }
];

export const ToolsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Your Scraping Arsenal
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the right tool for your data extraction mission. From beginner-friendly libraries to enterprise solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Card key={tool.name} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:scale-105 group">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tool.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{tool.name}</CardTitle>
                  <CardDescription className="text-gray-400">{tool.category}</CardDescription>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    tool.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    tool.difficulty === 'Advanced' ? 'bg-red-500/20 text-red-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {tool.difficulty}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed">{tool.description}</p>
                  <div className="space-y-2">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
