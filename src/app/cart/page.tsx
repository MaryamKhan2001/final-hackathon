"use client"
import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/products'
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions'
import Swal from 'sweetalert2'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { useRouter } from 'next/navigation'

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([])

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
      if (result.isConfirmed) {
        removeFromCart(id)
        setCartItems(getCartItems())
        Swal.fire("Removed!", "Item has been removed.", "success")
      }
    })
  }

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity)
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

  const router = useRouter()
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
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">Your Shopping Cart</h1>

      <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4 md:space-y-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-wrap md:flex-nowrap items-center gap-4 p-4 bg-gray-50 rounded-md shadow-sm"
              >
                {/* Image Section */}
                <div className="flex-shrink-0">
                  {item.productImage && (
                    <Image
                      src={urlFor(item.productImage).url()}
                      className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-md"
                      alt="product image"
                      width={500}
                      height={500}
                    />
                  )}
                </div>

                {/* Product Details Section */}
                <div className="flex-1">
                  <p className="text-sm md:text-lg font-semibold">{item.title}</p>
                  <p className="text-xs md:text-sm text-gray-500">${item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none"
                  >
                    -
                  </button>
                  <span className="text-sm md:text-lg font-semibold">{item.inventory}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(item._id)}
                  className="text-red-500 hover:text-red-700 text-sm md:text-base"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-6 bg-gray-100 p-4 rounded-md">
        <p className="text-lg md:text-xl font-semibold mb-4 md:mb-0">
          Total: ${calculatedTotal().toFixed(2)}
        </p>
        <button
          onClick={handleProceed}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 text-sm md:text-base"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default CartPage
