import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CatGrid from './components/CatGrid';
import HowItWorks from './components/HowItWorks';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-olive selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <CatGrid />
        <HowItWorks />
        <SuccessStories />
      </main>
      <Footer />
    </div>
  );
}


