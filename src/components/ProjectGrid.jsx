import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Neon Dashboard',
    tags: ['UI/UX', 'Motion', 'WebGL'],
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
    live: '#',
    code: '#',
  },
  {
    title: 'Brand System',
    tags: ['Identity', 'Design System'],
    image:
      'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1600&auto=format&fit=crop',
    live: '#',
    code: '#',
  },
  {
    title: '3D Portfolio',
    tags: ['Three.js', 'Spline', 'Frontend'],
    image:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop',
    live: '#',
    code: '#',
  },
];

function ProjectCard({ title, tags, image, live, code }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/70 shadow-lg backdrop-blur-md transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex items-start justify-between p-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-white/10 dark:text-gray-300">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href={live} aria-label="Live" className="rounded-full bg-white/80 p-2 ring-1 ring-black/10 transition hover:bg-white dark:bg-white/10 dark:ring-white/10">
            <ExternalLink className="h-4 w-4" />
          </a>
          <a href={code} aria-label="Code" className="rounded-full bg-white/80 p-2 ring-1 ring-black/10 transition hover:bg-white dark:bg-white/10 dark:ring-white/10">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectGrid() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">Selected Work</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">A mix of web apps, motion experiments, and identity systems crafted with intention.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
