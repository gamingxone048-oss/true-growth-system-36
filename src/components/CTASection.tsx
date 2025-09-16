import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ctaBackground from "@/assets/cta-background.jpg";
const CTASection = () => {
  const backgroundStyle = {
    background: 'linear-gradient(145deg, #040609 0%, #05070c 25%, #06070e 50%, #070c14 100%)'
  };
  return <section style={backgroundStyle} className="w-full py-16 md:py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Image */}
      <img src={ctaBackground} alt="CTA Background" className="absolute inset-0 w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center">
          {/* Main CTA Content */}
          <div className="mb-12">
            <h2 className="text-white font-space-grotesk text-4xl md:text-6xl font-light leading-tight mb-6">
              Ready to Transform Your Digital Assets?
            </h2>
            <p className="text-white/80 font-poppins text-lg leading-[1.8] max-w-3xl mx-auto mb-12 tracking-wide">
              Join thousands of businesses already using our platform to secure, manage, and monetize their digital properties. Get started today with a free consultation.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center items-center mb-16">
            <Link to="/schedule-call" className="px-6 py-3 bg-white text-black font-dm-mono font-medium uppercase tracking-wider rounded-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4" />
              Schedule Free Call
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-space-grotesk font-light text-white mb-2">10,000+</div>
              <div className="text-white/60 font-poppins text-sm uppercase tracking-[0.15em] leading-[1.6]">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-space-grotesk font-light text-white mb-2">$2B+</div>
              <div className="text-white/60 font-poppins text-sm uppercase tracking-[0.15em] leading-[1.6]">Assets Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-space-grotesk font-light text-white mb-2">99.99%</div>
              <div className="text-white/60 font-poppins text-sm uppercase tracking-[0.15em] leading-[1.6]">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;