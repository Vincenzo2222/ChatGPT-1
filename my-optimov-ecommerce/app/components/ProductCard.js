'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="object-cover mb-4 cursor-pointer"
        />
      </Link>
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-700 mb-2">\u20AC{product.price}</p>
      <Link
        href={`/products/${product.id}`}
        className="mt-auto bg-accent px-4 py-2 rounded text-white hover:bg-accent/80"
      >
        Dettagli
      </Link>
    </div>
  )
}
