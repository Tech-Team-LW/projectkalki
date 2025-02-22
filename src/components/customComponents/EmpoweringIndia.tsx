"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Flag, Network, LucideIcon } from 'lucide-react';

// Define interfaces for type safety
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
      className="bg-white p-8 rounded-2xl border border-gray-100 transition-all hover:border-green-200"
    >
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-green-500 mr-4" />
        <h3 className="font-bold text-xl text-[#000080]">{title}</h3>
      </div>
      <p className="text-black leading-relaxed">{description}</p>
    </motion.div>
  );
};

const EmpoweringIndia = () => {
  const features: Feature[] = [
    {
      icon: Zap,
      title: "100% Indigenous",
      description: "Zero Imports | Powered by Green Energy, building a sustainable future for AI in India"
    },
    {
      icon: Shield,
      title: "Data Sovereignty",
      description: "AI Built for All, Secured in India - ensuring complete control over our technological destiny"
    },
    {
      icon: Flag,
      title: "Indian AI Leadership",
      description: "AI That Empowers, AI That Belongs to India - fostering innovation and growth"
    },
    {
      icon: Network,
      title: "Decentralized Development",
      description: "Reducing Dependence on Foreign Technology through collaborative indigenous innovation"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="md:text-4xl lg:text-4xl text-3xl font-bold text-[#000080] mb-2">
            Empowering India with a <br className="hidden md:block" /> Self-Reliant AI Ecosystem
          </h2>
          <p className="text-md text-black max-w-2xl mx-auto ">
            India stands at the forefront of technological transformation. With Project Kalki, 
            we are ushering in a new era of Sustainable AI, Data Sovereignty, and Indigenous 
            Technological Innovation. As the pioneers of India&apos;s First Homegrown Foundation 
            AI LLM, Tortoise LLM, we are redefining AI by building a model that is:
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>

        {/* Learn More Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-green-500 text-white font-semibold rounded-full transition-all hover:bg-green-600"
          >
            Learn more about Project Kalki →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default EmpoweringIndia;