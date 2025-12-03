import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import HooliLogo from '../assets/fa-brands-1.png';
import LyftLogo from '../assets/fa-brands-2.png';
import YaprakLogo from '../assets/fa-brands-3.png';
import StripeLogo from '../assets/fa-brands-4.png';
import AWSLogo from '../assets/fa-brands-5.png';
import RedditLogo from '../assets/col-md-2.png';

export default function Pricing() {
  const plans = [
    {
      name: 'FREE',
      description: 'Organize across all apps by hand',
      price: '0',
      period: 'Per Month',
      features: [
        { text: 'Unlimited product updates', included: true },
        { text: 'Unlimited product updates', included: true },
        { text: 'Unlimited product updates', included: true },
        { text: '1GB Cloud storage', included: false },
        { text: 'Email and community support', included: false }
      ],
      buttonText: 'TRY FOR FREE',
      bgColor: 'bg-white',
      textColor: 'text-[#252B42]',
      border: 'border border-[#23A6F0]',
      isPopular: false
    },
    {
      name: 'STANDARD',
      description: 'Organize across all apps by hand',
      price: '9.99',
      period: 'Per Month',
      features: [
        { text: 'Unlimited product updates', included: true },
        { text: 'Unlimited product updates', included: true },
        { text: 'Unlimited product updates', included: true },
        { text: '1GB Cloud storage', included: false },
        { text: 'Email and community support', included: false }
      ],
      buttonText: 'TRY FOR FREE',
      bgColor: 'bg-[#252B42]',
      textColor: 'text-white',
      border: 'border-none',
      isPopular: true
    },
    {
      name: 'PREMIUM',
      description: 'Organize across all apps by hand',
      price: '19.99',
      period: 'Per Month',
      features: [
        { text: 'Unlimited product updates', included: true },
        { text: 'Unlimited product updates', included: true },
        { text: 'Unlimited product updates', included: true },
        { text: '1GB Cloud storage', included: false },
        { text: 'Email and community support', included: false }
      ],
      buttonText: 'TRY FOR FREE',
      bgColor: 'bg-white',
      textColor: 'text-[#252B42]',
      border: 'border border-[#23A6F0]',
      isPopular: false
    }
  ];

  return (
    <>
      {/* giriş kımsı */}
      <div className="flex flex-col items-center justify-center mb-8 mt-8 bg-white">
        <div className="text-center space-y-4">
          <p className="text-lg text-[#737373] uppercase tracking-wider font-semibold">
            PRICING
          </p>
          <h1 className="text-3xl md:text-3xl font-bold text-[#252B42]">
            Simple Pricing
          </h1>
          <div className="flex items-center justify-center gap-2 text-m text-gray-600 pt-2">
            <Link to="/" className="hover:text-[#252B42] transition-colors">
              Home
            </Link>
            <span className="text-gray-400">{'>'}</span>
            <Link to="/pricing" className="text-[#737373]">
              Pricing
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] py-20 px-8">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-[#252B42] text-2xl font-bold mb-3 tracking-wide">PRICING</h2>
            <h1 className="text-[#737373] text-xl max-w-[300px] md:max-w-[500px] mx-auto text-center font-normal mb-4">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </h1>

            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-[#252B42] font-bold">Monthly</span>
              <div className="w-12 h-6 bg-[#23A6F0] rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
              </div>
              <span className="text-[#252B42] font-bold">Yearly</span>
              <span className="bg-[#B2E3FF] text-[#23A6F0] text-lg font-bold px-3 py-1 rounded-full ml-2">
                Save 25%
              </span>
            </div>
          </div>

         {/* Plan kısmı */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-0 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`${plan.bgColor} ${plan.border} ${plan.textColor} py-12 px-10 flex flex-col
                  ${index === 1 ? 'md:scale-105 md:shadow-2xl md:rounded-xl' : index === 0 ? 'md:rounded-l-xl' : 'md:rounded-r-xl'}
                  w-full md:w-80`}
              >
               
                <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                <p className={`text-center text-base font-bold mb-8 ${plan.isPopular ? 'text-white' : 'text-[#737373]'}`}>
                  {plan.description}
                </p>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-5xl font-bold text-[#23A6F0]">{plan.price}</span>
                    <span className="text-2xl font-bold text-[#23A6F0]">$</span>
                  </div>
                  <p className={`text-sm font-bold ${plan.isPopular ? 'text-[#8EC2F2]' : 'text-[#8EC2F2]'}`}>
                    {plan.period}
                  </p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        feature.included ? 'bg-[#2DC071]' : 'bg-[#BDBDBD]'
                      }`}>
                        <Check className="w-5 h-5 text-white stroke-[3]" />
                      </div>
                      <span className={`text-sm font-semibold ${plan.isPopular ? 'text-white' : 'text-[#252B42]'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <Link to="/">
            <button className={`w-full bg-[#23A6F0] text-white font-bold text-sm py-4 rounded-md 
                hover:bg-[#1c8ed1] transition-colors`}>
                {plan.buttonText}
            </button>
            </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logo*/}
      <div className="w-full bg-[#FAFAFA] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold max-w-[300px] md:max-w-[600px] mx-auto text-center text-[#252B42] mb-6" style={{ fontFamily: 'Montserrat' }}>
                Trusted By Over 4000 Big Companies
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
              <img src={HooliLogo} alt="Hooli" className="h-12 md:h-14 object-contain grayscale hover:grayscale-0 transition-all cursor-pointer" />
              <img src={LyftLogo} alt="Lyft" className="h-12 md:h-14 object-contain grayscale hover:grayscale-0 transition-all cursor-pointer" />
              <img src={YaprakLogo} alt="Yaprak" className="h-12 md:h-14 object-contain grayscale hover:grayscale-0 transition-all cursor-pointer" />
              <img src={StripeLogo} alt="Stripe" className="h-12 md:h-14 object-contain grayscale hover:grayscale-0 transition-all cursor-pointer" />
              <img src={AWSLogo} alt="AWS" className="h-12 md:h-14 object-contain grayscale hover:grayscale-0 transition-all cursor-pointer" />
              <img src={RedditLogo} alt="Reddit" className="h-12 md:h-14 object-contain grayscale hover:grayscale-0 transition-all cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-4" style={{ fontFamily: 'Montserrat' }}>
                Pricing FAQs
              </h2>
              <p className="text-[#737373] text-lg max-w-md mx-auto" style={{ fontFamily: 'Montserrat' }}>
                <span className="md:hidden">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</span>
                <span className="hidden md:inline">Problems trying to resolve the conflict between the two major realms of Classical physics</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-12">
              
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 0.75L8.25 8L0.75 15.25" stroke="#23A6F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#252B42] font-bold text-base mb-2">
                    <span className="md:hidden">Work better together</span>
                    <span className="hidden md:inline">the quick fox jumps over the lazy dog</span>
                  </h3>
                  <p className="text-[#737373] text-sm leading-relaxed">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 0.75L8.25 8L0.75 15.25" stroke="#23A6F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#252B42] font-bold text-base mb-2">
                    <span className="md:hidden">OpenType features and Variable fonts</span>
                    <span className="hidden md:inline">the quick fox jumps over the lazy dog</span>
                  </h3>
                  <p className="text-[#737373] text-sm leading-relaxed">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 0.75L8.25 8L0.75 15.25" stroke="#23A6F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#252B42] font-bold text-base mb-2">
                    <span className="md:hidden">Start working faster today</span>
                    <span className="hidden md:inline">the quick fox jumps over the lazy dog</span>
                  </h3>
                  <p className="text-[#737373] text-sm leading-relaxed">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 0.75L8.25 8L0.75 15.25" stroke="#23A6F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#252B42] font-bold text-base mb-2">
                    <span className="md:hidden">Work at the speed of thought.</span>
                    <span className="hidden md:inline">the quick fox jumps over the lazy dog</span>
                  </h3>
                  <p className="text-[#737373] text-sm leading-relaxed">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 0.75L8.25 8L0.75 15.25" stroke="#23A6F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#252B42] font-bold text-base mb-2">
                    <span className="md:hidden">The Fastest way to organize</span>
                    <span className="hidden md:inline">the quick fox jumps over the lazy dog</span>
                  </h3>
                  <p className="text-[#737373] text-sm leading-relaxed">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 0.75L8.25 8L0.75 15.25" stroke="#23A6F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#252B42] font-bold text-base mb-2">
                    <span className="md:hidden">The Fastest way to navigate</span>
                    <span className="hidden md:inline">the quick fox jumps over the lazy dog</span>
                  </h3>
                  <p className="text-[#737373] text-sm leading-relaxed">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-[#737373] text-lg">
                Haven't got your answer?{' '}
                <span className="text-[#23A6F0] font-semibold cursor-pointer hover:underline">Contact our support</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[#252B42] text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat' }}>
              Start your<br />14 days free trial
            </h2>
            <p className="text-[#737373] text-s font-medium md:text-base mb-8 max-w-[400px] md:max-w-[470px] mx-auto" style={{ fontFamily: 'Montserrat' }}>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
            </p>
            
            <Link to="/">
            <button className="bg-[#23A6F0] text-white font-bold text-sm px-10 py-4 rounded-md hover:bg-[#1c8ed1] transition-colors mb-8">
                Try it free now
            </button>
            </Link>
            <div className="flex items-center justify-center gap-8">
              <Twitter className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" style={{ color: '#55ACEE' }} />
              <Facebook className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" style={{ color: '#395185' }} />
              <Instagram className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" style={{ color: '#000000' }} />
              <Linkedin className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" style={{ color: '#0A66C2' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}