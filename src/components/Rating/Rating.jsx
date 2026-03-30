import React from 'react';

const Rating = () => {
    return (
<div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
  <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center items-center py-16 px-5'>
    
    <div className="flex flex-col items-center">
      <h1 className='text-6xl text-white font-extrabold mb-3 tracking-tight'>50K+</h1>
      <p className='text-white/80 text-xl font-medium'>Active Users</p>
    </div>

    <div className='flex items-center justify-center relative py-10 md:py-0'>
      <div className="hidden md:block h-[80px] w-[1px] bg-white/20 absolute left-0"></div>
      
      <div className="flex flex-col items-center">
        <h1 className='text-6xl text-white font-extrabold mb-3 tracking-tight'>200+</h1>
        <p className='text-white/80 text-xl font-medium'>Premium Tools</p>
      </div>

      <div className="hidden md:block h-[80px] w-[1px] bg-white/20 absolute right-0"></div>
    </div>

    <div className='flex flex-col items-center'>
      <h1 className='text-6xl text-white font-extrabold mb-3 tracking-tight'>4.9</h1>
    </div>
    
  </div>
</div>
    );
};

export default Rating;