import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { resumeDownloadUrl } from '../data/siteContent';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const touchStartY = useRef(null);
  const { pathname } = useLocation();
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

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) {
      setDragOffset(0);
      touchStartY.current = null;
    }
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  const handleTouchStart = (event) => {
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    if (touchStartY.current === null) return;
    const delta = event.touches[0].clientY - touchStartY.current;
    if (delta > 0) {
      setDragOffset(Math.min(delta, 140));
    }
  };

  const handleTouchEnd = () => {
    if (dragOffset > 70) {
      closeMobileMenu();
    } else {
      setDragOffset(0);
    }
    touchStartY.current = null;
  };

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
            className="rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition hover:border-accent hover:text-accent dark:border-paper/20 md:hidden"
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
          <div className="fixed inset-0 z-40 bg-ink/45" onClick={closeMobileMenu} aria-hidden="true" />
          <div
            className="fixed left-1/2 top-[73px] z-50 w-[min(92vw,360px)] max-h-[72vh] overflow-y-auto rounded-2xl border border-ink/10 bg-paper px-5 py-4 shadow-xl transition-transform dark:border-paper/10 dark:bg-ink"
            style={{ transform: `translate(-50%, ${dragOffset}px)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
          >
            <div className="mb-4 flex justify-center">
              <span className="h-1.5 w-10 rounded-full bg-ink/25 dark:bg-paper/25" aria-hidden="true" />
            </div>

            <div className="mb-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Menu</p>
            </div>

            <div className="mb-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] transition ${
                      isActive
                        ? 'bg-accent/10 text-accent dark:bg-accent/20'
                        : 'text-ink/80 hover:text-accent dark:text-paper/80'
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
              className="inline-flex items-center justify-center rounded-full border border-ink/20 px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.15em] transition hover:border-accent hover:text-accent dark:border-paper/20"
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
