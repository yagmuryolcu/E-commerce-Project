import React from 'react';
import HeaderImg from '../assets/newcollection.png'

export default function HeaderPicture() {
  return (
    <div className="relative w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div 
          className="relative rounded-xl min-h-[400px] flex items-center"
          style={{
            background: 'linear-gradient(to right, #96E9FB, #ABECD6)'
          }}
        >
          <div className="w-full py-12 px-8 md:px-16">
            <div className="grid md:grid-cols-2 gap-8 items-end items-center">
              {/* sol taraf */}
              <div className="space-y-6 lg:pl-16 text-center md:text-left">
                <p className="text-[#2A7CC7] font-bold tracking-wide text-2xl">
                  SUMMER 2020
                </p>
                
        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight whitespace-nowrap">
                  NEW COLLECTION
                </h1>
                
      <p className="text-lg text-[#737373]   max-w-[230px] md:max-w-[300px] mx-auto md:mx-0">
                  We know how large objects will act,
                   but things on a small scale.
                </p>
                
                <button className="bg-[#23A6F0]   hover:bg-blue-600 text-white font-bold py-4 px-8 rounded text-lg transition-colors">
                  SHOP NOW
                </button>
              </div>
               <div className="hidden md:block absolute top-0 right-96 w-16 h-16 bg-white rounded-full z-20"></div>

        <div className=" hidden md:block absolute top-12 -right-10 w-3 h-3 bg-[#977DF4] rounded-full opacity-90"></div>
        <div className=" hidden md:block absolute top-48 -right-8 w-6 h-6 bg-white rounded-full z-20"></div>



              {/* Resim*/}
              <div className="relative h-full md:justify-end">
                {/* resmin arkasındaki beyaz daire */}

                <div className=" hidden md:block absolute bottom-10 right-0 w-96 h-96 bg-white rounded-full opacity-90 translate-x-16"></div>
    

            <div className="relative z-10 max-w-2xl w-full flex justify-center md:justify-end md:translate-x-40">
                <div className="absolute w-72 h-72 bg-white rounded-full opacity-90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden"></div>

                  <img 
                    src={HeaderImg} 
                    alt="New Collection Model" 
                    className="h-auto max-h-[620px] object-contain translate-y-12"
                  />
                  <div className="absolute bottom-42   left-0 w-12 h-12 bg-white rounded-full md:hidden"></div>
              <div className="absolute bottom-44 right-4 w-2 h-2 bg-[#977DF4] rounded-full md:hidden"></div>
                            <div className="absolute bottom-28 right-4 w-5 h-5 right-10 bg-white rounded-full md:hidden"></div>

        
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}