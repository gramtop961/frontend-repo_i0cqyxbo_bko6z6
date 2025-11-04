import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function About() {
  return (
    <section id="about" className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-xl border border-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1586861634116-008604b71e63?q=80&w=1640&auto=format&fit=crop"
              alt="Artisan carving a sculpture"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Rooted in Devotion, Crafted with Mastery</h2>
            <p className="mt-3 text-neutral-700">
              Vismayam Arts is dedicated to the timeless aesthetics of Indian temple sculpture. Our artisans follow
              classical canons to create works that honor sacred narratives while fitting modern spaces—homes, galleries,
              and institutions. Every piece is finished by hand and inspected for museum-grade quality.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-neutral-800 sm:grid-cols-2">
              <li className="rounded-lg border border-neutral-200 bg-white px-4 py-3">• Traditional bronze, stone, and wood</li>
              <li className="rounded-lg border border-neutral-200 bg-white px-4 py-3">• Bespoke commissions for homes & temples</li>
              <li className="rounded-lg border border-neutral-200 bg-white px-4 py-3">• Ethical sourcing and mindful craftsmanship</li>
              <li className="rounded-lg border border-neutral-200 bg-white px-4 py-3">• Worldwide insured shipping</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <About />
      </main>
      <Footer />
    </div>
  );
}
