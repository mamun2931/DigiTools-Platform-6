import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';

const NavBar = ({ selectedProducts}) => {
    return (
        <div>
            
            <div className='max-w-7xl mx-auto flex items-center justify-between py-5' >
                <div>
                    <h1 className='text-3xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                        DigiTools
                        </h1>

                </div>

            <div className='hidden md:flex'>
                  <ul className='flex gap-10 '>
                        <li className='text-[#101727] font-semibold'><a href="">Products</a></li>
                        <li className='text-[#101727] font-semibold'><a href="">Pricing</a></li>
                        <li className='text-[#101727] font-semibold'><a href="">Testimonials</a></li>
                        <li className='text-[#101727] font-semibold'><a href="">FAQ</a></li>
                    </ul>
            </div>
                <div className='flex items-center gap-20'>

                <div className='flex items-center gap-5'> 
                    <div className='indicator'>
                        <div><TiShoppingCart className='text-2xl' /></div>
                        <span className='text-red-500 badge-sm indicator-item'>{selectedProducts.length}</span>
                    </div>
                    <button><a href="">Login</a></button>
                    <button className='btn rounded-full text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>Get Started</button>
                </div>
                </div>
            </div>
                <hr className='text-gray-300'/>
        </div>
    );
};

export default NavBar;