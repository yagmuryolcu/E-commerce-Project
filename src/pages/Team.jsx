import React from 'react';
import { Link } from 'react-router-dom';
import team from '../assets/team.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import team5 from '../assets/team5.jpg';
import team6 from '../assets/team6.jpg';
import team7 from '../assets/team7.jpg';
import team8 from '../assets/team8.jpg';
import team9 from '../assets/team9.jpg';
import team10 from '../assets/team10.jpg';
import team11 from '../assets/team11.jpg';
import team12 from '../assets/team12.jpg';
import team13 from '../assets/team13.jpg';
import team14 from '../assets/team14.jpg';
import { Facebook, Instagram, Twitter ,Linkedin} from 'lucide-react';


export default function Team() {
  const teamMembers = [
    { id: 1, image: team6, username: 'Username', profession: 'Profession' },
    { id: 2, image: team7, username: 'Username', profession: 'Profession' },
    { id: 3, image: team8, username: 'Username', profession: 'Profession' },
    { id: 4, image: team9, username: 'Username', profession: 'Profession' },
    { id: 5, image: team10, username: 'Username', profession: 'Profession' },
    { id: 6, image: team11, username: 'Username', profession: 'Profession' },
    { id: 7, image: team12, username: 'Username', profession: 'Profession' },
    { id: 8, image: team13, username: 'Username', profession: 'Profession' },
    { id: 9, image: team14, username: 'Username', profession: 'Profession' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="text-center py-12 px-4">
        <p className="text-sm text-[#737373] tracking-widest font-semibold mb-3">WHAT WE DO</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Innovation tailored for you
        </h1>
        <div className="flex justify-center gap-2 text-sm">
          <Link to="/" className="font-semibold hover:text-gray-700">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-[#737373] font-semibold">Team</span>
        </div>
      </div>

      {/* Mobile Layout - Vertical Stack */}
      <div className="block md:hidden">
        <div className="w-full h-[500px]">
          <img 
            src={team} 
            alt="Team member 1" 
            className="w-full h-full object-cover block"
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="w-full h-[300px]">
            <img 
              src={team2} 
              alt="Team member 2" 
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="w-full h-[300px]">
            <img 
              src={team4} 
              alt="Team member 3" 
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="w-full h-[300px]">
            <img 
              src={team3} 
              alt="Team member 4" 
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="w-full h-[300px]">
            <img 
              src={team5} 
              alt="Team member 5" 
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout - Grid with large left image */}
      <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr] md:grid-rows-2 md:gap-2 md:pb-2 md:h-[500px]">
        {/* Large left image - spans 2 rows */}
        <div className="md:row-span-2 md:col-span-1">
          <img 
            src={team} 
            alt="Team member 1" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right side - 2x2 grid */}
        <div className="md:col-span-1">
          <img 
            src={team2} 
            alt="Team member 2" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-1">
          <img 
            src={team4} 
            alt="Team member 4" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-1">
          <img 
            src={team3} 
            alt="Team member 3" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-1">
          <img 
            src={team5} 
            alt="Team member 5" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Meet Our Team
        </h2>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              {/* Member Image */}
              <div className="mb-4">
                <img 
                  src={member.image} 
                  alt={member.username}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Member Info */}
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {member.username}
              </h3>
              <p className="text-sm text-[#737373] mb-3">
                {member.profession}
              </p>
              
              {/* Social Media Icons */}
            <div className="flex justify-center gap-4">
              <a href="#" className="text-[#335BF5] md:text-[#23A6F0]   hover:opacity-80">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#E51F5A] md:text-[#23A6F0] hover:opacity-80">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#21A6DF] md:text-[#23A6F0] hover:opacity-80">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            </div>
            
          ))}
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
      </div>
    </div>
  );
}