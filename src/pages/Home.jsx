import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { heroImageUrl, socialLinks } from '../data/siteContent';

const highlightStats = [
  { value: '5+', label: 'Real-World Projects' },
  { value: '1+', label: 'Internship Experience' },
  { value: 'India', label: 'Based In' }
];

const rotatingRoles = [
  'Full Stack Developer',
  'Graphic Designer',
  'Photographer',
  'Social Media Editor',
  'Community Builder'
];

const longestRole = rotatingRoles.reduce((longest, current) =>
  current.length > longest.length ? current : longest
);

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = rotatingRoles[roleIndex];
    const typingSpeed = isDeleting ? 45 : 85;
    const endPause = 900;
    const startPause = 220;
    let timer;

    if (!isDeleting && typedText === currentRole) {
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, endPause);
    } else if (isDeleting && typedText.length === 0) {
      timer = window.setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
      }, startPause);
    } else {
      timer = window.setTimeout(() => {
        const nextLength = typedText.length + (isDeleting ? -1 : 1);
        setTypedText(currentRole.slice(0, nextLength));
      }, typingSpeed);
    }

    return () => window.clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <>
      <section className="relative overflow-hidden pb-8">
        <div className="mesh-bg" aria-hidden="true" />
        <div className="heritage-pattern" aria-hidden="true" />
        <div className="section-orb -left-20 top-24 h-40 w-40 bg-accent/30" aria-hidden="true" />
        <div className="section-orb -right-20 bottom-20 h-44 w-44 bg-mint/30" aria-hidden="true" />
        <div className="mx-auto grid w-[min(1120px,92vw)] gap-10 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Available For Opportunities
            </p>

            <h1 className="font-display text-4xl leading-[0.95] md:text-7xl">
              Hi, I&apos;m <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Sandesh Vengala</span>
            </h1>

            <div className="mt-5 text-sm font-semibold tracking-[0.04em] text-ink/70 dark:text-paper/75 md:text-base">
              <span className="relative inline-flex h-7 items-center align-middle text-accent md:h-8">
                <span className="invisible whitespace-nowrap">{longestRole}</span>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap">
                  {typedText}
                  <span className="ml-0.5 inline-block h-[1em] w-[2px] bg-accent align-middle animate-pulse" />
                </span>
              </span>
            </div>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/75 dark:text-paper/80">
              Building at the intersection of technology, creativity, and practical execution. I design and develop
              experiences that blend full stack development, visual design, and storytelling to turn ideas into
              real-world digital products.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="rounded-full bg-accent px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1"
              >
                Know More
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-ink/20 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition hover:border-accent hover:text-accent dark:border-paper/25"
              >
                Get In Touch
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlightStats.map((item, idx) => (
                <article
                  key={item.label}
                  className="rounded-2xl border border-ink/10 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35"
                >
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent">
                    {idx === 0 ? 'P' : idx === 1 ? 'I' : 'L'}
                  </div>
                  <p className="text-2xl font-bold text-accent">{item.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/65 dark:text-paper/70">
                    {item.label}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-ink/10 bg-white/70 p-3 dark:border-paper/10 dark:bg-ink/30">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60 dark:text-paper/65">Find Me</span>
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-ink/15 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition hover:border-accent hover:text-accent dark:border-paper/20 dark:bg-ink/35"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-accent/20 blur-2xl" />
            <div className="absolute -bottom-8 -right-8 h-36 w-36 rounded-full bg-mint/30 blur-2xl" />
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/10 via-transparent to-mint/15" />
            <img
              src={heroImageUrl}
              alt="Sandesh"
              className="relative h-[26rem] w-full rounded-3xl border border-white/30 object-cover object-[center_18%] shadow-card md:h-[36rem]"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
