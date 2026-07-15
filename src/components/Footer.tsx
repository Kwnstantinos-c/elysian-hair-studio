"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, Phone, Clock, Mail, type LucideIcon } from "lucide-react";

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

function FacebookIcon({ className }: { className?: string }) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

type InfoBlock = {
  icon: LucideIcon;
  label: string;
};

const CONTACT: InfoBlock[] = [
  { icon: MapPin, label: "Διεύθυνση" },
  { icon: Phone, label: "Τηλέφωνο" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal px-6 pb-10 pt-20 text-alabaster sm:px-10 lg:px-16 lg:pt-28">
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
              <span className="text-[11px] uppercase tracking-[0.35em] text-alabaster/50">
                Επικοινωνία
              </span>
            </div>
            <h2 className="max-w-md font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Σας περιμένουμε στο{" "}
              <span className="italic text-champagne">studio</span> μας.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-alabaster/60">
              Κλείστε το ραντεβού σας τηλεφωνικά ή περάστε από τον χώρο μας.
              Θα χαρούμε να συζητήσουμε το επόμενο look σας.
            </p>
            <a
              href="tel:+302101234567"
              className="mt-8 inline-flex items-center gap-3 bg-alabaster px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-charcoal transition-colors hover:bg-champagne"
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
            {CONTACT.map(({ icon: Icon, label }) => (
              <div key={label}>
                <div className="mb-4 flex items-center gap-2 text-alabaster/50">
                  <Icon className="h-4 w-4" strokeWidth={1.25} />
                  <span className="text-[11px] uppercase tracking-[0.3em]">{label}</span>
                </div>
                {label === "Διεύθυνση" ? (
                  <p className="leading-relaxed text-alabaster/80">
                    Οδός Σκουφά 12
                    <br />
                    Κολωνάκι, Αθήνα 106 73
                  </p>
                ) : (
                  <p className="leading-relaxed text-alabaster/80">
                    +30 210 123 4567
                    <br />
                    hello@elysianhair.gr
                  </p>
                )}
              </div>
            ))}

            <div>
              <div className="mb-4 flex items-center gap-2 text-alabaster/50">
                <Clock className="h-4 w-4" strokeWidth={1.25} />
                <span className="text-[11px] uppercase tracking-[0.3em]">Ωράριο</span>
              </div>
              <ul className="space-y-2 leading-relaxed text-alabaster/80">
                <li className="flex items-center justify-between gap-6">
                  <span>Δευτέρα</span>
                  <span className="text-alabaster/50">Κλειστά</span>
                </li>
                <li className="flex items-center justify-between gap-6">
                  <span>Τρίτη – Σάββατο</span>
                  <span>10:00 – 20:00</span>
                </li>
                <li className="flex items-center justify-between gap-6">
                  <span>Κυριακή</span>
                  <span className="text-alabaster/50">Κλειστά</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2 text-alabaster/50">
                <Mail className="h-4 w-4" strokeWidth={1.25} />
                <span className="text-[11px] uppercase tracking-[0.3em]">Ακολουθήστε μας</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-alabaster/20 text-alabaster/70 transition-colors hover:border-champagne hover:text-champagne"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-alabaster/20 text-alabaster/70 transition-colors hover:border-champagne hover:text-champagne"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-alabaster/10 pt-8 text-xs text-alabaster/40 sm:flex-row">
          <span>© 2026 Elysian Hair Studio. Με επιφύλαξη παντός δικαιώματος.</span>
          <span className="text-[11px] uppercase tracking-[0.25em]">Αθήνα · Ελλάδα</span>
        </div>
      </div>
    </footer>
  );
}
