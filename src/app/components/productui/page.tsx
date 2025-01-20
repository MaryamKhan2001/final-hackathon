"use client";
import { useEffect, useState } from "react";
import { Product } from "../../../../types/products";
import { allProducts } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const PRODUCTUI = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            const fetchedProducts: Product[] = await client.fetch(allProducts);
            console.log(fetchedProducts);  // Log to check if data is correct
            setProducts(fetchedProducts);
        }
        fetchProducts();
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 text-center">OUR LATEST PRODUCTS</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
                        {product.productImage && product.productImage.asset && (
                            <Image
                                src={urlFor(product.productImage).url()}
                                alt={product.title || "Product Image"}
                                width={200}
                                height={200}
                                className="w-full h-48 object-cover rounded-md"
                            />
                        )}
                        <h2 className="text-lg font-semibold mt-4">
                            {product.title || "Product Name Not Available"}
                        </h2>
                        <p className="text-gray-500 mt-2">
                            {product.price ? `$${product.price}` : "Price Not Available"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PRODUCTUI;
