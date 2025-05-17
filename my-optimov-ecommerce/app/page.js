import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="relative mb-12">
        <Image
          src="/images/go1.jpg"
          alt="Robot quadrupede"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative flex flex-col items-center text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Moving the Future</h1>
          <p className="mb-6 text-lg md:text-xl max-w-2xl">
            Scopri come la robotica di nuova generazione pu\u00F2 migliorare il tuo mondo.
          </p>
          <Link href="/products" className="bg-accentBlue text-white px-6 py-3 rounded-full hover:bg-accentBlue/90">
            Scopri la nostra gamma
          </Link>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 px-4 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">Innovazione</h3>
          <p>La pi\u00F9 avanzata tecnologia robotica.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Affidabilit\u00E0</h3>
          <p>Materiali di qualit\u00E0 e assistenza continua.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Versatilit\u00E0</h3>
          <p>Soluzioni su misura per ogni esigenza.</p>
        </div>
      </section>
    </>
  )
}
