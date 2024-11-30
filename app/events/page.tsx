import Header from '@/components/header'
import Footer from '@/components/footer'
import EventList from '@/components/event-list'

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-yellow-400">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Events</h1>
        <EventList />
      </main>
      <Footer />
    </div>
  )
}

