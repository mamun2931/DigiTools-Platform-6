import React, { use, useState } from 'react';
import PricingCard from './ProductsCard';
import SelectedCard from '../SelectedCard/SelectedCard';

const Products = ({ data, selectedProducts, setSelectedProducts }) => {
    const Data = use(data);
      const [selected, setSelected ] = useState("available");
    return (
        <div className='max-w-7xl mx-auto px-5'>
            <div className='pt-20 space-y-5'>
                <h1 className='text-4xl font-bold text-center '>Premium Digital Tools</h1>
                <p className='text-center text-lg text-[#627382] max-w-2xl mx-auto'>
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>
            </div>

            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 py-10'>
                <button onClick={()=> setSelected("available")} className={` ${selected === "available" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} btn font-bold py-2 px-4 rounded-full hover:opacity-90 transition duration-300 text-[#9514FA]`}>
                 Products
                </button>

                <button onClick={()=> setSelected("selected")} className={` ${selected === "selected" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} btn font-bold py-2 px-4 rounded-full hover:opacity-90 transition duration-300 text-[#9514FA]`}>
                    Card({selectedProducts.length})
                </button>
            </div>
            
        <div>
            { selected === "available" ?
               <PricingCard Data={Data} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />
                :
            <SelectedCard selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />
            }
            </div>
        </div>
    );
};

export default Products;