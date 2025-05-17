'use client'
import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from './CartContext'

export default function Header() {
  const { cartItems } = useContext(CartContext)

  return (
    <header className="flex items-center justify-between py-4 px-2 md:px-16 bg-white shadow-sm">
      <Link href="/">
        <span className="text-2xl font-bold">OPTIMOV</span>
      </Link>

      <nav className="flex gap-6">
        <Link href="/products">Prodotti</Link>
        <Link href="/cart" className="relative">
          Carrello
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-accentBlue text-white text-xs rounded-full px-2 py-1">
              {cartItems.length}
            </span>
          )}
        </Link>
      </nav>
    </header>
  )
}
