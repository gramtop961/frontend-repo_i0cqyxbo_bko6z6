import { useState } from 'react';
import { ShoppingCart, Menu, Search } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <a href="#" className="flex items-center gap-2 font-semibold tracking-tight text-neutral-900">
              <span className="text-xl">Vismayam Arts</span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-neutral-700">
            <a href="#home" className="hover:text-neutral-900">Home</a>
            <a href="#collection" className="hover:text-neutral-900">Collections</a>
            <a href="#about" className="hover:text-neutral-900">About</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                className="h-10 w-56 rounded-md border border-neutral-200 bg-white pl-9 pr-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                placeholder="Search sculptures..."
                aria-label="Search"
              />
            </div>
            <button className="relative inline-flex items-center gap-2 rounded-md border border-neutral-200 px-3 py-2 text-sm hover:bg-neutral-100">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -right-2 -top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-xs text-white">0</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4">
            <nav className="grid gap-2 text-sm text-neutral-700">
              <a href="#home" className="rounded-md px-2 py-2 hover:bg-neutral-100">Home</a>
              <a href="#collection" className="rounded-md px-2 py-2 hover:bg-neutral-100">Collections</a>
              <a href="#about" className="rounded-md px-2 py-2 hover:bg-neutral-100">About</a>
              <a href="#contact" className="rounded-md px-2 py-2 hover:bg-neutral-100">Contact</a>
              <div className="relative mt-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  className="h-10 w-full rounded-md border border-neutral-200 bg-white pl-9 pr-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  placeholder="Search sculptures..."
                  aria-label="Search"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
