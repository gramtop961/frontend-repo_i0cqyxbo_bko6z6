import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[560px] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/8iKqfGQ6r4CkKp2T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* gradient overlay to make text legible; pointer-events-none so scene is interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
              Inspired by the sacred artistry of Indian temples
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              Handcrafted Temple Sculpture Collections
            </h1>
            <p className="mt-3 text-neutral-700">
              Vismayam Arts brings devotion and heritage to life through museum-grade sculptures crafted by master artisans. Each piece embodies centuries of tradition.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#collection" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800">
                Explore Collection
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-4 py-2 text-neutral-900 hover:bg-neutral-100">
                Custom Commission
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
