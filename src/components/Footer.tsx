"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal px-6 pb-10 pt-28 text-alabaster sm:px-10 lg:px-16 lg:pt-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col gap-10 border-b border-alabaster/10 pb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <h2 className="max-w-xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            Ας δημιουργήσουμε{" "}
            <span className="italic text-champagne">κάτι μοναδικό</span>
          </h2>
          <a
            href="mailto:hello@elysianhair.gr"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-alabaster/70 transition-colors hover:text-champagne"
          >
            Κλείστε Ραντεβού
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="grid grid-cols-1 gap-12 py-16 text-sm sm:grid-cols-3"
        >
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-alabaster/40">
              Τοποθεσία
            </p>
            <p className="leading-relaxed text-alabaster/80">
              Οδός Σμύρνης 6
              <br />
              Δράμα 661 00
            </p>
          </div>
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-alabaster/40">
              Επικοινωνία
            </p>
            <p className="leading-relaxed text-alabaster/80">
              +30 2521 039452
              <br />
              hello@elysianhair.gr
            </p>
          </div>
         <div>
  <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-alabaster/40">
    Ωράριο
  </p>
  <div className="space-y-2">
    <p className="leading-relaxed text-alabaster/80">
      Δευτέρα: Κλειστά
    </p>
    <p className="leading-relaxed text-alabaster/80">
      Τρίτη: 9:00π.μ. - 6:00μ.μ
    </p>
    <p className="leading-relaxed text-alabaster/80">
      Τετάρτη: 9:00π.μ. - 3:00μ.μ
    </p>
    <p className="leading-relaxed text-alabaster/80">
      Πέμπτη: 11:00π.μ. - 8:00μ.μ
    </p>
    <p className="leading-relaxed text-alabaster/80">
      Παρασκευή: 10:00π.μ. - 8:00μ.μ
    </p>
    <p className="leading-relaxed text-alabaster/80">
      Σάββατο: 9:00π.μ. - 3:00μ.μ
    </p>
  </div>
</div>
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-6 pt-8 text-xs text-alabaster/40 sm:flex-row">
          <span>© 2026 Elysian Hair Studio. Με επιφύλαξη παντός δικαιώματος.</span>
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.2em]">
            <a
              href="https://www.instagram.com/elysian_hair_lounge/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-champagne"
            >
              Instagram
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
