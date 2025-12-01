import React from 'react';
import aboutImg from '../assets/about.png';
import aboutImg2 from '../assets/about2.jpg';
import aboutImg3 from '../assets/about3.jpg';
import aboutImg4 from '../assets/about4.jpg';
import aboutImg5 from '../assets/about5.jpg';
import aboutImg6 from '../assets/about6.jpg';

import { Play, Facebook, Instagram, Twitter } from 'lucide-react';
import HooliLogo from '../assets/fa-brands-1.png';
import LyftLogo from '../assets/fa-brands-2.png';
import YaprakLogo from '../assets/fa-brands-3.png';
import StripeLogo from '../assets/fa-brands-4.png';
import AWSLogo from '../assets/fa-brands-5.png';
import RedditLogo from '../assets/col-md-2.png';
import { Link } from 'react-router-dom';


export default function About() {
  return (
    <>
      <div className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">

            <div className="flex-1 text-center md:text-left">
              <p className="hidden md:block text-m font-bold text-[#252B42] uppercase tracking-wide mb-8" style={{ fontFamily: 'Montserrat' }}>
                ABOUT COMPANY
              </p>
              <h2 className="text-4xl md:text-4xl font-bold text-[#252B42] mb-6" style={{ fontFamily: 'Montserrat' }}>
                ABOUT US
              </h2>
              <p className="text-lg text-[#737373] font-medium mb-6 max-w-[250px] md:max-w-[350px] mx-auto md:mx-0" style={{ fontFamily: 'Montserrat' }}>
                We know how large objects will act, but things on a small scale just do not act that way.
              </p>
              <button className="px-8 py-3 bg-[#23A6F0] text-white rounded font-bold hover:bg-[#1a8fd8] transition-colors" style={{ fontFamily: 'Montserrat' }}>
                <Link to="/about">Get Quote Now</Link>
              </button>
            </div>

            <div className="flex-1 relative overflow-visible mx-8">
              {/* resmin arkası */}
              <div className="absolute top-1/2 left-1/2 -mt-14 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[400px] md:h-[400px] bg-[#FFE9EA] rounded-full"></div>
              
              <img
                src={aboutImg}
                alt="about"
                className="w-[500px] h-[500px] object-cover rounded-lg relative z-10"
              />
              
              <div className="absolute top-20 -right-4 w-4 h-4 bg-[#977DF4] rounded-full z-20"></div>
              <div className="absolute top-48 -right-4 w-8 h-8 bg-[#FFE9EA] rounded-full z-20"></div> 
              <div className="absolute top-8 -left-4 w-16 h-16 bg-[#FFE9EA] rounded-full z-20"></div>
              <div className="absolute bottom-36 -left-4 w-4 h-4 bg-[#977DF4] rounded-full z-20"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-16 md:py-24 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-[#E74040] text-center md:text-left text-m font-medium md:mb-8" style={{ fontFamily: 'Montserrat' }}>  Problems trying </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl max-w-[330px] md:max-w-[500px] font-bold text-[#252B42] leading-tight mb-12" style={{ fontFamily: 'Montserrat' }}>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                </h2>
              </div>
              
              <div className="flex-1 text-left mx-12">
                <p className="text-[#737373] text-lg font-medium" style={{ fontFamily: 'Montserrat' }}>
                  Problems trying to resolve the conflict bet seasons of Classical physics: Newtonian mechanics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-8">

              <div className="text-center">
                <h3 className="text-5xl md:text-6xl font-bold text-[#252B42] mb-2" style={{ fontFamily: 'Montserrat' }}>
                  15K
                </h3>
                <p className="text-[#737373] text-sm font-bold" style={{ fontFamily: 'Montserrat' }}>
                  Happy Customers
                </p>
              </div>


              <div className="text-center">
                <h3 className="text-5xl md:text-6xl font-bold text-[#252B42] mb-2" style={{ fontFamily: 'Montserrat' }}>
                  150K
                </h3>
                <p className="text-[#737373] text-sm font-bold" style={{ fontFamily: 'Montserrat' }}>
                  Monthly Visitors
                </p>
              </div>


              <div className="text-center">
                <h3 className="text-5xl md:text-6xl font-bold text-[#252B42] mb-2" style={{ fontFamily: 'Montserrat' }}>
                  15
                </h3>
                <p className="text-[#737373] text-sm font-bold" style={{ fontFamily: 'Montserrat' }}>
                  Countries Worldwide
                </p>
              </div>


              <div className="text-center">
                <h3 className="text-5xl md:text-6xl font-bold text-[#252B42] mb-2" style={{ fontFamily: 'Montserrat' }}>
                  100+
                </h3>
                <p className="text-[#737373] text-sm font-bold" style={{ fontFamily: 'Montserrat' }}>
                  Top Partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex justify-center">
            <div className="relative w-full max-w-[350px] md:max-w-4xl aspect-square md:aspect-video rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src={aboutImg2}
                alt="Video gördeli"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#23A6F0] rounded-full flex items-center justify-center hover:bg-[#1a8fd8] transition-all duration-300 group-hover:scale-110">
                  <Play className="w-7 h-8-7 md:w-10 md:h-10 text-white ml-1" fill="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    <div className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-4" style={{ fontFamily: 'Montserrat' }}>
                Meet Our Team
              </h2>
              <p className="text-[#737373] text-lg font-medium max-w-[240px] md:max-w-[512px] mx-auto" style={{ fontFamily: 'Montserrat' }}>
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-start">

              <div className="flex flex-col items-center">
                <div className="w-full max-w-[300px] mb-4">
                  <img
                    src={aboutImg3}
                    alt="Team member"
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#252B42] mb-1" style={{ fontFamily: 'Montserrat' }}>
                  Username
                </h3>
                <p className="text-sm text-[#737373] mb-3" style={{ fontFamily: 'Montserrat' }}>
                  Profession
                </p>
                <div className="flex gap-4">
                  <Facebook className="w-5 h-5 text-[#335BF5]  md:text-[#21A6DF] cursor-pointer hover:opacity-80" />
                  <Instagram className="w-5 h-5 text-[#E51F5A] md:text-[#21A6DF] cursor-pointer hover:opacity-80" />
                  <Twitter className="w-5 h-5 text-[#21A6DF] cursor-pointer hover:opacity-80" />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-full max-w-[300px] mb-4">
                  <img
                    src={aboutImg4}
                    alt="Team member"
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#252B42] mb-1" style={{ fontFamily: 'Montserrat' }}>
                  Username
                </h3>
                <p className="text-sm text-[#737373] mb-3" style={{ fontFamily: 'Montserrat' }}>
                  Profession
                </p>
                <div className="flex gap-4">
                  <Facebook className="w-5 h-5 text-[#335BF5] md:text-[#21A6DF] cursor-pointer hover:opacity-80" />
                  <Instagram className="w-5 h-5 text-[#E51F5A] md:text-[#21A6DF] cursor-pointer hover:opacity-80" />
                  <Twitter className="w-5 h-5 text-[#21A6DF] cursor-pointer hover:opacity-80" />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-full max-w-[300px] mb-4">
                  <img
                    src={aboutImg5}
                    alt="Team member"
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#252B42] mb-1" style={{ fontFamily: 'Montserrat' }}>
                  Username
                </h3>
                <p className="text-sm text-[#737373] mb-3" style={{ fontFamily: 'Montserrat' }}>
                  Profession
                </p>
                <div className="flex gap-4">
                  <Facebook className="w-5 h-5 text-[#335BF5] md:text-[#21A6DF] cursor-pointer hover:opacity-80" />
                  <Instagram className="w-5 h-5 text-[#E51F5A] md:text-[#21A6DF] cursor-pointer hover:opacity-80" />
                  <Twitter className="w-5 h-5 text-[#21A6DF] cursor-pointer hover:opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


 <div className="w-full bg-[#FAFAFA] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl  max-w-[250px] md:max-w-[550px] text-center font-bold text-[#252B42] mb-6 mx-auto" style={{ fontFamily: 'Montserrat' }}>
                Big Companies Are Here
              </h2>
              <p className="text-[#737373] text-m max-w-[350px]  font-medium md:max-w-[500px] mx-auto" style={{ fontFamily: 'Montserrat' }}>
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
              </p>
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
   

        <div className="w-full bg-[#2A7CC7] py-16 md:py-0">
        <div className="flex flex-col md:flex-row items-center">

          <div className="flex-1 text-center md:text-left py-12 md:py-24 px-4 md:pl-32">
            <p className="text-white text-sm font-bold mb-6 uppercase tracking-wide" style={{ fontFamily: 'Montserrat' }}>
              WORK WITH US
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 max-w-[180px] md:max-w-[450px] mx-auto md:mx-0 " style={{ fontFamily: 'Montserrat' }}>
              Now Let's grow Yours
            </h2>
            <p className="text-white text-sm mb-8 max-w-[250px] md:max-w-[430px] mx-auto md:mx-0 font-medium" style={{ fontFamily: 'Montserrat' }}>
              The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
            </p>
            <button className="px-8 py-3 border-2 border-white text-white rounded font-bold hover:bg-white hover:text-[#2A7CC7] transition-all" style={{ fontFamily: 'Montserrat' }}>
              <Link to="/about">Button</Link>
            </button>
          </div>

          <div className="hidden md:block md:w-[40%]">
            <img
              src={aboutImg6}
              alt="Work with us"
              className="w-full h-[500px] object-cover object-left"
            />
          </div>
        </div>
      </div>
    </>
  );
}