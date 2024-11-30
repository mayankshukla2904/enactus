import Header from '@/components/header'
import Footer from '@/components/footer'
import ProductList from '@/components/product-list'

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black text-yellow-400">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
        <ProductList />
      </main>
      <Footer />
    </div>
  )
}

