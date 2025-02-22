"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, Database, Cloud, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const IndiasAIChallenge = () => {
  const cards = [
    {
      title: 'Computational Limitations',
      subtitle: "India has only 18,000–19,000 GPUs, compared to AI leaders using millions.",
      icon: AlertTriangle,
      description: 'Critical infrastructure gap affecting AI development capacity',
      buttonText: 'Learn More'
    },
    {
      title: 'Data Deficiency',
      subtitle: 'India lacks structured, AI-ready datasets required for LLMs.',
      icon: Database,
      description: 'Limited high-quality training data for AI models',
      buttonText: 'Explore Data'
    },
    {
      title: 'Foreign Dependence',
      subtitle: '95% of India\'s AI solutions rely on foreign cloud services.',
      icon: Cloud,
      description: 'Significant security and sovereignty concerns',
      buttonText: 'View Impact'
    },
    {
      title: 'High Energy Costs',
      subtitle: 'AI training requires massive computational power.',
      icon: Zap,
      description: 'Need for sustainable AI infrastructure',
      buttonText: 'See Solutions'
    },
  ];

  return (
    <div className="relative  bg-white px-8 py-6 md:px-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMjVsNiA2LTYgNk01MCAzN2w2LTYtNi02IiBzdHJva2U9IiMwMEZGOUEyMCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=')] opacity-10"/>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#000080]  text-3xl lg:text-4xl md:text-4xl   font-bold mb-2 tracking-tight"
          >
            India&apos;s AI Challenge
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-black text-lg leading-relaxed max-w-2xl mx-auto"
          >
            India is at a critical juncture in the global AI race. While countries like the U.S. and China have built robust AI ecosystems, India faces major challenges:

          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-[#00FF9A]/20 rounded-xl hover:shadow-[0_0_30px_rgba(0,255,154,0.1)] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-2">
                    <div className="p-3 rounded-lg bg-[#00FF9A]/10">
                      {React.createElement(card.icon, { 
                        className: "w-6 h-6 text-[#00FF9A]",
                        strokeWidth: 2
                      })}
                    </div>
                    <div>
                      <h3 className="text-[#000080] text-xl font-bold mb-2">
                        {card.title}
                      </h3>
                      <p className="text-black text-sm leading-relaxed ">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-black text-sm mb-4 pl-16">
                    {card.description}
                  </p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center text-[#00FF9A] font-medium group pl-16"
                  >
                    {card.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default IndiasAIChallenge;