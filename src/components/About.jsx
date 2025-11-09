export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">About</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            I’m a multidisciplinary designer focused on expressive, usable interfaces. My process blends research,
            visual systems, and prototyping to turn ideas into polished products. I love working at the intersection of
            design and code — bringing motion and 3D into everyday experiences.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-white/70 p-4 ring-1 ring-black/10 backdrop-blur-md dark:bg-white/5 dark:ring-white/10">
              <p className="font-semibold text-gray-900 dark:text-white">Expertise</p>
              <p className="mt-1 text-gray-600 dark:text-gray-300">UI/UX, Design Systems, Motion, WebGL</p>
            </div>
            <div className="rounded-xl bg-white/70 p-4 ring-1 ring-black/10 backdrop-blur-md dark:bg-white/5 dark:ring-white/10">
              <p className="font-semibold text-gray-900 dark:text-white">Tools</p>
              <p className="mt-1 text-gray-600 dark:text-gray-300">Figma, After Effects, Spline, React</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-64 w-full overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-blue-100 via-violet-100 to-pink-100 shadow-inner dark:border-white/10 dark:from-blue-500/10 dark:via-violet-500/10 dark:to-pink-500/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),_radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.25),transparent_40%),_radial-gradient(circle_at_40%_80%,rgba(236,72,153,0.25),transparent_40%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
