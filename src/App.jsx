import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white dark:from-black dark:to-black">
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-10 text-center text-sm text-gray-600 dark:border-white/10 dark:text-gray-400">
        © {new Date().getFullYear()} Your Name — Built with love, motion, and code.
      </footer>
    </div>
  );
}

export default App;
