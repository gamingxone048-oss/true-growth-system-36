"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import adofLogo from "@/assets/adof_logo.png";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function NavbarMenu() {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="relative w-full flex items-center justify-between px-4 md:px-6 py-4 max-w-[1600px] mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={adofLogo} alt="ADOF Logo" className="h-6 md:h-8 w-auto" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="System Features">
              <div className="flex flex-col space-y-4 text-sm min-w-[200px]">
                <HoveredLink onClick={() => scrollToSection('system')}>What is System</HoveredLink>
                <HoveredLink onClick={() => scrollToSection('features')}>System Features</HoveredLink>
                <HoveredLink onClick={() => scrollToSection('how-it-works')}>How It Works</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Results">
              <div className="flex flex-col space-y-4 text-sm min-w-[200px]">
                <HoveredLink onClick={() => scrollToSection('our-works')}>Our Works</HoveredLink>
                <HoveredLink onClick={() => scrollToSection('our-works')}>Case Studies</HoveredLink>
                <HoveredLink onClick={() => scrollToSection('why-different')}>Why Different</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* CTA Button */}
        <Link 
          to="/schedule-call" 
          className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-all duration-200"
        >
          Schedule Call
        </Link>
      </div>
    </div>
  );
}