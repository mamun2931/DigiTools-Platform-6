import React from 'react';

const Workflow = () => {
    return (
        <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-16 mt-12">
            <div>
                <h2 className='text-4xl text-white font-extrabold text-center mb-4'>Ready to Transform Your Workflow?</h2>
                <p className='text-center text-white mb-8 '>
                    Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.
                </p>
                <div className='flex gap-4 items-center justify-center'>
                    <button className='btn rounded-full bg-white text-[#4F39F6] hover:bg-gray-200   '>Explore Products</button>
                    <button className='btn rounded-full !bg-transparent text-white'>View Pricing</button>
                </div>
                <p className='text-center text-white mt-4'>
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </div>
    );
};

export default Workflow;