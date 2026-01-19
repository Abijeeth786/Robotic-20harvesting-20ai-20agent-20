import { ArrowRight, Leaf, Zap, TrendingUp, Eye, Navigation, Cpu, BarChart3, Wind, AlertCircle } from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: Eye,
      title: "Crop Identification",
      description: "Advanced visual sensors detect and classify crops with precision. Identify ripeness, size, and health of each plant.",
      color: "text-primary-600"
    },
    {
      icon: Navigation,
      title: "Intelligent Navigation",
      description: "Navigate uneven terrain safely while avoiding obstacles like rocks, irrigation systems, and machinery.",
      color: "text-secondary-600"
    },
    {
      icon: Cpu,
      title: "Precision Harvesting",
      description: "Mechanical arms adjust grip strength based on crop type, minimizing damage while optimizing yield.",
      color: "text-accent-600"
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Real-time data collection on yield, quality, and location. Predictive analysis for future crop yields.",
      color: "text-primary-600"
    },
    {
      icon: Zap,
      title: "Energy Optimization",
      description: "Plan efficient harvesting routes and optimize battery life with smart algorithms.",
      color: "text-secondary-600"
    },
    {
      icon: Wind,
      title: "Weather Adaptation",
      description: "Autonomously adapt to changing weather conditions while maintaining operational safety.",
      color: "text-accent-600"
    }
  ];

  const stats = [
    { value: "99.2%", label: "Identification Accuracy" },
    { value: "40%", label: "Efficiency Improvement" },
    { value: "1000+", label: "Hectares Managed" },
    { value: "24/7", label: "Autonomous Operation" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900 dark:text-white">HarvestAI</span>
          </div>
          <button className="px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 sm:pt-32 sm:pb-48">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-slate-900 dark:to-slate-800" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
                <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">🤖 Autonomous Agricultural Technology</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                The Future of <span className="text-primary-600 dark:text-primary-400">Crop Harvesting</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Meet HarvestAI, the next generation of robotic harvesting. Autonomously detect ripe crops, navigate terrain with precision, and maximize yield while minimizing environmental impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-slate-900 transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative h-96 sm:h-[500px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 rounded-2xl border border-primary-200 dark:border-slate-700 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-50">
                <div className="absolute top-10 right-10 w-40 h-40 rounded-full border-2 border-primary-400/50 animate-pulse" />
                <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full border-2 border-secondary-400/50 animate-pulse" style={{ animationDelay: "0.5s" }} />
              </div>
              <div className="relative z-10 text-center">
                <Cpu className="w-24 h-24 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">AI-Powered Harvesting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive AI Capabilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              HarvestAI integrates cutting-edge technology to revolutionize agricultural harvesting with precision and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="p-8 border border-gray-200 dark:border-slate-800 rounded-2xl hover:shadow-lg dark:hover:shadow-slate-900/50 transition-shadow hover:border-primary-200 dark:hover:border-primary-900/50">
                  <div className={`w-12 h-12 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center mb-4 ${feature.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 sm:py-32 bg-gray-50 dark:bg-slate-900/50 border-y border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center">
            The HarvestAI Process
          </h2>

          <div className="space-y-12">
            {[
              { step: 1, title: "Detection", desc: "RGB and infrared sensors identify crops and assess ripeness in real-time" },
              { step: 2, title: "Assessment", desc: "AI algorithms evaluate crop health, size, and harvesting readiness" },
              { step: 3, title: "Navigation", desc: "Autonomous path planning avoids obstacles and optimizes energy consumption" },
              { step: 4, title: "Harvesting", desc: "Precision mechanical arms harvest with minimal plant damage" },
              { step: 5, title: "Analysis", desc: "Data collection and predictive analytics improve future yields" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Environment Section */}
      <section className="py-20 sm:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 sm:h-[500px] bg-gradient-to-br from-accent-100/50 to-primary-100/50 dark:from-accent-900/20 dark:to-primary-900/20 rounded-2xl border border-accent-200 dark:border-slate-700 flex items-center justify-center">
              <AlertCircle className="w-32 h-32 text-accent-600 dark:text-accent-400 opacity-30" />
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Safety First
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                HarvestAI prioritizes environmental responsibility and human safety with continuous monitoring and adaptive learning systems.
              </p>
              <div className="space-y-4">
                {[
                  "Advanced obstacle detection protects humans and animals",
                  "Weather-adaptive systems ensure safe operation in all conditions",
                  "Continuous environmental impact monitoring",
                  "Machine learning optimization reduces resource waste"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Learning Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-slate-900 dark:to-slate-800 border-y border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Continuous Optimization
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                HarvestAI learns from every harvest, continuously improving efficiency, speed, and accuracy through advanced machine learning models.
              </p>
              <div className="space-y-4">
                {[
                  "Real-time performance analytics and insights",
                  "Predictive maintenance to prevent downtime",
                  "Yield forecasting based on historical patterns",
                  "Autonomous system updates and improvements"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-secondary-600 dark:text-secondary-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 sm:h-[500px] bg-gradient-to-br from-secondary-600/20 to-accent-600/20 dark:from-secondary-900/20 dark:to-accent-900/20 rounded-2xl border border-secondary-200 dark:border-slate-700 flex items-center justify-center">
              <TrendingUp className="w-32 h-32 text-secondary-600 dark:text-secondary-400 opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Join hundreds of farms already using HarvestAI to increase yields, reduce costs, and build a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 group">
              Start Free Trial Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-slate-900 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">HarvestAI</span>
              </div>
              <p className="text-gray-400">The future of agricultural automation</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors">Features</button></li>
                <li><button className="hover:text-white transition-colors">Pricing</button></li>
                <li><button className="hover:text-white transition-colors">Documentation</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors">About</button></li>
                <li><button className="hover:text-white transition-colors">Blog</button></li>
                <li><button className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors">Privacy</button></li>
                <li><button className="hover:text-white transition-colors">Terms</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HarvestAI. All rights reserved. | Revolutionizing Agriculture with AI</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
