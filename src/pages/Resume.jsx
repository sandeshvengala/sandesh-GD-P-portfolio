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
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end gap-4"
        >
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent">My Journey</p>
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              My <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Resume</span>
            </h2>
          </div>
          <div className="mb-2 h-px flex-1 bg-gradient-to-r from-accent/35 to-transparent" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card border border-border p-7 shadow-card backdrop-blur-sm lg:p-8"
          >
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-ink shadow-lg shadow-yellow-500/20">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
              </div>
              <h3 className="font-display text-3xl font-bold">
                My <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Education</span>
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-accent/25 to-transparent" />
            </div>

            <div className="relative">
              <div className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-accent/55 via-accent/25 to-transparent" />
              <div className="space-y-5">
                {education.map((item) => (
                  <article key={item.title} className="group relative pl-8">
                    <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[3px] border-accent bg-white transition-all duration-300 group-hover:scale-110 group-hover:bg-accent dark:bg-ink" />
                    <div className="rounded-xl border border-border/50 bg-secondary/30 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50">
                      <span className="mb-2 inline-block rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                        {item.period}
                      </span>
                      <h4 className="font-display text-xl font-bold">{item.title}</h4>
                      <p className="mt-1 text-sm text-ink/75 dark:text-paper/75">{item.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card border border-border p-7 shadow-card backdrop-blur-sm lg:p-8"
          >
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-ink shadow-lg shadow-yellow-500/20">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
              </div>
              <h3 className="font-display text-3xl font-bold">
                Work <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Experience</span>
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-accent/25 to-transparent" />
            </div>

            <div className="relative">
              <div className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-accent/55 via-accent/25 to-transparent" />
              <div className="space-y-5">
                {experience.map((item) => (
                  <article key={item.role} className="group relative pl-8">
                    <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[3px] border-accent bg-white transition-all duration-300 group-hover:scale-110 group-hover:bg-accent dark:bg-ink" />
                    <div className="rounded-xl border border-border/50 bg-secondary/30 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50">
                      <span className="mb-2 inline-block rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                        {item.period}
                      </span>
                      <h4 className="font-display text-xl font-bold">{item.role}</h4>
                      <p className="mt-1 text-sm text-ink/75 dark:text-paper/75">{item.detail}</p>
                      <ul className="mt-3 space-y-2">
                        {item.highlights.slice(0, 2).map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-sm text-ink/75 dark:text-paper/75">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </motion.article>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-card border border-border p-7 shadow-card backdrop-blur-sm lg:p-8"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">Professional Summary</p>
          <div className="space-y-2 text-sm leading-relaxed text-ink/80 dark:text-paper/80">
            {summaryPoints.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-ink/15 bg-white/70 px-4 py-2 dark:border-paper/20 dark:bg-ink/30">{contactEmail}</span>
            <span className="rounded-full border border-ink/15 bg-white/70 px-4 py-2 dark:border-paper/20 dark:bg-ink/30">{contactPhone}</span>
            <span className="rounded-full border border-ink/15 bg-white/70 px-4 py-2 dark:border-paper/20 dark:bg-ink/30">{contactLocation}</span>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-card border border-border p-7 shadow-card backdrop-blur-sm lg:p-8"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">Skills & Technologies</p>
          <div className="grid gap-5 lg:grid-cols-2">
            {[...skillGroups, ...technologyGroups].map((group) => (
              <article key={group.label}>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-ink/80 dark:text-paper/80">{group.label}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.values.map((value) => (
                    <span key={value} className="rounded-xl border border-ink/15 bg-white/65 px-3 py-1.5 text-xs font-semibold dark:border-paper/15 dark:bg-ink/30">
                      {value}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-card border border-border p-7 shadow-card backdrop-blur-sm lg:p-8"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">Achievements</p>
          <ul className="space-y-2.5">
            {achievements.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink/80 dark:text-paper/80">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-ink/10 bg-white/70 p-3 dark:border-paper/10 dark:bg-ink/30">
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
        </motion.article>
      </div>
    </section>
  );
}
