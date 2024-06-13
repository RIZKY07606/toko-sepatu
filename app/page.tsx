import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome to Shoe Store</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProductCard
            name="Running Shoes"
            description="High-performance running shoes for athletes."
            price={99.99}
          />
          <ProductCard
            name="Casual Sneakers"
            description="Comfortable sneakers for everyday wear."
            price={49.99}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
