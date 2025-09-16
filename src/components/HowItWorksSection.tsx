import { Play, ArrowRight } from "lucide-react";
import processDiagram from "@/assets/process-diagram.jpg";
const HowItWorksSection = () => {
  const backgroundStyle = {
    background: 'linear-gradient(145deg, #040609 0%, #05070c 25%, #06070e 50%, #070c14 100%)'
  };
  const steps = [{
    step: "01",
    title: "Connect & Verify",
    description: "Link your existing systems and verify your digital assets through our secure onboarding process"
  }, {
    step: "02",
    title: "Configure System",
    description: "Customize the platform to match your business needs with our intuitive configuration tools"
  }, {
    step: "03",
    title: "Deploy & Scale",
    description: "Launch your digital ownership infrastructure and scale seamlessly as your business grows"
  }, {
    step: "04",
    title: "Monitor & Optimize",
    description: "Track performance metrics and optimize your digital asset management in real-time"
  }];
  return <section style={backgroundStyle} className="w-full py-16 md:py-24 bg-gray-950">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Steps */}
          <div>
            <span className="text-white/60 font-poppins text-sm uppercase tracking-[0.15em] leading-[1.6] mb-6 block">
              Process
            </span>
            <h2 className="text-white font-space-grotesk text-4xl md:text-5xl font-light leading-tight mb-6">
              How It Works
            </h2>
            <p className="text-white/80 font-poppins text-base leading-[1.8] mb-12 tracking-wide">
              Our streamlined process gets you from concept to deployment in just 4 simple steps. No technical expertise required.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, index) => <div key={index} className="flex gap-6 group">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all">
                      <span className="text-white font-dm-mono text-sm font-medium">{step.step}</span>
                    </div>
                    {index < steps.length - 1 && <div className="w-px h-8 bg-white/10 ml-6 mt-4"></div>}
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1 pb-8">
                    <h3 className="text-white font-space-grotesk text-xl font-medium mb-3">{step.title}</h3>
                    <p className="text-white/70 font-poppins text-sm leading-[1.7] tracking-wide">{step.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
          
          {/* Right: Demo Video */}
          <div className="relative">
            <div className="aspect-[4/3] max-w-lg mx-auto rounded-2xl border border-white/10 overflow-hidden group cursor-pointer hover:border-white/20 transition-all relative">
              <img src={processDiagram} alt="Business Process Diagram" className="w-full h-full object-contain bg-white/5" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all flex items-center justify-center">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;