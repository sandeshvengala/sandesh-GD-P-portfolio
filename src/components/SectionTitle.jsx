import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <p className="mb-2 text-sm uppercase tracking-[0.2em] text-accent">{subtitle}</p>
      <h2 className="font-display text-4xl leading-tight md:text-5xl">{title}</h2>
    </motion.div>
  );
}
