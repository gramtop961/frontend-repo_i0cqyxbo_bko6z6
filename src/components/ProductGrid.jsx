import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Nataraja Bronze Sculpture',
    price: 1299,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1603808033192-0e1f7401f2a7?q=80&w=1640&auto=format&fit=crop',
    tag: 'Limited Edition',
  },
  {
    id: 2,
    name: 'Carved Sandstone Ganesha',
    price: 890,
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1599669454699-c5da3de7f0fd?q=80&w=1640&auto=format&fit=crop',
    tag: 'Bestseller',
  },
  {
    id: 3,
    name: 'Chola Style Standing Vishnu',
    price: 1590,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1604311821591-b54d53b45113?q=80&w=1640&auto=format&fit=crop',
    tag: 'New Arrival',
  },
  {
    id: 4,
    name: 'Blackstone Shiva Lingam Set',
    price: 620,
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1626269369281-7947cce9e4eb?q=80&w=1640&auto=format&fit=crop',
    tag: 'Temple Grade',
  },
];

function Rating({ value }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < value ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}`}
        />
      ))}
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="collection" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Featured Sculptures</h2>
            <p className="mt-1 text-sm text-neutral-600">Curated works celebrating temple iconography and classical forms.</p>
          </div>
          <a href="#" className="text-sm font-medium text-neutral-900 hover:underline">View all</a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-xl border border-neutral-200 bg-white">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium shadow-sm">{p.tag}</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-neutral-900 line-clamp-2 min-h-[3rem]">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <Rating value={p.rating} />
                  <p className="font-semibold text-neutral-900">${p.price}</p>
                </div>
                <button className="mt-4 w-full rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
