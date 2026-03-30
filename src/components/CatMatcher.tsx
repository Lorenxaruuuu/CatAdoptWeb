import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, RefreshCw, Cat } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export default function CatMatcher() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleMatch = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Based on this personality description: "${input}", suggest the perfect cat breed for this person. Provide a 2-sentence explanation of why it's a good match. Format the response as: "Breed Name: [Explanation]"`,
        config: {
          systemInstruction: "You are an expert cat behaviorist and adoption counselor.",
        },
      });
      setResult(response.text || "I couldn't find a match right now. Try describing your lifestyle more!");
    } catch (error) {
      console.error("AI Match Error:", error);
      setResult("Our AI counselor is taking a nap. Please try again in a moment!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-olive/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-olive/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-olive/10 rounded-full text-brand-olive text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3 h-3" />
            AI-Powered Matching
          </div>
          <h2 className="text-5xl font-serif mb-6">Find your feline soulmate</h2>
          <p className="text-gray-600 italic max-w-xl mx-auto">
            Describe your lifestyle, personality, or home environment, and our AI counselor will suggest the perfect breed for you.
          </p>
        </div>

        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-black/5">
          {!result ? (
            <div className="space-y-6">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g., I live in a quiet apartment, work from home, and love calm evenings..."
                className="w-full h-32 p-6 rounded-3xl bg-brand-warm-white border-none focus:ring-2 focus:ring-brand-olive/20 resize-none text-lg placeholder:text-gray-400"
              />
              <button
                onClick={handleMatch}
                disabled={loading || !input.trim()}
                className="w-full py-5 bg-brand-olive text-white rounded-full font-bold flex items-center justify-center gap-3 hover:bg-brand-olive/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Find My Match <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-brand-olive/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Cat className="w-10 h-10 text-brand-olive" />
                </div>
                <p className="text-2xl font-serif leading-relaxed mb-10 text-gray-800">
                  {result}
                </p>
                <button
                  onClick={() => {
                    setResult(null);
                    setInput('');
                  }}
                  className="text-brand-olive font-bold uppercase tracking-widest text-xs border-b border-brand-olive/30 pb-1 hover:border-brand-olive transition-all"
                >
                  Try another description
                </button>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
