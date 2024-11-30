import Header from '@/components/header'
import Footer from '@/components/footer'
import TeamList from '@/components/team-list'

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-yellow-400">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
        <TeamList />
      </main>
      <Footer />
    </div>
  )
}

