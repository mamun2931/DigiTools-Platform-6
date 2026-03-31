import React from 'react';

const TransparentCard = ({ plan }) => {


    return (
        
            
                   <div className={`card  rounded-lg shadow-sm  hover:hover:scale-105 hover:shadow-gray-400 relative ${plan.name === "Pro" ? 'border-none bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-[#ffffff] border border-gray-200'}`}>
                        <div className="card-body">

                            {plan.name === "Pro" && (
                                <span className="badge bg-[#FEF3C6] text-[#BB4D00] rounded-full border-none absolute -top-3 right-35 badge-warning font-bold">Most Popular</span>
                            )}
                            
                            <div className=" items-center mt-2">
                                <h2 className={`text-2xl font-bold text-[#101727] ${plan.name === "Pro" ? 'text-white' : ''}`}>{plan.name}</h2>
                                <p className={`text-sm ${plan.name === "Pro" ? 'text-white' : 'text-[#4A5568]'}`}>{plan.description}</p>
                                <div className="flex items-baseline gap-2 mt-3">
                                    <span className={`text-3xl font-bold ${plan.name === "Pro" ? 'text-white' : 'text-[#101727]'}`}>${plan.price}</span>
                                    <span className={`text-sm ${plan.name === "Pro" ? 'text-white' : 'text-gray-500'}`}>/{plan.period}</span>
                                </div>
                            </div>

                            

                            <ul className="mt-6 flex flex-col gap-4 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-3 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className={`text-sm ${plan.name === "Pro" ? 'text-white' : 'text-[#4A5568]'}`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                <button className={`btn btn-block font-bold rounded-full ${plan.name === "Pro" ? 'bg-white text-[#4F39F6] hover:bg-gray-200' : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90'}`}>
                                    {plan.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>

    );
};

export default TransparentCard;