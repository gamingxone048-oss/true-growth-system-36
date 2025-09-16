import { Layers, Bot, Shield, Zap, Database, Headphones } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
const FeaturesSection = () => {
  const backgroundStyle = {
    background: 'linear-gradient(145deg, #040609 0%, #05070c 25%, #06070e 50%, #070c14 100%)'
  };
  const features = [{
    icon: Layers,
    title: "Integrated Core",
    description: "All your tools in one connected system.\nWebsite, CRM, App, Security all together",
    className: "md:col-span-1"
  }, {
    icon: Bot,
    title: "Smart Automation",
    description: "AI that runs your daily business ops.\nWorkflows, chatbots, auto-reports",
    className: "md:col-span-2"
  }, {
    icon: Shield,
    title: "Advanced Security",
    description: "Enterprise-grade protection with real-time threat detection and compliance monitoring",
    className: "md:col-span-1"
  }, {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance that scales with your business growth and user demands",
    className: "md:col-span-1"
  }, {
    icon: Database,
    title: "Smart Analytics",
    description: "Deep insights into your business performance with predictive analytics and reporting",
    className: "md:col-span-1"
  }, {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock expert assistance to keep your business running smoothly without interruption",
    className: "md:col-span-1"
  }];
  return <section style={backgroundStyle} className="w-full py-16 md:py-24 bg-gray-950">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-white/60 font-poppins text-sm uppercase tracking-[0.15em] leading-[1.6] mb-6 block">
            Features
          </span>
          <h2 className="text-white font-space-grotesk text-4xl md:text-5xl font-light leading-tight mb-6">
            System Features
          </h2>
          <p className="text-white/80 font-poppins text-base leading-[1.8] max-w-2xl mx-auto tracking-wide">
            Discover the powerful capabilities that make our platform the most advanced digital ownership solution in the market
          </p>
        </div>

        {/* Features Grid */}
        <ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {features.map((feature, index) => <div key={index} className={`${feature.className} bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:scale-[1.02] transition-all duration-300 group h-full flex flex-col`}>
                {/* Icon */}
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-white font-space-grotesk text-xl font-medium mb-4">
                  {feature.title}
                </h3>
                <div className="text-white/70 font-poppins text-sm leading-[1.7] tracking-wide flex-1">
                  {feature.description.split('\n').map((line, i) => <div key={i}>{line}</div>)}
                </div>
              </div>)}
          </div>
        </ScrollAnimation>
      </div>
    </section>;
};
export default FeaturesSection;