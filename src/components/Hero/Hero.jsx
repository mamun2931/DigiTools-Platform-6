import React from 'react';
import { GoDotFill } from 'react-icons/go';
import HeroIMG from '../../assets/hero.png';
import { IoCaretForward } from 'react-icons/io5';
import BannerImg from '../../assets/banner.png';

const Hero = () => {
    return (
<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20 py-15'>
            
        <div className='flex flex-col space-y-4'>
               <div className='flex items-center gap-1 font-semibold '>

                <div className='flex items-center gap-2 bg-[#4F39F650] p-2 rounded-full'>
                      <img src={HeroIMG} alt="Icon" />
                    <p className='font-medium bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New:     AI-Powered Tools Available
                    </p>
                </div>


                </div>
                
                <div className='space-y-5'>
                    <h1 className='text-[#101727] font-extrabold text-7xl'>Supercharge Your Digital Workflow</h1>
                    <p className='text-[#627382]'>
                        Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />

                        Explore Products
                    </p>
                </div>

                <div>
                    <button className='btn mr-2.5 text-white rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>Explore Products</button>

                    <button className="btn rounded-full border-[#9514FA] border-2">
                        <IoCaretForward className='text-xl text-[#4F39F6]' /> 
                        <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold'>Watch Demo</span>
                    </button>
                </div>

        </div>

        <div>
            <img src={BannerImg} className='w-full h-full' alt="Banner" />
        </div>
</div>
    );
};

export default Hero;