'use client'
import React, { useEffect, useState } from 'react';
import { Product } from '../../../types/products';
import { getCartItems } from '../actions/actions';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { CgChevronRight } from 'react-icons/cg';
import Swal from 'sweetalert2';
import { client } from '@/sanity/lib/client';

const Checkout = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [formValues, setFormValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        zipcode: "",
        city: "",
    });
    const [formErrors, setFormErrors] = useState({
        firstname: false,
        lastname: false,
        email: false,
        phone: false,
        address: false,
        zipcode: false,
        city: false,
    });

    useEffect(() => {
        setCartItems(getCartItems());
        const AppliedDiscount = localStorage.getItem("AppliedDiscount");
        if (AppliedDiscount) {
            setDiscount(Number(AppliedDiscount));
        }
    }, []);

    const SubTotal = cartItems.reduce(
        (total, item) => total + item.price * item.inventory, 0
    );

    const HandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
        });
    };

    const ValidateForm = () => {
        const Errors = {
            firstname: !formValues.firstname,
            lastname: !formValues.lastname,
            email: !formValues.email,
            phone: !formValues.phone,
            address: !formValues.address,
            zipcode: !formValues.zipcode,
            city: !formValues.city,
        };
        setFormErrors(Errors);
        return Object.values(Errors).every((Error) => !Error);
    };

    const HandlePlaceOrder = async () => {
        Swal.fire({
            title: "Processing Your Order...",
            text: "Please Wait A Moment...",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Proceed"
        }).then((result) => {
            if (result.isConfirmed) {
                if (ValidateForm()) {
                    localStorage.removeItem("Applied Discount!");
                    Swal.fire(
                        "Success!",
                        "Your Order Has Been Successfully Processed!",
                        "success"
                    );
                } else {
                    Swal.fire(
                        "Error!",
                        "Please Fill In All The Fields Before Proceeding!",
                        "error"
                    );
                }
            }
        });

        const orderData = {
            _type: 'order',
            firstName: formValues.firstname,
            lastName: formValues.lastname,
            address: formValues.address,
            city: formValues.city,
            zipCode: formValues.zipcode,
            phone: formValues.phone,
            email: formValues.email,
            cartItems: cartItems.map(item => ({
                _type: 'reference',
                _ref: item._id
            })),
            total: SubTotal,
            discount: discount,
            orderDate: new Date().toISOString()
        };

        try {
            await client.create(orderData);
            localStorage.removeItem("Applied Discount!");
        } catch (error) {
            console.error("Error In Creating Order", error);
        }
    };

    return (
        <div className='min-h-screen bg-gray-50'>
            <div className='mt-6'>
                <div className='max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8'>
                    <nav className='flex items-center gap-2 py-4'>
                        <Link href={"/cart"} className='text-gray-600 hover:text-black transition text-sm'>
                            Cart
                        </Link>
                        <CgChevronRight />
                        <span className='text-gray-800 font-medium'>Checkout</span>
                    </nav>
                </div>
            </div>

            <div className='max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {/* Order Summary */}
                    <div className='bg-white border rounded-lg p-6 space-y-6 shadow-md'>
                        <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item._id} className='flex items-center gap-4 py-3 border-b'>
                                    <div className='w-16 h-16 rounded overflow-hidden'>
                                        {item.productImage && (
                                            <Image
                                                src={urlFor(item.productImage).url()}
                                                alt='Image'
                                                width={64}
                                                height={64}
                                                className='object-cover w-full h-full'
                                            />
                                        )}
                                    </div>
                                    <div className='flex-1'>
                                        <h3 className='text-sm font-medium'>{item.title}</h3>
                                        <p className='text-xs text-gray-500'>Quantity: {item.inventory}</p>
                                    </div>
                                    <p className='text-sm font-medium'>${item.price * item.inventory}</p>
                                </div>
                            ))
                        ) : (
                            <p className='text-sm font-medium text-gray-500'>No Cart Items</p>
                        )}
                        <div className='text-right p-4'>
                            <p className='text-sm'>SubTotal: <span className='font-medium'>${SubTotal}</span></p>
                            <p className='text-sm'>Discount: <span className='font-medium'>${discount}</span></p>
                            <p className='text-lg font-semibold'>Total: <span className='font-semibold text-gray-800'>${(SubTotal - discount).toFixed(2)}</span></p>
                        </div>
                    </div>

                    {/* Billing Info */}
                    <div className='bg-white border rounded-lg p-6 shadow-md'>
                        <h2 className='text-xl font-semibold mb-4'>Billing Information</h2>
                        <form className='space-y-4'>
                            {['firstname', 'lastname', 'email', 'phone', 'address', 'zipcode', 'city'].map((field) => (
                                <div key={field}>
                                    <label htmlFor={field} className='block text-sm font-medium text-gray-700'>
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                    <input
                                        type="text"
                                        id={field}
                                        placeholder={`Enter Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                        value={formValues[field as keyof typeof formValues]}
                                        onChange={HandleInputChange}
                                        className='mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    />
                                    {formErrors[field as keyof typeof formErrors] && (
                                        <p className='text-sm text-red-500 mt-1'>{`${field.charAt(0).toUpperCase() + field.slice(1)} is required`}</p>
                                    )}
                                </div>
                            ))}
                            <button
                                type='button'
                                className='w-full h-12 bg-blue-500 hover:bg-blue-700 text-white rounded-md font-medium'
                                onClick={HandlePlaceOrder}
                            >
                                Place Order
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
