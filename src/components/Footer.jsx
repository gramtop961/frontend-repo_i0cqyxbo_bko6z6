import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">Vismayam Arts</h3>
            <p className="mt-2 text-neutral-600">
              Sculptures that echo the grandeur of India’s temple heritage. Handcrafted with devotion and precision.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@vismayamarts.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" />
                <span>Kalakshetra Colony, Chennai, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Follow</h4>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-md border border-neutral-200 px-3 py-2 text-sm hover:bg-neutral-100"><Instagram className="h-4 w-4" /> Instagram</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-md border border-neutral-200 px-3 py-2 text-sm hover:bg-neutral-100"><Facebook className="h-4 w-4" /> Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-neutral-200 pt-6 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Vismayam Arts. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
