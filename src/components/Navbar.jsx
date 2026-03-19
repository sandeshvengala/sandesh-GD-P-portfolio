import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { resumeDownloadUrl } from '../data/siteContent';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('portfolio-theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/80 backdrop-blur-lg transition dark:border-paper/10 dark:bg-ink/80">
      <nav className="mx-auto flex w-[min(1120px,92vw)] items-center justify-between py-4">
        <Link to="/" className="font-display text-3xl tracking-tight">
          Sandesh Vengala
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-[0.15em] transition ${
                  isActive ? 'text-accent' : 'hover:text-accent'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={resumeDownloadUrl}
            download
            className="hidden rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest transition hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-paper/20 md:inline-block"
          >
            Resume
          </a>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-full border border-ink/20 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition hover:border-accent hover:text-accent dark:border-paper/20 md:hidden"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? 'Close' : 'Menu'}
          </button>

          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="rounded-full border border-ink/20 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition hover:border-accent hover:text-accent dark:border-paper/20"
            type="button"
            aria-label="Toggle dark mode"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-ink/50" onClick={closeMobileMenu} aria-hidden="true" />
          <div className="fixed right-0 top-[73px] z-50 flex h-[calc(100vh-73px)] w-[min(82vw,320px)] flex-col border-l border-ink/10 bg-paper px-6 py-8 dark:border-paper/10 dark:bg-ink">
            <div className="mb-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `text-base font-semibold uppercase tracking-[0.15em] transition ${
                      isActive ? 'text-accent' : 'hover:text-accent'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <a
              href={resumeDownloadUrl}
              download
              className="mb-4 inline-block rounded-full border border-ink/20 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest transition hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-paper/20"
              onClick={closeMobileMenu}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
