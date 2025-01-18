"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { client } from "@/sanity/lib/client"



interface Product {
  _id: string
  name: string
  price: number
  description: string
  imageUrl: string
}

const Products = () => {
  const [data, setData] = useState<Product[] | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Sanity Query
    const query = `*[_type == "products"]{
      _id,
      name,
      price,
      description,
      tags,
      "imageUrl": image.asset->url
    }`

    // Fetch data from Sanity
    client.fetch(query).then((res) => {
      setData(res)
    }).catch((err) => {
      console.error("Error fetching data from Sanity:", err)
    })
  }, [])

  const viewSingleProduct = (productId: string) => {
    router.push(`/products/${productId}`); // Navigate to the single product
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center mb-8">Our Product</h1>
        {!data ? (
          <div className="text-center">
            <p className="text-3xl">Loading Items</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((product) => (
              <div
                key={product._id}
                className="bg-white p-4 rounded-md border border-gray-950 transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-indigo-50 duration-300 flex flex-col justify-between"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-contain rounded-lg h-40 w-40 transition-transform duration-500 transform hover:scale-110"
                  />
                </div>
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
                <p className="text-gray-700 line-clamp-1">
                  {product.description.substring(0, 60)}...
                </p>

                <div className="mt-auto flex justify-center">
                  <button
                    onClick={() => viewSingleProduct(product._id)}
                    className="bg-primary text-white font-semibold py-2 px-4 rounded-md"
                  >
                    View Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
