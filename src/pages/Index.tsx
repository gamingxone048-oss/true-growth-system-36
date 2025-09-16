import HeroSection from "@/components/HeroSection";
import WhatIsSystemSection from "@/components/WhatIsSystemSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import OurWorksSection from "@/components/OurWorksSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

const Index = () => {
  return (
    <main className="w-full">
      {/* Hero Section - Sticky background */}
      <HeroSection />
      
      {/* System section slides over hero */}
      <div className="slide-over-section">
        <ScrollAnimation>
          <section id="system">
            <WhatIsSystemSection />
          </section>
        </ScrollAnimation>
      </div>
      
      {/* Normal scrolling sections */}
      <div className="normal-scroll">
        <section id="features">
          <FeaturesSection />
        </section>
        <ScrollAnimation delay={0.2}>
          <section id="why-different">
            <WhyDifferentSection />
          </section>
        </ScrollAnimation>
        <ScrollAnimation delay={0.4}>
          <section id="our-works">
            <OurWorksSection />
          </section>
        </ScrollAnimation>
        <ScrollAnimation delay={0.6}>
          <section id="how-it-works">
            <HowItWorksSection />
          </section>
        </ScrollAnimation>
        <ScrollAnimation delay={0.8}>
          <CTASection />
        </ScrollAnimation>
        <Footer />
      </div>
    </main>
  );
};

export default Index;
