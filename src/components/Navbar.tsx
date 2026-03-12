import { Cat, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Cat className="w-8 h-8 text-brand-olive" />
            <span className="text-2xl font-serif font-bold tracking-tight text-brand-olive">CatAdopt</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-brand-olive transition-colors">About</a>
            <a href="#cats" className="text-sm font-medium hover:text-brand-olive transition-colors">Find a Cat</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-brand-olive transition-colors">How it Works</a>
            <button className="bg-brand-olive text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-brand-olive">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-warm-white border-b border-black/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#about" onClick={() => setIsOpen(false)} className="block text-lg font-serif">About</a>
              <a href="#cats" onClick={() => setIsOpen(false)} className="block text-lg font-serif">Find a Cat</a>
              <a href="#how-it-works" onClick={() => setIsOpen(false)} className="block text-lg font-serif">How it Works</a>
              <button className="w-full bg-brand-olive text-white px-6 py-3 rounded-full text-lg font-serif">
                Download App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
