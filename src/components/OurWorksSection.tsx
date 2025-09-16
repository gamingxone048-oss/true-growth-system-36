import { ExternalLink, ArrowRight } from "lucide-react";
import revolutCrypto from "@/assets/revolut-crypto.png";
import ouraRingImage from "@/assets/oura-ring-new.jpg";
import landedHousesImage from "@/assets/landed-houses.jpg";
import dezyDentalClinic from "@/assets/dezy-dental-clinic.png";
const OurWorksSection = () => {
  const backgroundStyle = {
    background: 'linear-gradient(145deg, #040609 0%, #05070c 25%, #06070e 50%, #070c14 100%)'
  };
  const projects = [{
    title: "FinTech Revolution",
    client: "Revolut",
    description: "Complete end-to-end development services from initial software architecture to full-scale deployment and optimization. We handle everything from concept to market-ready solutions.",
    results: "300% increase in transaction speed",
    image: revolutCrypto,
    link: "https://www.revolut.com/crypto/"
  }, {
    title: "E-commerce Platform",
    client: "Foundation",
    description: "From building online presence to marketing to getting first client we help businesses grow and scale their operations",
    results: "250% sales increase",
    image: ouraRingImage,
    link: "https://ouraring.com/"
  }, {
    title: "Luxury Resort Platform",
    client: "Landed Houses",
    description: "Premium holiday rental platform connecting travelers with dream country houses and luxury accommodations",
    results: "350% booking increase",
    image: landedHousesImage,
    link: "https://www.landedhouses.co.uk/"
  }, {
    title: "Dental Clinic Digital Transformation",
    client: "Dezy Healthcare",
    description: "Comprehensive digital transformation from website development to complete practice automation. We provide end-to-end solutions for modern dental clinics.",
    results: "400% patient engagement increase",
    image: dezyDentalClinic,
    link: "https://www.dezy.com/clinics/bangalore"
  }];
  return <section style={backgroundStyle} className="w-full py-16 md:py-24 bg-gray-950">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 bg-gray-950">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-white/60 font-poppins text-sm uppercase tracking-[0.15em] leading-[1.6] mb-6 block">
            Portfolio
          </span>
          <h2 className="text-white font-space-grotesk text-4xl md:text-5xl font-light leading-tight mb-6">
            Our Works
          </h2>
          <p className="text-white/80 font-poppins text-base leading-[1.8] max-w-2xl mx-auto tracking-wide">
            Discover how we've helped leading companies transform their digital asset management and unlock new revenue streams
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => {
          const CardContent = <div className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 h-full flex flex-col min-h-[500px]">
                {/* Project Image */}
                <div className="aspect-[4/3] bg-white/10 relative overflow-hidden flex-shrink-0">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                </div>
                
                {/* Project Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/60 font-poppins text-sm uppercase tracking-[0.15em] leading-[1.6]">
                      {project.client}
                    </span>
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-white font-space-grotesk text-xl font-medium mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 font-poppins text-sm leading-[1.7] mb-4 tracking-wide flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4">
                    <div className="text-white font-dm-mono text-sm">
                      <span className="text-white/60">Result: </span>
                      <span className="text-green-400">{project.results}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>;
          return project.link ? <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                {CardContent}
              </a> : <div key={index}>{CardContent}</div>;
        })}
        </div>
      </div>
    </section>;
};
export default OurWorksSection;