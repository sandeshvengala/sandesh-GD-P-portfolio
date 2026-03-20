import { motion } from 'framer-motion';
import { contactEmail, contactLocation, contactPhone, socialLinks } from '../data/siteContent';

const summaryPoints = [
  'Passionate full stack developer and designer focused on modern, user-centric digital products.',
  'Builds responsive web applications with strong UI/UX, clean workflows, and practical functionality.',
  'Currently developing The Student Spot while combining development, graphic design, and photography for complete digital experiences.'
];

const education = [
  {
    title: 'Bachelor of Engineering - Computer Science and Design',
    detail: 'Sree Chaitanya College of Engineering, Karimnagar. Undergraduate studies focused on computing, design principles, and full stack development.',
    period: 'Expected 2027'
  },
  {
    title: 'Intermediate (10+2) - MPC',
    detail: 'Sree Chaitanya Junior College, Karimnagar. GPA: 81.5 with specialization in Mathematics, Physics, and Chemistry.',
    period: 'Completed May 2023'
  },
  {
    title: 'SSC - Secondary School Certificate',
    detail: 'Telangana State Model School, Sircilla. GPA: 9.2 with strong academic foundations.',
    period: 'Completed May 2021'
  }
];

const experience = [
  {
    role: 'The Student Spot - Student Community Platform',
    period: 'Current (In Progress)',
    detail: 'Building a multi-functional platform for students with authentication, organized resources, modern UX, scalable routing, and AI-assistant planning.',
    highlights: [
      'Implemented responsive frontend modules using React and Tailwind CSS.',
      'Designed scalable platform structure with focus on usability and growth.',
      'Integrated planning for smart assistant support and workflow automation.'
    ]
  },
  {
    role: 'Graphic Design & Photography Portfolio Website',
    period: 'Project',
    detail: 'Developed a responsive portfolio with categorized creative sections, smooth navigation, and performance-focused UI for visual storytelling.',
    highlights: [
      'Built reusable components and clean page structure for maintainability.',
      'Optimized browsing flow for projects, photography, and service showcases.',
      'Focused on mobile-first responsiveness and visual consistency.'
    ]
  },
  {
    role: 'COTSTYLE - E-commerce Website (Frontend)',
    period: 'Project',
    detail: 'Created an e-commerce frontend with login/signup interface, product listings, and scalable structure for backend integration.',
    highlights: [
      'Developed clean UI components for product discovery and navigation.',
      'Designed authentication screens and structured frontend flows.',
      'Prepared frontend architecture for future API integration.'
    ]
  },
  {
    role: 'WhatsApp Automation Bot',
    period: 'Project',
    detail: 'Designed automated workflows using n8n, APIs, and AI integration for real-time communication use cases.',
    highlights: [
      'Built workflow automations to reduce manual responses.',
      'Connected services through API-driven nodes and routing.',
      'Tested conversational behavior for practical support scenarios.'
    ]
  },
  {
    role: 'Web Development Intern',
    period: 'ODCET Technologies',
    detail: 'Improved cross-device responsiveness, usability, and accessibility while collaborating in team-based development workflows.',
    highlights: [
      'Enhanced existing UI for better mobile and desktop compatibility.',
      'Applied cleaner component styling and layout consistency.',
      'Collaborated on real-world tasks with delivery deadlines.'
    ]
  }
];

const skillGroups = [
  {
    label: 'Core Skills',
    values: ['Full Stack Development', 'Web Development', 'Frontend Development', 'UI/UX Design', 'Graphic Design']
  },
  {
    label: 'Creative Skills',
    values: ['Photography', 'Visual Storytelling', 'Photo Editing', 'Content Design', 'Branding']
  },
  {
    label: 'Automation & Workflow',
    values: ['Workflow Automation', 'API Integration', 'AI-assisted Workflows', 'Problem Solving', 'Team Collaboration']
  },
  {
    label: 'Soft Skills',
    values: ['Leadership', 'Communication', 'Strategic Thinking', 'Adaptability', 'Execution Focus']
  }
];

const technologyGroups = [
  {
    label: 'Development Technologies',
    values: ['JavaScript (ES6+)', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'MySQL']
  },
  {
    label: 'Frontend & Tooling',
    values: ['Tailwind CSS', 'HTML5', 'CSS3', 'Git & GitHub', 'REST APIs', 'Postman']
  },
  {
    label: 'Design & Deployment',
    values: ['Figma', 'Adobe Photoshop', 'Adobe Premiere Pro', 'Vercel', 'Netlify', 'n8n']
  }
];

