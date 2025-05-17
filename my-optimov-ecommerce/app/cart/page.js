'use client'
import { useContext } from 'react'
import { CartContext } from '../components/CartContext'
import Image from 'next/image'

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext)

  const total = cartItems.reduce((acc, item) => acc + item.price, 0)

  if (cartItems.length === 0) {
    return <div className="text-center mt-8">Il tuo carrello \u00E8 vuoto</div>
  }

  return (
    <div>
      <h2 className="text-3xl font-bold my-8 text-center">Carrello</h2>
      <div className="flex flex-col gap-4">
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between bg-white p-4 rounded shadow-sm">
            <div className="flex items-center gap-4">
              <Image src={item.image} alt={item.name} width={60} height={60} className="object-cover rounded" />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600">\u20AC{item.price}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:opacity-75"
            >
              Rimuovi
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-white rounded shadow-sm text-right">
        <p className="text-lg mb-2">Totale: <span className="font-semibold">\u20AC{total}</span></p>
        <button
          onClick={clearCart}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 mr-4"
        >
          Svuota Carrello
        </button>
        <button
          className="bg-accentBlue text-white py-2 px-4 rounded hover:bg-accentBlue/90"
        >
          Procedi al Checkout
        </button>
      </div>
    </div>
  )
}
