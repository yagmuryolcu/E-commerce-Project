import React from 'react';
import { Book, BookAudio, BookCopy, BookOpen, BookOpenCheck, FileTerminalIcon, FileText, FileTextIcon, LayoutDashboard, LucideBookUser, Notebook, Smile, TrendingUp } from 'lucide-react'; 


const ServiceItem = ({ icon: Icon, title, description }) => (
  <div className="service-item flex flex-col items-center text-center p-4 md:p-6"style={{ fontFamily: 'Montserrat' }}>
   
    <div className="service-icon-wrapper text-[#23A6F0] mb-5">
      <Icon size={48} strokeWidth={2.5} /> 
    </div>
    
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    
    <p className="text-[#737373] font-medium leading-[20px] max-w-[250px] md:max-w-none">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    { 
      icon: BookOpen, 
      title: "Easy Wins", 
      description: "Get your best looking smile now!" 
    },
    { 
      icon: FileText, 
      title: "Concrete", 
      description: "Defalcate is most focused in helping you discover your most beautiful smile" 
    },
    { 
      icon: TrendingUp, 
      title: "Hack Growth", 
      description: "Overcame any hurdle or any other problem." 
    },
  ];

  return (
    <div className="services-section-container py-20 bg-white">
      
      {/* Başlık Bölümü */}
      <div className="header-content text-center mb-12"style={{ fontFamily: 'Montserrat' }}>
        <p className="text-xl md:text-lg font-medium leading-[30px] text-[#737373] text-center md:block">Featured Products</p>
        <h2 className="text-3xl font-extrabold text-gray-800 mt-1 mb-3">THE BEST SERVICES</h2>
       <p className="text-[#737373] font-medium text-lg max-w-[250px] mx-auto text-center md:max-w-full">Problems trying to resolve the conflict between</p>
      </div>

      <div className="services-grid max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4  " style={{ fontFamily: 'Montserrat' }}>
        {services.map((service, index) => (
          <ServiceItem 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      
    </div>
  );
};

export default ServicesSection;