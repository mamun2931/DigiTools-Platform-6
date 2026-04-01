import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';

const users = [  
    { id: 1, name: "Products", path: "/" },
  { id: 2, name: "Pricing", path: "/about" },
  { id: 3, name: "Testimonials", path: "/contact" },
    { id: 4, name: "FAQ", path: "/faq" }]

const NavBar = ({ selectedProducts}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const links = users.map(user => (
        <li key={user.id} className='text-[white] md:text-[#101727] font-semibold'><a href={user.path}>{user.name}</a></li>
    ))
    return (
        <div className='sticky top-0 z-100 bg-white'>
            
            <div className='max-w-7xl mx-auto flex items-center justify-between py-5'>
                <div className='flex items-center gap-2'>

                    <span className='flex gap-2 items-center cursor-pointer ml-2' onClick={() => setMenuOpen(!menuOpen)}>
                        {
                            menuOpen ? <X  className='md:hidden'/> : <Menu className='md:hidden'/>
                        }
                        <ul className={`md:hidden absolute top-16 left-0 bg-[#4F39F680]  rounded-2xl p-5  ${menuOpen ? 'block' : 'hidden'}`}>
                            {links}

                        </ul>


                    </span>

                            <h1 className=' text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                            DigiTools
                            </h1>

                </div>

            <div className='hidden md:flex'>
                  <ul className='flex gap-10 '>
                    {links}
                    </ul>
            </div>
                <div className='flex items-center gap-20'>

                <div className='flex items-center gap-5'> 
                    <div className='indicator'>
                        <div><TiShoppingCart className='text-2xl' /></div>
                        {selectedProducts.length > 0 && (
                            <span className='text-[white] px-1 bg-red-500 rounded-lg badge-sm indicator-item'>{selectedProducts.length}</span>
                        )}
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