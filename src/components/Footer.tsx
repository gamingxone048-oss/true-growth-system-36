import { Circle, Instagram, Youtube, Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  const backgroundStyle = {
    background: 'linear-gradient(145deg, #040609 0%, #05070c 25%, #06070e 50%, #070c14 100%)'
  };
  return <footer style={backgroundStyle} className="w-full px-6 py-20 bg-gray-950">
      <div className="max-w-[1600px] mx-auto flex flex-col justify-start items-center gap-14">
        {/* Logo and Brand */}
        <div className="flex justify-start items-center gap-3">
          <div className="p-2.5 bg-white rounded-full flex justify-center items-center">
            <Circle className="w-3 h-3 text-black fill-black" />
          </div>
          <div className="text-white text-lg font-space-grotesk font-medium uppercase tracking-wider leading-[20px] text-center sm:text-left">
            ADOF Labs
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-6">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200"
          >
            <Youtube className="w-5 h-5 text-white" />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200"
          >
            <Facebook className="w-5 h-5 text-white" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200"
          >
            <Twitter className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* Copyright and Legal */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
          <div className="text-white/50 text-xs font-dm-mono font-medium uppercase leading-[16.32px] tracking-wider-2">
            © 2025, Digital Platform
          </div>
          <div className="w-[3px] h-[3px] bg-white/50 rounded-full hidden sm:block"></div>
          <div className="py-0.5 flex justify-center items-center">
            <div className="text-white/50 text-xs font-dm-mono font-medium uppercase leading-[16.32px] tracking-wider-2">
              Licenses
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;