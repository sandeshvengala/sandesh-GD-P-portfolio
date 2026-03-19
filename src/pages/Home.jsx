import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollMediaSection from '../components/ScrollMediaSection';
import { heroImageUrl, resumeDownloadUrl } from '../data/siteContent';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mesh-bg" aria-hidden="true" />
        <div className="heritage-pattern" aria-hidden="true" />
        <div className="section-orb -left-20 top-24 h-40 w-40 bg-accent/30" aria-hidden="true" />
        <div className="section-orb -right-20 bottom-20 h-44 w-44 bg-mint/30" aria-hidden="true" />
        <div className="mx-auto grid w-[min(1120px,92vw)] gap-10 py-24 md:grid-cols-[1.1fr_0.9fr] md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-accent">Hi, I'm Sandesh 👋</p>
            <h1 className="font-display text-5xl leading-[0.95] md:text-7xl">
              Graphic Designer & Photographer
            </h1>
            <p className="mt-7 max-w-xl text-lg text-ink/75 dark:text-paper/80">
              I create visually compelling designs and capture moments that tell powerful stories.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:-translate-y-1"
              >
                View My Work
              </Link>
              <a
                href={resumeDownloadUrl}
                download
                className="rounded-full border border-ink/20 px-7 py-3 text-sm font-semibold uppercase tracking-wider transition hover:border-accent hover:text-accent dark:border-paper/25"
              >
                Download Resume
              </a>
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
            <img
              src={heroImageUrl}
              alt="Sandesh"
              className="relative h-full min-h-80 w-full rounded-3xl object-cover shadow-card"
            />
          </motion.div>
        </div>
      </section>

      <ScrollMediaSection />
    </>
  );
}
