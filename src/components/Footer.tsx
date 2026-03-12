import { Cat, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-warm-white border-t border-black/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Cat className="w-8 h-8 text-brand-olive" />
              <span className="text-2xl font-serif font-bold tracking-tight text-brand-olive">CatAdopt</span>
            </div>
            <p className="text-lg text-gray-500 max-w-sm leading-relaxed italic">
              "Every cat deserves a loving home, and every home deserves a loving cat."
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm hover:text-brand-olive transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-brand-olive transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-sm hover:text-brand-olive transition-colors">Shelter Partners</a></li>
              <li><a href="#" className="text-sm hover:text-brand-olive transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-brand-olive hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-brand-olive hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-brand-olive hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400 font-medium tracking-wider uppercase">
          <p>© 2026 CatAdopt. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-olive transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-olive transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
