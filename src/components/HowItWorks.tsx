import { Search, MessageSquare, Home, ClipboardCheck } from 'lucide-react';
import { motion } from 'motion/react';

const STEPS = [
  {
    icon: Search,
    title: 'Browse',
    description: 'Find your perfect match using our advanced filters for age, breed, and temperament.'
  },
  {
    icon: MessageSquare,
    title: 'Connect',
    description: 'Chat directly with shelters and foster parents to learn more about your chosen cat.'
  },
  {
    icon: ClipboardCheck,
    title: 'Apply',
    description: 'Fill out our simple digital adoption form right from the mobile app.'
  },
  {
    icon: Home,
    title: 'Adopt',
    description: 'Complete the process and welcome your new family member to their forever home.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-serif mb-16">How to adopt</h2>
        
        <div className="grid md:grid-cols-4 gap-12">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-brand-olive/10 flex items-center justify-center mb-6 text-brand-olive">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif mb-4">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-brand-olive rounded-[40px] text-white overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-4xl font-serif mb-6">Ready to start?</h3>
            <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto">
              Download the CatAdopt app today and join thousands of happy pet parents.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-brand-olive px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-opacity">
                App Store
              </button>
              <button className="bg-white text-brand-olive px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-opacity">
                Play Store
              </button>
            </div>
          </div>
          {/* Decorative background pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
