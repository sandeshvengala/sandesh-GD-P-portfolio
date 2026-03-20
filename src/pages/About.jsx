import { motion } from 'framer-motion';

const focusAreas = [
  'Full Stack Development',
  'Photography & Video',
  'Graphic Design',
  'Community Builder'
];

function renderFocusIcon(item) {
  if (item === 'Full Stack Development') {
    return (
      <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }

  if (item === 'Photography & Video') {
    return (
      <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    );
  }

  if (item === 'Graphic Design') {
    return (
      <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <circle cx="19" cy="13" r="2" />
        <circle cx="6" cy="12" r="2" />
        <circle cx="10" cy="18" r="2" />
        <path d="M16 21a7 7 0 1 0 0-14h-1" />
      </svg>
    );
  }

  if (item === 'Community Builder') {
    return (
      <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  return (
    <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default function About() {
  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-20 md:py-24">
      <div className="mb-10 flex items-end gap-4">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Get To Know Me</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            About <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>
        <div className="mb-2 h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
      </div>

      <div className="mb-10 flex flex-wrap gap-3">
        {focusAreas.slice(0, 4).map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-4 py-2 text-sm font-semibold text-ink/90 dark:border-paper/20 dark:bg-ink/35 dark:text-paper"
          >
            {renderFocusIcon(item)}
            {item}
          </span>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-ink/10 bg-white/80 p-7 shadow-card dark:border-paper/10 dark:bg-ink/35"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            ⚡
          </div>
          <p className="text-lg leading-relaxed text-ink/80 dark:text-paper/80">
            I am a passionate and versatile developer and designer focused on building modern, user-centric digital
            experiences. With a strong foundation in web development and UI/UX design, I specialize in responsive,
            interactive, and visually appealing applications.
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="rounded-2xl border border-ink/10 bg-white/80 p-7 shadow-card dark:border-paper/10 dark:bg-ink/35"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            ✦
          </div>
          <p className="text-lg leading-relaxed text-ink/80 dark:text-paper/80">
            I am currently developing The Student Spot, a platform aimed at empowering students through resources,
            community engagement, and innovation. Alongside development, I work on graphic design and photography to
            bring a strong visual perspective into every product.
          </p>
        </motion.article>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="mt-10"
      >
        <div className="mb-6 flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
          <h3 className="font-display text-3xl font-bold md:text-4xl">
            The <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Student Spot</span>
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
        </div>

        <article className="rounded-2xl border border-ink/10 bg-white/80 p-7 shadow-card dark:border-paper/10 dark:bg-ink/35">
          <p className="mb-4 text-lg leading-relaxed text-ink/80 dark:text-paper/80">
            A <strong className="text-ink dark:text-paper">student community ecosystem</strong> where I contribute as a
            <strong className="text-ink dark:text-paper"> community builder</strong>, connecting students with opportunities,
            practical knowledge, and support networks beyond traditional classroom learning.
          </p>
          <p className="text-lg leading-relaxed text-ink/80 dark:text-paper/80">
            What started as a simple idea is growing into a collaborative network where students, startups, and mentors
            work together through internships, events, and real-world projects.
          </p>
        </article>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-12"
      >
        <p className="mb-8 text-lg font-semibold leading-relaxed text-ink dark:text-paper">
          I bring together design, development, and community building to create meaningful digital experiences that inspire and connect people.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white/80 p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35">
            <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.02] transition-colors group-hover:bg-accent/[0.06]" />
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
              🎨
            </div>
            <p className="mb-2 font-semibold text-ink dark:text-paper">Design-Focused</p>
            <p className="text-sm text-ink/70 dark:text-paper/70">
              Creating beautiful, intuitive interfaces with a focus on user experience and visual storytelling.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white/80 p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35">
            <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.02] transition-colors group-hover:bg-accent/[0.06]" />
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
              ⚙️
            </div>
            <p className="mb-2 font-semibold text-ink dark:text-paper">Full-Stack Development</p>
            <p className="text-sm text-ink/70 dark:text-paper/70">
              Building robust, scalable applications using modern technologies and best practices.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white/80 p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35">
            <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.02] transition-colors group-hover:bg-accent/[0.06]" />
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
              🤝
            </div>
            <p className="mb-2 font-semibold text-ink dark:text-paper">Community Builder</p>
            <p className="text-sm text-ink/70 dark:text-paper/70">
              Fostering collaboration and growth through meaningful connections and shared learning.
            </p>
          </article>
        </div>
      </motion.div>

    </section>
  );
}
