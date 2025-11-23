import React from 'react';
import HooliLogo from '../assets/fa-brands-1.png';
import LyftLogo from '../assets/fa-brands-2.png';
import YaprakLogo from '../assets/fa-brands-3.png';
import StripeLogo from '../assets/fa-brands-4.png';
import AWSLogo from '../assets/fa-brands-5.png';
import RedditLogo from '../assets/col-md-2.png';


// LogoLink component'i aynı dosyada tanımlanıyor
const LogoLink = ({ 
  src, 
  alt, 
  href, 
  maxWidth = 120, 
  maxHeight = 60 
}) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transition-all duration-300 hover:scale-105"
    >
      <img
        src={src}
        alt={alt}
        className="grayscale hover:grayscale-0 transition-all duration-300 object-contain bg-white"
        style={{ 
          maxWidth: `${maxWidth}px`, 
          maxHeight: `${maxHeight}px`,
          width: 'auto',
          height: 'auto'
        }}
      />
    </a>
  );
};

export default function BrandLogo() {
  return (
    <div className="w-full bg-white py-18 mt-5 mb-12">
      <div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row items-center justify-center gap-20 md:gap-24">
          
          <LogoLink 
            src={HooliLogo} 
            alt="Hooli" 
            href="https://hooli.com"
          />
          
          <LogoLink 
            src={LyftLogo} 
            alt="Lyft" 
            href="https://lyft.com"
          />
          
          <LogoLink 
            src={YaprakLogo} 
            alt="Yaprak" 
            href="https://example.com"
          />
          
          <LogoLink 
            src={StripeLogo} 
            alt="Stripe" 
            href="https://stripe.com"
          />
          
          <LogoLink 
            src={AWSLogo} 
            alt="AWS" 
            href="https://aws.amazon.com"
          />
          
          <LogoLink 
            src={RedditLogo} 
            alt="Reddit" 
            href="https://reddit.com"
          />
          
        </div>
      </div>
    </div>
  );
}