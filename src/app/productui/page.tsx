"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { allProducts } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Product } from "../../../types/products";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";

const PRODUCTUI = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top", // This sets the notification to appear in the top center
      toast: true,
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1500,
      icon: "success",
      customClass: {
        popup: "swal-popup-mobile", // Optional: Add your custom styling here
      },
    });
    addToCart(product);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 shadow-md text-center">
        OUR LATEST PRODUCTS
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 flex flex-col items-center"
          >
            {/* Product Link */}
            <Link href={`/product/${product.slug.current}`} className="block w-full">
              {product.productImage && product.productImage.asset && (
                <Image
                  src={urlFor(product.productImage).url()}
                  alt={product.title || "Product Image"}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
              )}
              <h2 className="text-base md:text-lg font-semibold mt-4 text-center">
                {product.title || "Product Name Not Available"}
              </h2>
              <p className="text-gray-500 mt-2 text-center">
                {product.price ? `$${product.price}` : "Price Not Available"}
              </p>
            </Link>

            {/* Add to Cart Button */}
            <button
              className="bg-gradient-to-r from-lime-600 to-lime-950 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg 
              hover:scale-105 transition-transform duration-200 ease-in-out w-full mt-4 text-sm md:text-base"
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PRODUCTUI;
