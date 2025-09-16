import { CheckCircle, X } from "lucide-react";
const WhyDifferentSection = () => {
  const backgroundStyle = {
    background: 'linear-gradient(145deg, #040609 0%, #05070c 25%, #06070e 50%, #070c14 100%)'
  };
  const comparisons = [{
    feature: "True Customization",
    us: true,
    others: false
  }, {
    feature: "Modular System Modification",
    us: true,
    others: false
  }, {
    feature: "Ongoing Optimization for ROI",
    us: true,
    others: false
  }, {
    feature: "Seamless Integrations",
    us: true,
    others: false
  }, {
    feature: "Flexible Pricing & Ownership",
    us: true,
    others: false
  }, {
    feature: "Real Data Security + Compliance",
    us: true,
    others: false
  }];
  return <section style={backgroundStyle} className="w-full py-16 md:py-24 bg-gray-950">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <span className="text-white/60 font-poppins text-sm uppercase tracking-[0.15em] leading-[1.6] mb-6 block">
              Why Choose Us
            </span>
            <h2 className="text-white font-space-grotesk text-4xl md:text-5xl font-light leading-tight mb-6">
              Why Our System is Different
            </h2>
            <p className="text-white/80 font-poppins text-base leading-[1.8] mb-8 tracking-wide">
              While others offer basic digital solutions, we provide the most advanced platform built on next-generation technology with unparalleled security and performance.
            </p>
            
            {/* Feature Cards */}
            <div className="space-y-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="text-white font-space-grotesk text-lg mb-3">Innovative Solution</h3>
                <p className="text-white/70 font-poppins text-sm leading-[1.7] tracking-wide">
                  Built from the ground up using cutting-edge AI and distributed computing technologies that set new industry standards.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Comparison Table */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div></div>
              <div className="text-center">
                <h3 className="text-white font-space-grotesk text-lg">Our Platform</h3>
              </div>
              <div className="text-center">
                <h3 className="text-white/70 font-space-grotesk text-lg">Others</h3>
              </div>
            </div>
            
            {/* Comparison rows */}
            {comparisons.map((item, index) => <div key={index} className="grid grid-cols-3 gap-4 items-center py-3 border-b border-white/10 last:border-b-0">
                <div className="text-white/80 font-poppins text-sm leading-[1.6] tracking-wide">
                  {item.feature}
                </div>
                <div className="text-center">
                  {item.us ? <CheckCircle className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                </div>
                <div className="text-center">
                  {item.others ? <CheckCircle className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default WhyDifferentSection;