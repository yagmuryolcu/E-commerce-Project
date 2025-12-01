import React from 'react';
import { Phone, MapPin, Mail, MoveDown } from 'lucide-react';
import contactImg from '../assets/contact.png';
import { Link } from 'react-router-dom';


export default function Contact() {
  return (
    <>
      {/* İlk Section - Contact */}
      <div className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-12 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Sol taraf - İçerik */}
            <div className="space-y-8 flex flex-col items-center lg:items-start">
              <p className="text-m font-bold text-[#252B42] uppercase tracking-wide text-center lg:text-left" style={{ fontFamily: 'Montserrat' }}>
                CONTACT US
              </p>
              
              <h2 className="text-5xl md:text-5xl font-bold text-center lg:text-left text-[#252B42]" style={{ fontFamily: 'Montserrat' }}>
                Get in touch today!
              </h2>
              
              <p className="text-lg text-[#737373] max-w-[250px] md:max-w-[350px] font-normal text-center lg:text-left" style={{ fontFamily: 'Montserrat' }}>
                We know how large objects will act, but things on a small scale
              </p>
              
              <div className="space-y-4 text-center lg:text-left" style={{ fontFamily: 'Montserrat' }}>
                <p className="text-[#252B42] font-bold text-lg">
                  Phone : <span className="font-semibold">+451 215 215</span>
                </p>
                
                <p className="text-[#252B42] font-bold text-lg">
                  Fax : <span className="font-semibold">+451 215 215</span>
                </p>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#252B42] hover:text-[#23A6F0] transition-colors"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#252B42] hover:text-[#23A6F0] transition-colors"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#252B42] hover:text-[#23A6F0] transition-colors"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#252B42] hover:text-[#23A6F0] transition-colors"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Sağ taraf - Resim */}
            <div className="relative overflow-visible">
              {/* Dekoratif arka plan elemanları */}
              <div className="absolute top-1/2 left-1/2 -mt-14 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[400px] md:h-[400px] bg-[#FFE9EA] rounded-full"></div>
              
              <img
                src={contactImg}
                alt="contact"
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

      {/* İkinci kısmı*/}
        <div className="w-full py-16 bg-[#FAFAFA] md:bg-white">
            <div className="container mx-auto px-4">
       
          <div className="text-center mb-12">
            <p className="text-lg font-bold text-[#252B42] uppercase tracking-wide mb-4" style={{ fontFamily: 'Montserrat' }}>
              VISIT OUR OFFICE
            </p>
            <h2 className="text-3xl md:text-4xl  text-center font-bold text-[#252B42] max-w-[250px] md:max-w-[550px] mx-auto" style={{ fontFamily: 'Montserrat' }}>
              We help small businesses with big ideas
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-center  px-8 items-stretch gap-12 md:gap-0 max-w-5xl mx-auto">
            <div className="flex-1 bg-white py-16 px-8 flex flex-col items-center">
              <Phone className="mb-6" size={72} strokeWidth={1.5} style={{ color: '#23A6F0' }} />
              <p className="text-sm font-semibold text-[#252B42] mb-1" style={{ fontFamily: 'Montserrat' }}>
                georgia.young@example.com
              </p>
              <p className="text-sm font-semibold text-[#252B42] mb-4" style={{ fontFamily: 'Montserrat' }}>
                georgia.young@ple.com
              </p>
              <p className="text-base font-bold text-[#252B42] mb-4" style={{ fontFamily: 'Montserrat' }}>
                Get Support
              </p>
              <button className="px-8 py-3 border-2 rounded-full font-bold transition-colors" style={{ fontFamily: 'Montserrat', borderColor: '#23A6F0', color: '#23A6F0' }}>
                Submit Request
              </button>
            </div>

            {/* Lacivert kartlık*/}
            <div className="flex-1 py-16 px-8 flex flex-col items-center" style={{ backgroundColor: '#252B42' }}>
              <MapPin className="mb-6" size={72} strokeWidth={1.5} style={{ color: '#23A6F0' }} />
              <p className="text-sm font-semibold text-white mb-1" style={{ fontFamily: 'Montserrat' }}>
                georgia.young@example.com
              </p>
              <p className="text-sm font-semibold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
                georgia.young@ple.com
              </p>
              <p className="text-base font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
                Get Support
              </p>
              <button className="px-8 py-3 border-2 rounded-full font-bold transition-colors" style={{ fontFamily: 'Montserrat', borderColor: '#23A6F0', color: '#23A6F0' }}>
                Submit Request
              </button>
            </div>

            <div className="flex-1 bg-white py-16 px-8 flex flex-col items-center">
              <Mail className="mb-6" size={72} strokeWidth={1.5} style={{ color: '#23A6F0' }} />
              <p className="text-sm font-semibold text-[#252B42] mb-1" style={{ fontFamily: 'Montserrat' }}>
                georgia.young@example.com
              </p>
              <p className="text-sm font-semibold text-[#252B42] mb-4" style={{ fontFamily: 'Montserrat' }}>
                georgia.young@ple.com
              </p>
              <p className="text-base font-bold text-[#252B42] mb-4" style={{ fontFamily: 'Montserrat' }}>
                Get Support
              </p>
              <button className="px-8 py-3 border-2 rounded-full font-bold transition-colors" style={{ fontFamily: 'Montserrat', borderColor: '#23A6F0', color: '#23A6F0' }}>
                Submit Request
              </button>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="flex justify-center mb-4">
              <MoveDown size={72} strokeWidth={2} style={{ color: '#23A6F0' }} />
            </div>
            <p className="text-sm font-bold text-[#252B42]  tracking-wide mb-4" style={{ fontFamily: 'Montserrat' }}>
              WE Can't WAIT TO MEET YOU
            </p>
            <h3 className="text-4xl md:text-5xl font-bold text-[#252B42] mb-6" style={{ fontFamily: 'Montserrat' }}>
              Let's Talk
            </h3>
            <button className="px-10 py-4 bg-[#23A6F0] text-white rounded font-bold hover:bg-[#1a8fd8] transition-colors" style={{ fontFamily: 'Montserrat' }}>
              <Link to="/contact"> Try it free now</Link>

            </button>
          </div>
        </div>
      </div>
    </>
  );
}