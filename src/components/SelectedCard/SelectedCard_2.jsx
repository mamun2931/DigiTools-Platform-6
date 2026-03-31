import { User } from 'lucide-react';
import React from 'react';
import { BiSolidTrash } from 'react-icons/bi';

const SelectedCard_2 = ({ product, handleDelete }) => {
    return (
        <div>
                                <div className='card bg-base-100 shadow-sm border border-gray-100 p-5       rounded-2xl'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-4'>
                                        <img
                                            src={product.icon}
                                            alt={product.name} 
                                            className='w-10 h-10 object-cover rounded-lg bg-gray-100'
                                        />

                                        <div className='space-y-1'>
                                            <h2 className='text-xl font-bold flex items-center gap-2'>
                                                <User size={28} className="text-gray-400" /> {product.name}
                                            </h2>
                                            <p className='text-gray-500 font-medium'>Price: ${product.price}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button  onClick={()=>handleDelete(product)}
                                            className='btn btn-ghost text-red-500 hover:bg-red-50 p-2 rounded-full'
                                        >
                                            <BiSolidTrash size={24}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
        </div>
    );
};

export default SelectedCard_2;