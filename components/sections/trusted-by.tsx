'use client';

import { motion } from 'framer-motion';

const clients = ['Barqiya', 'Khabir Consultant', 'SehatYar', 'MediCore', 'EduPrime'];

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-bg-secondary/60 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium text-muted-foreground"
        >
          Trusted by businesses across healthcare, education, and enterprise
          industries.
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16">
          {clients.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="font-heading text-lg font-bold text-muted-foreground/60 grayscale transition-all duration-300 hover:text-foreground hover:grayscale-0 sm:text-xl"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
