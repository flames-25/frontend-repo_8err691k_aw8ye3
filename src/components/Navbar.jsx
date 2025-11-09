import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/20 bg-white/60 px-4 py-3 shadow-lg shadow-blue-500/5 backdrop-blur-md dark:border-white/10 dark:bg-black/40">
          <a href="#top" className="font-semibold tracking-tight text-gray-900 dark:text-white">flames.design</a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-100"
            >
              Let’s collaborate
            </a>
          </nav>

          <button
            aria-label="Open Menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl px-6 md:hidden">
          <div className="rounded-2xl border border-white/20 bg-white/70 p-4 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-black/40">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-white/70 dark:text-gray-200 dark:hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-100"
              >
                Let’s collaborate
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
