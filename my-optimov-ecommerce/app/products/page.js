import ProductCard from '../components/ProductCard'

const productsData = [
  {
    id: 1,
    name: 'Unitree Go1',
    price: 2700,
    image: '/images/go1.jpg',
    description: 'Robot quadrupede agile e leggero, ideale per ispezioni e ricerca.'
  },
  {
    id: 2,
    name: 'Unitree A1',
    price: 12000,
    image: '/images/a1.jpg',
    description: 'Robot quadrupede ad alte prestazioni per applicazioni professionali.'
  },
]

export default function ProductsPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold my-8 text-center">I Nostri Robot</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
