import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div className='bg-black py-8 '>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 py-20 px-5'>
                    <div className='space-y-5 col-span-2'>
                        <h2 className='text-white text-4xl font-bold'>DigiTools</h2>
                        <p className=' text-gray-400'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className='space-y-4'>
                        <h4 className='text-white text-xl font-bold'>Product</h4>
                        <p className='text-gray-400'>Features</p>
                        <p className='text-gray-400'>Pricing</p>
                        <p className='text-gray-400'>Templates</p>
                        <p className='text-gray-400'>Integrations</p>
                    </div>
                    <div className='space-y-4'>
                        <h4 className='text-white text-xl font-bold'>Company</h4>
                        <p className='text-gray-400'>About Us</p>
                        <p className='text-gray-400'>Careers</p>
                        <p className='text-gray-400'>Press</p>
                    </div>
                    <div className='space-y-4'>
                        <h4 className='text-white text-xl font-bold'>Resources</h4>
                        <p className='text-gray-400'>Documentation</p>
                        <p className='text-gray-400'>Help Center</p>
                        <p className='text-gray-400'>Community</p>
                        <p className='text-gray-400'>Contact</p>
                    </div>
                    <div className='space-y-5'>
                        <h4 className='text-white text-xl font-bold'>Social Links</h4>
                        <div className='flex items-center gap-5'>
                            <div className='bg-white p-2 rounded-full'>< BsInstagram /></div>
                            <div className='bg-white p-2 rounded-full'> <FaFacebook /></div>
                            <div className='bg-white p-2 rounded-full'><BsTwitter /></div>
                            
                        </div>
                    </div>
            </div>

            <div>
                <div className='max-w-7xl mx-auto '> <hr /> </div>

                <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 py-5'>
                    <div>
                         <p className='text-center text-gray-400'>© 2026 DigiTools. All rights reserved.</p>
                    </div>
                    <div className='flex justify-center gap-8 py-4'>
                        <p className='text-gray-400'>Privacy Policy</p>
                        <p className='text-gray-400'>Terms of Service</p>
                        <p className='text-gray-400'>Cookies</p>
                    </div>
                </div>
               

            </div>
        </div>
    );
};

export default SocialLinks;