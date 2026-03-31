import React from 'react';
import User from '../../assets/user.png'
import Package from '../../assets/package.png'
import Rocket from '../../assets/rocket.png'

const Steps = () => {
    return (
        <div className=' bg-[#F9FAFC] mt-28 py-28'>
            <div className='max-w-7xl mx-auto'>

                <div className='space-y-4 mb-12'>
                    <h2 className='text-3xl font-bold text-center'>Get Started in 3 Steps</h2>
                    <p className='text-center text-gray-600'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                    <div className='relative flex items-start gap-6 bg-white p-6 rounded-lg shadow-md'>
                        <p className='absolute top-4 right-4 text-white textarea-sm bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-8 h-8 flex items-center justify-center rounded-full'>01</p>
                        <div className='space-y-4 card-body items-center text-center mt-10'>
                            <div className='bg-[#9514FA40] p-4 rounded-full w-16 h-16 flex items-center justify-center '>
                                <img src={User} alt="User"/>
                            </div>
                            <h3 className='text-[#101727] font-bold text-2xl'>Create Account</h3>
                            <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    <div className='relative flex items-start gap-6 bg-white p-6 rounded-lg shadow-md'>
                        <p className='absolute top-4 right-4 text-white textarea-sm bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-8 h-8 flex items-center justify-center rounded-full'>02</p>
                        <div className='space-y-4 card-body items-center text-center mt-10'>
                            <div className='bg-[#9514FA40] p-4 rounded-full w-16 h-16 flex items-center justify-center '>
                                <img src={Package} alt="Package"/>
                            </div>
                            <h3 className='text-[#101727] font-bold text-2xl'>Choose Products</h3>
                            <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>
                    <div className='relative flex items-start gap-6 bg-white p-6 rounded-lg shadow-md'>
                        <p className='absolute top-4 right-4 text-white textarea-sm bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-8 h-8 flex items-center justify-center rounded-full'>03</p>
                        <div className='space-y-4 card-body items-center text-center mt-10'>
                            <div className='bg-[#9514FA40] p-4 rounded-full w-16 h-16 flex items-center justify-center '>
                                <img src={Rocket} alt="Rocket"/>
                            </div>
                            <h3 className='text-[#101727] font-bold text-2xl'>Start Creating</h3>
                            <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Steps;