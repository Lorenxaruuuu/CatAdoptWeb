import { motion } from 'motion/react';
import { MapPin, Info } from 'lucide-react';

const CATS = [
  {
    id: 1,
    name: 'Luna',
    breed: 'British Shorthair',
    age: '2 years',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=600',
    tag: 'Friendly'
  },
  {
    id: 2,
    name: 'Oliver',
    breed: 'Maine Coon',
    age: '4 years',
    location: 'Brooklyn, NY',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=600',
    tag: 'Calm'
  },
  {
    id: 3,
    name: 'Milo',
    breed: 'Siamese',
    age: '1 year',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80&w=600',
    tag: 'Playful'
  },
  {
    id: 4,
    name: 'Bella',
    breed: 'Ragdoll',
    age: '3 years',
    location: 'Seattle, WA',
    image: 'https://images.unsplash.com/photo-1516750484197-6b28d10c91ea?auto=format&fit=crop&q=80&w=600',
    tag: 'Sweet'
  }
];

export default function CatGrid() {
  return (
    <section id="cats" className="py-24 bg-brand-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-serif mb-6">Meet our residents</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every cat has a story and a unique personality. Browse through our available friends and find the one that speaks to your heart.
            </p>
          </div>
          <button className="text-brand-olive font-medium flex items-center gap-2 hover:underline underline-offset-8">
            View all 150+ cats <Info className="w-4 h-4" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATS.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-brand-olive text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {cat.tag}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-1">{cat.name}</h3>
              <p className="text-sm text-gray-500 mb-3 italic">{cat.breed} • {cat.age}</p>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <MapPin className="w-3 h-3" />
                <span>{cat.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
