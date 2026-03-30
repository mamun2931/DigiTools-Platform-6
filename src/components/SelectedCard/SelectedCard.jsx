import React from 'react';
import {  User } from 'lucide-react';
import { BiSolidTrash } from 'react-icons/bi';
import { toast } from 'react-toastify';

const SelectedCard = ({ selectedProducts, setSelectedProducts }) => {

    const handleDelete = (product) => {
        const remaining = selectedProducts.filter(p => p.id !== product.id);
        setSelectedProducts(remaining);                
        toast.error(`${product.name} removed from cart`);
    };

    const handleCheckout = () => {
        setSelectedProducts([]);
        toast.success(`Checkout successful!`);
    };



    return (
        <div className='max-w-7xl mx-auto'>
            {
                selectedProducts.length === 0 ? (
                    <div className='text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200'>
                        <h1 className='text-3xl font-bold text-gray-400'>No products selected yet.</h1>
                    </div>
                ) : (

                <div className='space-y-6 bg-white p-5 rounded-2xl shadow-sm border border-gray-100'>

                    <h2 className='font-bold text-2xl'>Your Cart</h2>

                    <div className='flex flex-col gap-4'>

                        {selectedProducts.map(product => (

                            <div key={product.id} className='card bg-base-100 shadow-sm border border-gray-100 p-5       rounded-2xl'>
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


                    

                        ))}
                    </div>

                        <div className=''>
                            <div className='flex items-center justify-between mb-5'>
                                <p className='text-[#6273B2]'>Totals:</p>
                                <h3 className='text-lg font-bold'>${selectedProducts.reduce((total, product) => total + parseFloat(product.price), 0).toFixed(2)}</h3> 

                                
                            </div>
                            <button onClick={()=>handleCheckout()} className='btn w-full rounded-full text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>Proceed to Checkout</button>
                        </div>

                 </div>


                )
            }
        </div>
    );
};

export default SelectedCard;