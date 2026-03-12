import { motion } from 'motion/react';
import { ArrowRight, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-olive/10 text-brand-olive text-xs font-semibold uppercase tracking-wider mb-6">
              <Heart className="w-3 h-3 fill-current" />
              <span>Over 500 cats found homes</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-serif leading-[0.9] mb-8">
              Find your <br />
              <span className="italic text-brand-olive">purr-fect</span> <br />
              companion.
            </h1>
            <p className="text-lg text-gray-600 max-w-md mb-10 leading-relaxed">
              CatAdopt connects loving families with adorable cats waiting for their forever homes. Start your journey to pet parenthood today.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-olive text-white px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2 hover:gap-4 transition-all group">
                Browse Cats <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-brand-olive text-brand-olive px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-olive/5 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-[100px] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1000"
                alt="Cute cat"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-olive rounded-full -z-10 opacity-20 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-brand-olive rounded-full -z-10 opacity-10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
