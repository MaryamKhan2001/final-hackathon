import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "../../../../types/products";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface ProductPageProps {
  params: { slug: string }; // params should directly have the slug as a string
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      title,
      description,
      productImage,  // Match the field name from the schema
      price,
      tags,
      dicountPercentage,
      isNew
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.productImage && (
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-xl">{product.description}</p>
          <p className="text-2xl font-sans">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
