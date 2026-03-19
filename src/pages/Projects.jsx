import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-20 md:py-24">
      <SectionTitle title="Projects" subtitle="Choose Section" />

      <div className="grid gap-8 md:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-ink/10 bg-white p-7 shadow-card dark:border-paper/10 dark:bg-ink/40"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Section 01</p>
          <h3 className="mb-3 text-3xl font-semibold">Graphic Designing</h3>
          <p className="mb-6 text-sm text-ink/75 dark:text-paper/80">
            Explore branding, social media design, reels editing, posters, wedding and birthday invites, UI/UX, and
            case studies.
          </p>
          <Link
            to="/projects/graphic-designing"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:-translate-y-0.5"
          >
            Open
          </Link>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="rounded-3xl border border-ink/10 bg-white p-7 shadow-card dark:border-paper/10 dark:bg-ink/40"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Section 02</p>
          <h3 className="mb-3 text-3xl font-semibold">Photography</h3>
          <p className="mb-6 text-sm text-ink/75 dark:text-paper/80">
            Browse portrait, wedding, birthday, street, nature, and product photography collections.
          </p>
          <Link
            to="/photography"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:-translate-y-0.5"
          >
            Open
          </Link>
        </motion.article>
      </div>
    </section>
  );
}
