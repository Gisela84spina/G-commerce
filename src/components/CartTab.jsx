import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    return (
        <div className="fixed border-gray-900 border top-32 right-12 bg-gray-700 shadow-2xl w-3/12 grid grid-rows-[60px_1fr_60px]">
            <h2 className='p-5 text-2xl'>Shopping Cart</h2>
            <div className='p-2'>
                {carts.map((item, key) => 
                    <CartItem key={key} data={item}/>
                )}
            </div>
            <div className='grid'>
            <a href="/cart" className='my-4 group relative w-full flex justify-center py-3 px-4 border-transparent text-sm font-medium text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>CHECKOUT</a>
            </div>
        </div>
    )
}

export default CartTab