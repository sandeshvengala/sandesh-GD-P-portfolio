import { useMemo, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { categories, projects } from '../data/projects';

export default function GraphicDesigning() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-20 md:py-24">
      <SectionTitle title="Graphic Designing" subtitle="Design Portfolio" />

      <p className="mb-8 max-w-3xl text-lg leading-relaxed text-ink/80 dark:text-paper/80">
        Creative design work across branding, social media, UI/UX, event posters, wedding invitations, birthday
        creatives, and more.
      </p>

      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => (
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

      <div className="grid gap-8 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
