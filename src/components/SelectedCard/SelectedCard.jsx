import React from 'react';
import {  User } from 'lucide-react';
import { BiSolidTrash } from 'react-icons/bi';
import { toast } from 'react-toastify';
import SelectedCard_2 from './SelectedCard_2';

const SelectedCard = ({ selectedProducts, setSelectedProducts }) => {

    const handleDelete = (product) => {
        const cardRemaining = selectedProducts.filter(p => p.id !== product.id);
        setSelectedProducts(cardRemaining);                
        toast.error(`${product.name} removed from cart`);
    };

    const handleCheckout = () => {
        setSelectedProducts([]);
        toast.success(`Checkout successful!`);
    };



    return (
        <div className='max-w-7xl mx-auto mb-20'>
            {
                selectedProducts.length === 0 ? (
                    <div className='text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200'>
                        <h1 className='text-3xl font-bold text-gray-400'>No products selected</h1>
                    </div>
                ) : (

                <div className='space-y-6 bg-white p-5 rounded-2xl shadow-sm border border-gray-100'>

                    <h2 className='font-bold text-2xl'>Your Cart</h2>

                    <div className='flex flex-col gap-4'>

                        {selectedProducts.map(product => (

                            <SelectedCard_2 key={product.id} product={product} handleDelete={handleDelete} />

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