const achievements = [
  'Completed Web Development Certification and Internship at ODCET Technologies (E-Cell, IIT Hyderabad).',
  'State-Level Chess Player (Government recognized) with strong strategic and analytical thinking.',
  'Built practical projects that combine development, design, and automation for real-world use cases.'
];

export default function Resume() {
  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-20 md:py-24">
      <div className="rounded-3xl border border-ink/10 bg-white/85 p-7 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35 md:p-10">
        <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Resume
        </p>

        <h1 className="font-display text-4xl leading-tight md:text-6xl bg-gradient-name bg-clip-text text-transparent">Sandesh Vengala</h1>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-ink/65 dark:text-paper/70">
          Full Stack Developer & Creative Builder
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full border border-ink/15 bg-white/70 px-4 py-2 dark:border-paper/20 dark:bg-ink/30">{contactEmail}</span>
          <span className="rounded-full border border-ink/15 bg-white/70 px-4 py-2 dark:border-paper/20 dark:bg-ink/30">{contactPhone}</span>
          <span className="rounded-full border border-ink/15 bg-white/70 px-4 py-2 dark:border-paper/20 dark:bg-ink/30">{contactLocation}</span>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          <article className="rounded-2xl border border-ink/10 bg-white/75 p-4 dark:border-paper/10 dark:bg-ink/25">
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">P</div>
            <p className="text-2xl font-bold text-accent">5+</p>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/65 dark:text-paper/70">Real-World Projects</p>
          </article>
          <article className="rounded-2xl border border-ink/10 bg-white/75 p-4 dark:border-paper/10 dark:bg-ink/25">
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">I</div>
            <p className="text-2xl font-bold text-accent">1+</p>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/65 dark:text-paper/70">Internship Experience</p>
          </article>
          <article className="rounded-2xl border border-ink/10 bg-white/75 p-4 dark:border-paper/10 dark:bg-ink/25">
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">G</div>
            <p className="text-2xl font-bold text-accent">2027</p>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/65 dark:text-paper/70">Expected Graduation</p>
          </article>
        </div>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-ink/10 bg-white/80 p-7 backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Professional Summary</p>
          <div className="space-y-3 text-sm leading-relaxed text-ink/80 dark:text-paper/80">
            {summaryPoints.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="rounded-3xl border border-ink/10 bg-white/80 p-7 backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Education</p>
          <div className="space-y-4">
            {education.map((item) => (
              <article key={item.title} className="rounded-2xl border border-ink/10 bg-white/70 p-4 dark:border-paper/10 dark:bg-ink/25">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-ink/80 dark:text-paper/80">{item.detail}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 rounded-3xl border border-ink/10 bg-white/80 p-7 backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Experience</p>
        <div className="space-y-4">
          {experience.map((item) => (
            <article key={item.role} className="rounded-2xl border border-ink/10 bg-white/70 p-4 dark:border-paper/10 dark:bg-ink/25">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-semibold">{item.role}</h3>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{item.period}</span>
              </div>
              <p className="mt-2 text-sm text-ink/80 dark:text-paper/80">{item.detail}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink/75 dark:text-paper/80">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 rounded-3xl border border-ink/10 bg-white/80 p-7 backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Skills & Technologies</p>
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.label}>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em]">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.values.map((value) => (
                  <span key={value} className="rounded-full border border-ink/20 bg-white/70 px-3 py-1.5 text-xs font-semibold dark:border-paper/20 dark:bg-ink/25">
                    {value}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {technologyGroups.map((group) => (
            <article key={group.label}>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em]">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.values.map((value) => (
                  <span key={value} className="rounded-full border border-ink/20 bg-white/70 px-3 py-1.5 text-xs font-semibold dark:border-paper/20 dark:bg-ink/25">
                    {value}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 rounded-3xl border border-ink/10 bg-white/80 p-7 backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Achievements</p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-ink/80 dark:text-paper/80">
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>

      <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-ink/10 bg-white/75 p-3 dark:border-paper/10 dark:bg-ink/30">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition hover:border-accent hover:text-accent dark:border-paper/20 dark:bg-ink/35"
          >
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}
