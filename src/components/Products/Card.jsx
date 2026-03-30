import React, { useState } from "react";
import { toast } from "react-toastify";

const Card = ({product, selectedProducts, setSelectedProducts}) => {
      const { name, price, period, features, tag, icon } = product;
      const [buySelected, setBuySelected] =useState(false);

        const handleBuyClick = () => {
            const newBuyCard = [...selectedProducts, product];
            setSelectedProducts(newBuyCard);
            toast.success(`${product.name} added to cart`);
                setBuySelected(true);
        };

const tagColors = {
   "Best Seller": "bg-[#BB4D0030] text-[#BB4D00]",
    "popular": "bg-[#4F39F630] text-[#4F39F6]",
    "New": "bg-[#0A883E30] text-[#0A883E]"
  };
  
  const currentTagType = tagColors[tag] || "primary";
    return (
        <div>
                <div className="card bg-base-100 shadow-sm">
      <div className="card-body space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-end rounded-lg">
            <img src={icon} alt={`${name} icon`} className="h-6 w-6" />
          </div>

          <div>
      {tag && (
        <p className={`badge ${currentTagType} font-bold`}>
          {tag}
        </p>
      )}
    </div>

          
        </div>

        <div>
          <h2 className="text-3xl font-bold">{name}</h2>
          <span className="text-xl">
            ${price}/{period}
          </span>
        </div>

        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {features.map((feature, index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button onClick={handleBuyClick} disabled={buySelected} 
          className={`btn w-full rounded-full text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] ${buySelected ? "opacity-50 cursor-not-allowed" : "hover:opacity-90 transition duration-300"}`}>
            {buySelected ? "Added to Cart" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Card;