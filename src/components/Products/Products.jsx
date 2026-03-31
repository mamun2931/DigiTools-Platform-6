import React, { use } from 'react';
import PricingCard from './ProductsCard';
import SelectedCard from '../SelectedCard/SelectedCard';


const Products = ({ data, selectedProducts, setSelectedProducts, selected, setSelected }) => {
    const Data = use(data);

    return (
        <div className='max-w-7xl mx-auto px-5'>
            
                <div className='pt-20 space-y-5'>
                    <h1 className='text-4xl font-bold text-center '>Premium Digital Tools</h1>
                </div>
            

            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 py-10'>
                <button onClick={() => setSelected("available")} className={`${selected === "available" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} btn rounded-full`}>
                    Products
                </button>

                <button onClick={() => setSelected("cart")} className={`${selected === "cart" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} btn rounded-full`}>
                    Cart ({selectedProducts.length})
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