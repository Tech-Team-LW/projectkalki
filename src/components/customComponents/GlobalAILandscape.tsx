// components/GlobalAILandscape.tsx
import React from 'react';
import Image from 'next/image';

const values = [
  {
    icon: "/icons/target.svg",
    title: " Technological Dependence on foreign AI models.",
    description: "India's heavy reliance on foreign AI models limits innovation, threatens data security, and hinders technological self-reliance"
  },
  {
    icon: "/icons/award.svg",
    title: " Data Privacy & Security Threats with sensitive data processed abroad.",
    description: "Foreign processing of India's sensitive data creates significant privacy risks and potential national security vulnerabilities."
  },
  {
    icon: "/icons/hands.svg",
    title: " Limited Economic Competitiveness as AI-driven economies demand local innovation.",
    description: "Without indigenous AI capabilities, India risks falling behind in the global economy where AI drives growth and innovation."
  } 
];

const GlobalAILandscape = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-300 to-emerald-400 py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Heading and Description */}
          <div className="flex flex-col items-start space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              The Global AI Landscape <br/> & India's Position
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              AI is redefining global economies. While the U.S. leads with 43 foundation models and China with 19, India has none. Without strategic intervention, India risks:
            </p>
          </div>

          {/* Right side - Values */}
          <div className="space-y-12">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="w-12 h-12 flex-shrink-0">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 font-semibold">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalAILandscape;