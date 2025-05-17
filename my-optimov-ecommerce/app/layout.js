import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CartProvider from './components/CartContext'

export const metadata = {
  title: 'OPTIMOV \u2013 Moving the Future',
  description: 'E-commerce minimal per la robotica',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="bg-secondary text-primary">
        <CartProvider>
          <Header />
          <main className="min-h-screen px-4 py-6 md:px-16">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
