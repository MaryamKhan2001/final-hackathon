"use client"
import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/products'
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions'
import Swal from 'sweetalert2'
import { Result } from 'postcss'
import { Icon } from 'lucide-react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { useRouter } from 'next/navigation'

const CartPage = () => {
    const [cartItems , setCartItems] = useState<Product[]>([])

    useEffect(() => {
      setCartItems(getCartItems())
    }, [])

    const handleRemove = (id: string) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this item!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!"
      }).then((result) => {
        if(result.isConfirmed) {
          removeFromCart(id)
          setCartItems(getCartItems())
          Swal.fire("Removed!", "Item has been removed.", "success")
        }
      })
    }

    const handleQuantityChange = (id: string, quantity: number) => {
       updateCartQuantity(id, quantity);
       setCartItems(getCartItems())
    }

    const handleIncrement = (id: string) => {
      const product = cartItems.find((item) => item._id === id)
      if (product) handleQuantityChange(id, product.inventory + 1)
    }

    const handleDecrement = (id: string) => {
      const product = cartItems.find((item) => item._id === id)
      if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1)
    }

    const calculatedTotal = () => {
      return cartItems.reduce((total, item) => total + item.price * item.inventory, 0)
    }
    const router = useRouter();
    const handleProceed = () => {
      Swal.fire({
        title: "Proceed to checkout?",
        text: "Please review your cart before checkout.",
        showCancelButton: true,
        icon: "question",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, proceed!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Success", "Your order has been successfully processed.", "success")
          router.push("/checkout")
          setCartItems([])
        }
      })
    }

    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center mb-6">Your Shopping Cart</h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-md shadow-sm">
                  <div className="flex items-center space-x-4">
                    {item.productImage &&(
                      <Image
                      src={urlFor(item.productImage).url()}
                      className="w-16 h-16 object-cover rounded-md"
                      alt="image"
                      width={500}
                      height={500}
                      />
                    )}
                     
                  
                    <div>
                      <p className="text-lg font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-500">${item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => handleDecrement(item._id)} 
                      className="px-3 py-1 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none">
                      -
                    </button>
                    <span className="text-lg font-semibold">{item.inventory}</span>
                    <button 
                      onClick={() => handleIncrement(item._id)} 
                      className="px-3 py-1 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none">
                      +
                    </button>

                    <button 
                      onClick={() => handleRemove(item._id)} 
                      className="ml-4 text-red-500 hover:text-red-700">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-6 bg-gray-100 p-4 rounded-md">
          <p className="text-xl font-semibold">Total: ${calculatedTotal().toFixed(2)}</p>
          <button 
            onClick={handleProceed} 
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
            Proceed to Checkout
          </button>
        </div>
      </div>
    )
}

export default CartPage
