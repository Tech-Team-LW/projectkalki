import React from 'react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => (
  <div className="flex items-center bg-white rounded-xl shadow-md p-4 mb-4 hover:shadow-lg transition-shadow duration-300">
    <div className="flex-shrink-0 mr-6">
      <div className="w-12 h-12 flex items-center justify-center text-blue-500 bg-blue-50 rounded-full">
        {icon}
      </div>
    </div>
    <div className="flex-grow">
      <h3 className="text-[#000080] font-semibold text-lg mb-2">{title}</h3>
      <p className="text-black leading-relaxed">{description}</p>
    </div>
  </div>
);

const WhyHybridAITraining: React.FC = () => {
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Optimizes",
      description: "Optimizes India's existing supercomputing resources (PARAM, AUM, NEC HPCs)."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Balances",
      description: "Balances CPU & GPU workloads for cost efficiency.."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Leverages",
      description: "Leverages Mixture of Experts (MoE) models for better performance"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
        </svg>
      ),
      title: "Decentralized",
      description: "Decentralized AI training through universities, research labs, and government centers.."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Develop",
      description: " Develop an indigenous AI Cloud infrastructure for scalability."
    }
  ];

  return (
    <section className="">
      {/* Centered Heading with Decorative Elements */}
     

      {/* Main Content */}
      <div className="  py-6 px-4">
      <div className="text-center mb-6">
        <div className="inline-block">
          <h2 className="text-2xl md:text-4xl font-bold text-[#000080] relative">
            Why Hybrid AI Training?
           
          </h2>
        </div>
      </div>
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <Benefit
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default WhyHybridAITraining;