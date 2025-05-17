'use client'
import { useContext } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { CartContext } from '../../components/CartContext'

const productsData = [
  { id: 1, name: 'Unitree Go1', price: 2700, image: '/images/go1.jpg', description: 'Robot quadrupede agile e leggero...' },
  { id: 2, name: 'Unitree A1', price: 12000, image: '/images/a1.jpg', description: 'Robot quadrupede ad alte prestazioni...' },
]

export default function ProductDetailPage() {
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)

  const product = productsData.find((p) => p.id === parseInt(id))

  if (!product) {
    return <div>Prodotto non trovato.</div>
  }

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className="flex flex-col md:flex-row items-center mt-8">
      <div className="mb-6 md:mb-0 md:mr-6">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col max-w-lg">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-600 mb-4">\u20AC{product.price}</p>
        <p className="mb-6">{product.description}</p>

        <button
          onClick={handleAddToCart}
          className="bg-accentBlue text-white py-2 px-6 rounded hover:bg-accentBlue/90"
        >
          Aggiungi al Carrello
        </button>
      </div>
    </div>
  )
}
