import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Stack from './components/Stack';
import KeyMetrics from './components/KeyMetrics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LogoAnimation from './components/LogoAnimation';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <Stack />
      <KeyMetrics />
      <Contact />
      <Footer />
    </main>
  );
}
