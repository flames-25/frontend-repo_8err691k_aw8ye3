import { Mail, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">Let’s build something</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">Available for freelance and collaborations. Drop a line and I’ll get back within 24 hours.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <a href="mailto:hello@yourname.design" className="group rounded-2xl bg-white/70 p-6 ring-1 ring-black/10 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-lg dark:bg-white/5 dark:ring-white/10">
          <Mail className="h-6 w-6 text-gray-900 group-hover:scale-110 transition dark:text-white" />
          <p className="mt-3 font-semibold text-gray-900 dark:text-white">Email</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">hello@yourname.design</p>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="group rounded-2xl bg-white/70 p-6 ring-1 ring-black/10 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-lg dark:bg-white/5 dark:ring-white/10">
          <Linkedin className="h-6 w-6 text-gray-900 group-hover:scale-110 transition dark:text-white" />
          <p className="mt-3 font-semibold text-gray-900 dark:text-white">LinkedIn</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">Connect with me</p>
        </a>
        <a href="#contact" className="group rounded-2xl bg-gray-900 p-6 text-white ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg dark:bg-white dark:text-black dark:ring-white/10">
          <Send className="h-6 w-6" />
          <p className="mt-3 font-semibold">Start a project</p>
          <p className="text-sm opacity-80">Share your brief and timeline</p>
        </a>
      </div>
    </section>
  );
}
