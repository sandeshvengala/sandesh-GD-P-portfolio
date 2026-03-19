import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { aboutProfileImageUrl } from '../data/siteContent';

const skills = [
  'Graphic Design',
  'Branding and Identity',
  'Social Media Design',
  'Social Media Editing (Reels)',
  'UI/UX Design',
  'Photography',
  'Photo Editing',
  'Typography',
  'Color Theory',
  'Visual Storytelling'
];

const tools = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Figma',
  'Canva',
  'Premiere Pro',
  'After Effects',
  'Lightroom',
  'Camera (DSLR / Mobile Photography)'
];

const photographyWork = [
  {
    title: 'Portrait Photography',
    description: 'Captured expressive portraits focusing on lighting, composition, and emotions.'
  },
  {
    title: 'Street Photography',
    description: 'Captured real-life candid moments that tell stories of everyday life.'
  },
  {
    title: 'Nature Photography',
    description: 'Focused on landscapes, greenery, and natural lighting to create aesthetic visuals.'
  },
  {
    title: 'Product Photography',
    description: 'Captured clean and professional product shots suitable for branding and marketing.'
  }
];

export default function About() {
  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-20 md:py-24">
      <SectionTitle title="About Me" subtitle="Designer Profile" />

      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <motion.img
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          src={aboutProfileImageUrl}
          alt="Designer portrait"
          className="h-96 w-full rounded-3xl object-cover shadow-card"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <p className="mb-6 text-lg leading-relaxed text-ink/80 dark:text-paper/80">
            I am a creative graphic designer and passionate photographer who loves blending visuals with storytelling.
            I specialize in branding, social media creatives, and UI design, along with capturing aesthetic and
            meaningful photographs.
          </p>

          <p className="mb-6 text-lg leading-relaxed text-ink/80 dark:text-paper/80">
            I enjoy turning ideas into impactful designs and capturing real-life moments through my lens. My goal is
            to create visuals that not only look beautiful but also communicate emotions and messages effectively.
          </p>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] dark:border-paper/20"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Tools</p>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] dark:border-paper/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-ink/10 bg-white/70 p-4 dark:border-paper/10 dark:bg-ink/30">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Experience</p>
            <p className="text-sm text-ink/80 dark:text-paper/80">
              Freelance Graphic Designer & Photographer: Worked on branding projects, social media creatives, and
              reels editing, along with photography for personal and community-based work like The Student Spot.
            </p>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Photography Section</p>
            <div className="grid gap-3 md:grid-cols-2">
              {photographyWork.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-ink/10 bg-white/70 p-4 dark:border-paper/10 dark:bg-ink/30"
                >
                  <h3 className="mb-2 text-base font-semibold">{item.title}</h3>
                  <p className="text-sm text-ink/80 dark:text-paper/80">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
