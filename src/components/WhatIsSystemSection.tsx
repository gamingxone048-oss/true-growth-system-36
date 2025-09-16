import React, { useState, useEffect } from 'react';
import adaptiveArchitectureImage from '@/assets/adaptive-architecture-space.jpg';
import unifiedGrowthEngineImage from '@/assets/unified-growth-engine.jpg';
import autonomousAiImage from '@/assets/autonomous-ai-automation.png';
import realTimeIntelligenceImage from '@/assets/real-time-intelligence.jpg';

// --- Main Component Data ---
const tabData = [{
  id: 1,
  title: "Adaptive Architecture",
  content: {
    image: adaptiveArchitectureImage,
    alt: "Adaptive Architecture",
    heading: <>
                    <span className="font-space-grotesk italic">Infrastructure</span>
                    <span className="font-poppins"> tailored to your workflows</span>
                </>,
    text: "Infrastructure tailored to your workflows & scale. Seamlessly adapt to changing business needs with flexible, scalable architecture that grows with your organization."
  }
}, {
  id: 2,
  title: "Unified Growth Engine",
  content: {
    image: unifiedGrowthEngineImage,
    alt: "Unified Growth Engine",
    heading: <>
                    <span className="font-space-grotesk italic">Orchestrates</span>
                    <span className="font-poppins"> acquisition & retention</span>
                </>,
    text: "Orchestrates acquisition, conversion & retention in one flow. Streamline your entire customer journey with unified processes that maximize growth and minimize friction."
  }
}, {
  id: 3,
  title: "Autonomous AI Automation",
  content: {
    image: autonomousAiImage,
    alt: "Autonomous AI Automation",
    heading: <>
                    <span className="font-space-grotesk italic">Self-optimizing</span>
                    <span className="font-poppins"> automation pipelines</span>
                </>,
    text: "Self-optimizing pipelines to reduce manual overhead. Intelligent automation that learns and improves continuously, freeing your team to focus on strategic initiatives."
  }
}, {
  id: 4,
  title: "Real-Time Intelligence",
  content: {
    image: realTimeIntelligenceImage,
    alt: "Real-Time Intelligence",
    heading: <>
                    <span className="font-space-grotesk italic">Continuous</span>
                    <span className="font-poppins"> insights for decisions</span>
                </>,
    text: "Continuous insights for decisions, ROI & system tuning. Real-time intelligence that provides actionable data for optimizing performance and driving measurable results."
  }
}];

// --- Main App Component ---
const WhatIsSystemSection = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-progression effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveTab(prev => prev >= tabData.length ? 1 : prev + 1);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
    setIsAutoPlaying(false); // Stop auto-play when user manually selects

    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  const backgroundStyle = {
    background: 'linear-gradient(145deg, #040609 0%, #05070c 25%, #06070e 50%, #070c14 100%)'
  };

  return <section style={backgroundStyle} className="w-full py-16 md:py-24 bg-gray-950">
                <div className="max-w-[1600px] mx-auto px-4 md:px-6">
                    <div className="backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-white/10" style={backgroundStyle}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            
                            {/* Left Column: Text Content & Tabs */}
                            <div className="flex flex-col justify-center space-y-8">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-1 rounded-full" style={{
                  background: 'var(--gradient-neon)'
                }}></div>
                                        <p className="text-sm font-medium uppercase tracking-wider text-white/60 font-poppins">What the system does</p>
                                    </div>
                                    <h1 className="text-4xl md:text-5xl mt-4 text-white font-space-grotesk">
                                        <span className="font-poppins">We bring </span>
                                        <span className="font-space-grotesk italic">AI, engineering & content</span>
                                        <span className="font-poppins"> expertise</span>
                                    </h1>
                                    <p className="text-white/80 mt-4 leading-relaxed font-poppins">
                                        Each problem is looked at from a fresh lens to provide you with a solution that solves your specific requirements and integrates with your existing infrastructure.
                                    </p>
                                </div>

                                {/* Tabs Navigation */}
                                <div className="space-y-2">
                                    {tabData.map(tab => <div key={tab.id} className={`group cursor-pointer p-4 rounded-lg transition-all duration-300 ${activeTab === tab.id ? 'active' : ''}`} onClick={() => handleTabClick(tab.id)}>
                                            <p className={`text-xl md:text-2xl font-semibold transition-colors duration-300 font-space-grotesk ${activeTab === tab.id ? 'text-white font-bold' : 'text-white/70 group-hover:text-white/90'}`}>
                                                {tab.title}
                                            </p>
                                            <div className={`h-1 mt-2 rounded-full transition-all duration-300 w-full ${activeTab === tab.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`} style={{
                  background: 'var(--gradient-neon)'
                }}></div>
                                        </div>)}
                                </div>
                            </div>

                            {/* Right Column: Tab Content Panels */}
                            <div className="relative min-h-[500px] md:min-h-[600px] w-full">
                                {tabData.map(tab => <div key={tab.id} className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${activeTab === tab.id ? 'opacity-100' : 'opacity-0'}`}>
                                        <div className="h-full w-full rounded-2xl overflow-hidden relative flex flex-col justify-end text-white p-8">
                                            <img src={tab.content.image} alt={tab.content.alt} className="absolute inset-0 w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                            <div className="relative z-10">
                                                <h2 className="text-4xl">{tab.content.heading}</h2>
                                                <p className="mt-4 text-lg leading-relaxed font-poppins">{tab.content.text}</p>
                                            </div>
                                        </div>
                                    </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>;
};
export default WhatIsSystemSection;