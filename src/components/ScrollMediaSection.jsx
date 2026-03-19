import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const sampleThemes = {
  realistic: [
    { title: 'Indian Wedding Invitation Design', src: '/assets/images/samples/showcase-1.png' },
    { title: 'Festival Poster Design', src: '/assets/images/samples/showcase-2.png' },
    { title: 'Instagram Reels Creative', src: '/assets/images/samples/showcase-3.png' }
  ],
  poster: [
    { title: 'Indian Wedding Invitation Design', src: '/assets/images/samples/showcase-1.svg' },
    { title: 'Festival Poster Design', src: '/assets/images/samples/showcase-2.svg' },
    { title: 'Instagram Reels Creative', src: '/assets/images/samples/showcase-3.svg' }
  ]
};

const sampleVideos = [
  { title: 'Wedding Highlights Reel', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
  { title: 'Birthday Celebration Edit', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' },
  { title: 'Indian Brand Product Video', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' }
];

export default function ScrollMediaSection() {
  const [theme, setTheme] = useState('realistic');

  const sampleImages = useMemo(() => sampleThemes[theme] ?? sampleThemes.realistic, [theme]);

  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-14 md:py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-accent">Media Showcase</p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">Sample Images and Videos</h2>
        </div>

        <div className="inline-flex rounded-full border border-ink/15 bg-white/75 p-1 text-xs font-semibold uppercase tracking-[0.12em] shadow-sm dark:border-paper/15 dark:bg-ink/60">
          <button
            type="button"
            onClick={() => setTheme('realistic')}
            className={`rounded-full px-3 py-2 transition ${
              theme === 'realistic'
                ? 'bg-accent text-white'
                : 'text-ink/70 hover:text-accent dark:text-paper/70 dark:hover:text-accent'
            }`}
            aria-pressed={theme === 'realistic'}
          >
            Realistic Photo
          </button>
          <button
            type="button"
            onClick={() => setTheme('poster')}
            className={`rounded-full px-3 py-2 transition ${
              theme === 'poster'
                ? 'bg-accent text-white'
                : 'text-ink/70 hover:text-accent dark:text-paper/70 dark:hover:text-accent'
            }`}
            aria-pressed={theme === 'poster'}
          >
            Graphic Poster
          </button>
        </div>
      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-3">
        {sampleImages.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card dark:border-paper/10 dark:bg-ink/40"
          >
            <img src={item.src} alt={item.title} className="h-56 w-full object-cover" loading="lazy" />
            <p className="px-4 py-3 text-sm font-semibold">{item.title}</p>
          </motion.article>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {sampleVideos.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="overflow-hidden rounded-2xl border border-ink/10 bg-black shadow-card dark:border-paper/10"
          >
            <video
              className="h-56 w-full object-cover"
              src={item.src}
              controls
              preload="metadata"
              playsInline
            />
            <p className="px-4 py-3 text-sm font-semibold text-white/90">{item.title}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

