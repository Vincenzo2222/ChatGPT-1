import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Moving the Future</h1>
      <p className="mb-6 text-lg md:text-xl max-w-2xl">
        Scopri come la robotica di nuova generazione pu\u00F2 migliorare il tuo mondo.
      </p>
      <Link href="/products" className="bg-accentBlue text-white px-6 py-3 rounded-full hover:bg-accentBlue/90">
        Scopri la nostra gamma
      </Link>
    </section>
  )
}
