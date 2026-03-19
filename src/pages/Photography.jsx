import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { photoCategories, photographyProjects } from '../data/photography';

export default function Photography() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'All') return photographyProjects;
    return photographyProjects.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-20 md:py-24">
      <SectionTitle title="Photography" subtitle="Visual Stories" />

      <p className="mb-8 max-w-3xl text-lg leading-relaxed text-ink/80 dark:text-paper/80">
        A curated set of portrait, wedding, birthday, street, nature, and product captures focused on composition,
        light, and emotion.
      </p>

      <div className="mb-8 flex flex-wrap gap-3">
        {photoCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            type="button"
            className={`rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wider transition ${
              activeCategory === category
                ? 'bg-accent text-white'
                : 'border border-ink/20 hover:border-accent hover:text-accent dark:border-paper/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPhotos.map((photo, index) => (
          <motion.article
            key={photo.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="group overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-card dark:border-paper/10 dark:bg-ink/40"
          >
            <div className="h-64 overflow-hidden bg-ink/5 dark:bg-paper/5">
              <img
                src={photo.image}
                alt={photo.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">{photo.category}</p>
              <h3 className="mb-2 text-xl font-semibold">{photo.title}</h3>
              <p className="text-sm text-ink/75 dark:text-paper/80">{photo.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
