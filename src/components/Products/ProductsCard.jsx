import React from "react";
import Card from "./Card";

const PricingCard = ({ Data, selectedProducts, setSelectedProducts }) => {


  return (
    <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {
                      Data.map(product => (
                      <Card key={product.id} product={product}  selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}/>
                      ))
                  }
            </div>
    </div>
  );
};

export default PricingCard;
