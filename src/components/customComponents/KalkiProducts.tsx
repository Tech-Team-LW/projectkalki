// components/KrutrimProducts.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const KrutrimProducts = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-xl md:text-4xl text-[#07038d] text-center font-bold mb-6">Available AI Infrastructure in India </h1>
      {/* <p className="text-gray-600 mb-4">
        Explore Krutrim's host of offerings across a comprehensive AI stack.
      </p> */}

      <div className="flex flex-col gap-8">
        {/* First Row - Full Width Card */}
        <Card className="w-full border rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#07038d]  mb-2">National Supercomputing Mission (NSM) Resources </h3>
                <ul className="text-black leading-relaxed pl-4 list-disc mb-2">
                  <li><span  className="font-bold ">PARAM Siddhi-AI:</span> India&apos;s fastest AI-ready supercomputer. </li>
                  <li><span  className="font-bold">Project AUM:</span> India&apos;s first indigenous HPC processor. </li>
                </ul>
                <a target="blank" href="https://www.cdac.in/index.aspx?id=hpc_nsf_siddhi-AI">
                <Button variant="outline" className="text-green-600  border-green-600 hover:bg-green-50 mt-4">
                  Learn more →
                </Button>
                </a>
              </div>
              <div className="flex-1">
                <img 
                  src="/assets/KrutrimProducts/National_Supercomputing.jpeg" 
                  alt="Cloud Infrastructure"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Second Row - Two Half Width Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border rounded-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl text-[#07038d] font-bold mb-2">AI4Bharat: A Key Collaborator </h3>
              <ul className="text-black leading-relaxed  mb-4 list-disc pl-4">
                <li>Developed by <span className="font-bold">IIT Madras</span>, specializes in Indian language AI models. </li>
<li>It advances <span className="font-bold">AI Solutions</span> for regional languages.</li>
              </ul>
              <a target="blank" href="https://ai4bharat.iitm.ac.in/">
              <Button variant="outline" className="text-[#046a38] border-green-600 hover:bg-green-50">
                Learn more →
              </Button>
              </a>
              <div className="mt-6">
                <img 
                  src="/assets/AIInfrastructure/1.jpeg" 
                  alt="Krutrim Spectre"
                  className="w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border rounded-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl text-[#07038d] font-bold mb-2">Private-Sector Collaboration </h3>
              <ul className="text-black leading-relaxed  mb-4 list-disc pl-4">
                <li><span className="font-bold">Reliance & Tata&apos;s Partnership with NVIDIA</span> to scale AI compute capacity. </li>
<li><span className="font-bold">Infosys AI Model Training Initiatives</span> for enterprise solutions. </li>
              </ul>
              <a  target="blank" href="https://nvidianews.nvidia.com/news/tata-partners-with-nvidia-to-build-large-scale-ai-infrastructure">
              <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                Learn more →
              </Button>
              </a>
              <div className="mt-6">
                <img 
                  src="/assets/AIInfrastructure/2.jpeg" 
                  alt="Customer Support Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Third Row - Full Width Card */}
        <Card className="w-full border rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex-1">
                <h3 className="text-xl text-[#07038d] font-bold mb-2">India is READY for a Hybrid CPU-GPU AI training model today!</h3>
                {/* <p className="text-gray-600 mb-4">
                  Use our powerful mapping tools: real-time navigation, dynamic maps, precise routing and advanced location search.
                </p> */}
                <a target="blank" href="https://timesofindia.indiatimes.com/technology/tech-news/indias-own-gpu-could-arrive-in-3-5-years-18000-ai-servers-to-go-live-soon-says-ashwini-vaishnaw/articleshow/117958923.cms">
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 mt-4">
                  Learn more →
                </Button>
                </a>
              </div>
              <div className="flex-1">
                <img 
                  src="/assets/AIInfrastructure/3.jpeg" 
                  alt="Mapping Solution"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KrutrimProducts;