import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { aboutProfileImageUrl } from '../data/siteContent';

const focusAreas = [
  'Full Stack Development',
  'UI/UX Design',
  'Graphic Design',
  'Photography',
  'Automation Workflows',
  'Problem Solving',
  'MERN Stack',
  'Firebase Integration',
  'React Development',
  'Visual Storytelling'
];

const technologies = [
  'React.js',
  'Tailwind CSS',
  'JavaScript (ES6+)',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Firebase',
  'MySQL',
  'Git & GitHub',
  'REST APIs',
  'n8n',
  'Postman',
  'Vercel',
  'Netlify',
  'Figma',
  'Adobe Photoshop',
  'Adobe Premiere Pro'
];

const impactStats = [
  { value: '5+', label: 'Real-World Projects' },
  { value: '1+', label: 'Internship Experience' },
  { value: '2027', label: 'Expected Graduation' }
];

export default function About() {
  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-20 md:py-24">
      <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        Available For Opportunities
      </p>
      <SectionTitle
        title={
          <>
            Hi, I am <span className="bg-gradient-name bg-clip-text text-transparent">Sandesh Vengala</span>
          </>
        }
        subtitle="Full Stack Developer & Creative Builder"
      />

      <div className="grid gap-10 rounded-3xl border border-ink/10 bg-white/75 p-6 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/30 md:grid-cols-[1fr_1.2fr] md:p-8">
        <motion.img
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          src={aboutProfileImageUrl}
          alt="Sandesh profile"
          className="h-96 w-full rounded-3xl border border-white/30 object-cover shadow-card"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="mb-6 grid gap-3 sm:grid-cols-3">
            {impactStats.map((item, idx) => (
              <article key={item.label} className="rounded-2xl border border-ink/10 bg-white/75 p-4 dark:border-paper/10 dark:bg-ink/30">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                  {idx === 0 ? 'P' : idx === 1 ? 'I' : 'G'}
                </div>
                <p className="text-2xl font-bold text-accent">{item.value}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/65 dark:text-paper/70">{item.label}</p>
              </article>
            ))}
          </div>

          <p className="mb-6 text-lg leading-relaxed text-ink/80 dark:text-paper/80">
            I am a passionate and versatile developer and designer focused on building modern, user-centric digital
            experiences. With a strong foundation in web development and UI/UX design, I specialize in responsive,
            interactive, and visually appealing applications.
          </p>

          <p className="mb-6 text-lg leading-relaxed text-ink/80 dark:text-paper/80">
            I am currently developing The Student Spot, a platform aimed at empowering students through resources,
            community engagement, and innovation. Alongside development, I work on graphic design and photography to
            bring a strong visual perspective into every product.
          </p>

          <div className="flex flex-wrap gap-3">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-ink/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] dark:border-paper/20 dark:bg-ink/35"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-8 rounded-3xl border border-ink/10 bg-white/85 p-6 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Skills & Technologies</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((item) => (
            <span
              key={item}
              className="rounded-full border border-ink/20 bg-white/70 px-3 py-1.5 text-xs font-semibold dark:border-paper/20 dark:bg-ink/25"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
