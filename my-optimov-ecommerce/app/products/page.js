import ProductCard from '../components/ProductCard'
import productsData from '../productsData'

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
