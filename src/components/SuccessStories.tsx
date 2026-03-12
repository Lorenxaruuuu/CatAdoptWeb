import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const STORIES = [
  {
    text: "Finding Whiskers through CatAdopt was the best thing that happened to us this year. The process was so smooth!",
    author: "Sarah & Whiskers",
    image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&q=80&w=200"
  },
  {
    text: "I was nervous about adopting, but the chat feature allowed me to ask all my questions before meeting Jasper.",
    author: "Mark & Jasper",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&q=80&w=200"
  }
];

export default function SuccessStories() {
  return (
    <section className="py-24 bg-brand-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif mb-4">Happy tails</h2>
          <p className="text-gray-500 italic">Stories from our community</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {STORIES.map((story, index) => (
            <motion.div
              key={story.author}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-10 bg-brand-cream rounded-[40px] relative"
            >
              <Quote className="w-12 h-12 text-brand-olive/20 absolute top-8 left-8" />
              <p className="text-xl font-serif mb-8 relative z-10 leading-relaxed">
                "{story.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={story.image}
                  alt={story.author}
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="font-medium text-brand-olive">{story.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
