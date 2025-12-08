import React from 'react';
import { Calendar, ChevronRight, TrendingUp } from 'lucide-react';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4.jpg';
import blog5 from '../assets/blog5.jpg';
import blog6 from '../assets/blog6.jpg';
import blog7 from '../assets/blog7.jpg';
import blog8 from '../assets/blog8.jpg';
import blog9 from '../assets/blog9.jpg';
import blog10 from '../assets/blog10.jpg';
import blog11 from '../assets/blog11.jpg';

const blogPosts = [
  {
    id: 1,
    image: blog1,
    desktopImage: blog3,
    tags: ['Google', 'Trending', 'New'],
    title: 'Koudetat à la Maison #1 (L\'integral)',
    description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
    date: '22 April 2021',
    comments: 10,
    featured: true
  },
  {
    id: 2,
    image: blog2,
    desktopImage: blog7,
    tags: ['Google', 'Trending', 'New'],
    title: 'Koudetat à la Maison #1 (L\'integral)',
    description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
    date: '22 April 2021',
    comments: 10
  },
  {
    id: 3,
    image: blog3,
    desktopImage: blog8,
    tags: ['Google', 'Trending', 'New'],
    title: 'Koudetat à la Maison #1 (L\'integral)',
    description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
    date: '22 April 2021',
    comments: 10
  },
  {
    id: 4,
    image: blog4,
    desktopImage: blog9,
    tags: ['Google', 'Trending', 'New'],
    title: 'Koudetat à la Maison #1 (L\'integral)',
    description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
    date: '22 April 2021',
    comments: 10
  },
  {
    id: 5,
    image: blog5,
    desktopImage: blog10,
    tags: ['Google', 'Trending', 'New'],
    title: 'Koudetat à la Maison #1 (L\'integral)',
    description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
    date: '22 April 2021',
    comments: 10
  },
  {
    id: 6,
    image: blog6,
    desktopImage: blog11,
    tags: ['Google', 'Trending', 'New'],
    title: 'Koudetat à la Maison #1 (L\'integral)',
    description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
    date: '22 April 2021',
    comments: 10
  }
];

export default function BlogSection() {
  return (
    <div className="w-full bg-white py-16 md:py-24 " style={{ fontFamily: 'Montserrat' }}>
      <div className="container mx-auto px-4 ">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-12 md:gap-12  max-w-[450px] md:max-w-[1200px] 
                mx-auto">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-m overflow-hidden shadow-lg "
            >
              <div className="relative h-72 md:h-80 overflow-hidden">
               <img
                src={window.innerWidth >= 768 ? post.desktopImage : post.image}
                alt={post.title}
                className="
                    w-full 
                    h-[300px]       
                    md:h-[350px]    
                    lg:h-[400px]    
                    object-cover 
                    group-hover:scale-105 
                    transition-transform 
                    duration-500   
                "
/>
                
                {/* NEW Badge */}
                <div className="absolute top-5 left-5">
                  <span className="bg-[#E74040] text-white px-3 py-1 rounded text-sm font-bold shadow-lg">
                    NEW
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Tags */}
                <div className="flex items-center gap-4 mb-4 text-xs">
                  <span className="text-[#23A6F0] hover:underline cursor-pointer font-medium">
                    Google
                  </span>
                  <span className="text-[#737373] font-medium">Trending</span>
                  <span className="text-[#737373] font-medium">New</span>
                </div>

                <h3 className="text-xl font-medium    font-montserrat  text-[20px] leading-[30px] tracking-[0.2px] w-[247px] h-[60px]  text-[#252B42]">
                  {post.title}
                </h3>

                <p className="text-[#737373] text-m max-w-[320px]   font-medium mt-6 leading-relaxed mb-6">
                  {post.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-[#737373] text-s">
                    <Calendar size={16} className="text-[#23A6F0]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#737373] text-s">
                    <TrendingUp size={16} className="text-[#23856D]" />
                    <span>{post.comments} comments</span>
                  </div>
                </div>

                <button className="mt-6 flex items-center gap-2 text-[#737373] hover:text-[#23A6F0] font-bold text-m transition-colors group/link">
                  Learn More
                  <ChevronRight 
                    size={16} 
                    className="text-[#23A6F0] group-hover/link:translate-x-1 transition-transform" 
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}