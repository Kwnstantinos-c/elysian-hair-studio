"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const HOURS = [
  { day: "Δευτέρα", time: "Κλειστά" },
  { day: "Τρίτη", time: "9:00π.μ. – 6:00μ.μ" },
  { day: "Τετάρτη", time: "9:00π.μ. – 3:00μ.μ" },
  { day: "Πέμπτη", time: "11:00π.μ. – 8:00μ.μ" },
  { day: "Παρασκευή", time: "10:00π.μ. – 8:00μ.μ" },
  { day: "Σάββατο", time: "9:00π.μ. – 3:00μ.μ" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-alabaster px-6 pb-10 pt-20 text-charcoal sm:px-10 lg:px-16 lg:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-14 pb-16 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-bronze/60" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-charcoal-soft">
                Επικοινωνία
              </span>
            </div>
            <h2 className="max-w-md font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Σας περιμένουμε στο{" "}
              <span className="italic text-bronze">studio</span> μας.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-charcoal-soft">
              Κλείστε το ραντεβού σας τηλεφωνικά ή περάστε από τον χώρο μας.
              Θα χαρούμε να συζητήσουμε το επόμενο look σας.
            </p>
            <a
              href="tel:+302521039452"
              className="mt-8 inline-flex items-center gap-3 bg-charcoal px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-alabaster transition-colors hover:bg-bronze"
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              Κλείστε Ραντεβού
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="grid grid-cols-2 gap-x-10 gap-y-12 text-sm"
          >
            <div>
              <div className="mb-4 flex items-center gap-2 text-charcoal-soft">
                <MapPin className="h-4 w-4" strokeWidth={1.25} />
                <span className="text-[11px] uppercase tracking-[0.3em]">Διεύθυνση</span>
              </div>
              <p className="leading-relaxed text-charcoal/80">
                Οδός Σμύρνης 6
                <br />
                Δράμα 661 00
              </p>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2 text-charcoal-soft">
                <Phone className="h-4 w-4" strokeWidth={1.25} />
                <span className="text-[11px] uppercase tracking-[0.3em]">Τηλέφωνο</span>
              </div>
              <p className="leading-relaxed text-charcoal/80">
                +30 2521 039452
                <br />
                hello@elysianhair.gr
              </p>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2 text-charcoal-soft">
                <Clock className="h-4 w-4" strokeWidth={1.25} />
                <span className="text-[11px] uppercase tracking-[0.3em]">Ωράριο</span>
              </div>
              <ul className="space-y-2 leading-relaxed text-charcoal/80">
                {HOURS.map(({ day, time }) => (
                  <li key={day} className="flex items-center justify-between gap-6">
                    <span>{day}</span>
                    <span className={time === "Κλειστά" ? "text-charcoal/50" : undefined}>
                      {time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2 text-charcoal-soft">
                <Mail className="h-4 w-4" strokeWidth={1.25} />
                <span className="text-[11px] uppercase tracking-[0.3em]">Ακολουθήστε μας</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/elysian_hair_lounge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/20 text-charcoal/70 transition-colors hover:border-bronze hover:text-bronze"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-charcoal/10 pt-8 text-xs text-charcoal-soft sm:flex-row">
          <span>© 2026 Elysian Hair Studio. Με επιφύλαξη παντός δικαιώματος.</span>
          <span className="text-[11px] uppercase tracking-[0.25em]">Δράμα · Ελλάδα</span>
        </div>
      </div>
    </footer>
  );
}
