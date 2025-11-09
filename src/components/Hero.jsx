import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90 dark:from-black/70 dark:via-black/30 dark:to-black/90" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-gray-200">
          Designer • Creative Technologist • Frontend
        </p>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl dark:text-white">
          Crafting playful, modern interfaces
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-600 md:text-lg dark:text-gray-300">
          I blend design systems, animation, and 3D to build interactive experiences for forward-thinking brands.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#work"
            className="rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition hover:-translate-y-0.5 hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-100"
          >
            See selected work
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white/70 px-5 py-3 text-sm font-semibold text-gray-900 backdrop-blur-md ring-1 ring-inset ring-black/10 transition hover:-translate-y-0.5 hover:bg-white/90 dark:bg-white/10 dark:text-white dark:ring-white/10"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
