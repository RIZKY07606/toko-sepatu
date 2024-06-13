import React from "react";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
}) => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <img
        src="/path/to/product/image.jpg"
        alt={name}
        className="w-full rounded-md mb-4"
      />
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-lg font-semibold text-green-500">{price}</p>
        <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
