import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-card transition dark:border-paper/10 dark:bg-ink/40"
    >
      <div className="relative h-56 overflow-hidden bg-ink/5 dark:bg-paper/5">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          {project.category}
        </span>
      </div>

      <div className="p-6">
        <p className="mb-2 text-sm font-medium text-ink/60 dark:text-paper/60">{project.year}</p>
        <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>
        <p className="mb-5 text-ink/70 dark:text-paper/80">{project.shortDescription}</p>

        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 font-semibold text-accent transition hover:translate-x-1"
        >
          View case study
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </motion.article>
  );
}
