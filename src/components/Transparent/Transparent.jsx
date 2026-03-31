import React, { use } from 'react';
import TransparentCard from './TransparentCard';

const Transparent = ({ Plans }) => {
    const plansData = use(Plans);

    return (
        <div className='bg-[#ffffff] py-15 mt-28'>
             <div className='px-4 mb-12'>
                <h1 className='text-5xl text-[#101727] font-extrabold text-center mb-5'>Simple, Transparent Pricing</h1>
                <p className='text-center text-[#627382] max-w-2xl mx-auto'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            

            <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {plansData.map((plan) => (
                    
                    <TransparentCard key={plan.id} plan={plan} />
                ))}
            </div>
        </div>
    );
};

export default Transparent;