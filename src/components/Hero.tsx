"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const lineVariants: Variants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1.1, delay: 0.5 + i * 0.12, ease: EASE },
  }),
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: EASE },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const scrimOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] w-full overflow-hidden bg-charcoal"
    >
      <motion.div
        aria-hidden
        style={{ y: imageY }}
        className="absolute inset-0 -top-[8%] h-[116%] w-full"
      >
        <Image
          src="/images/Elysian_highres_3060x4080.png"
          alt="Ο χώρος υποδοχής του Elysian Hair Studio"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        aria-hidden
        style={{ opacity: scrimOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/20"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/10 to-transparent"
      />

      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative z-10 flex items-center justify-between px-6 pt-8 sm:px-10 lg:px-16"
      >
        <span className="font-serif text-5xl italic leading-none tracking-wider text-alabaster">
          Elysian
        </span>
        <nav className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.25em] text-alabaster/70 sm:flex">
          <a href="#services" className="transition-colors hover:text-champagne">
            Υπηρεσίες
          </a>
          <a href="#contact" className="transition-colors hover:text-champagne">
            Επικοινωνία
          </a>
        </nav>
      </motion.header>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto flex h-[calc(100%-88px)] max-w-6xl flex-col justify-center px-6 sm:px-10 lg:px-16"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="mb-8 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-champagne/70" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-alabaster/70">
            Πολυτελής Κομμωτική Τέχνη
          </span>
        </motion.div>

        <h1 className="font-serif text-[13vw] font-medium leading-[0.98] tracking-tight text-alabaster sm:text-[8.5vw] lg:text-[6.4vw]">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              Η κόμμωση
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              ως προσωπική
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block italic text-champagne"
              custom={2}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              αισθητική δήλωση
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={1.15}
          variants={fadeUp}
          className="mt-8 max-w-md text-sm leading-relaxed tracking-wide text-alabaster/80 sm:text-base"
        >
          Ένα boutique ατελιέ στην καρδιά της πόλης, όπου κάθε δημιουργία
          σχεδιάζεται με ακρίβεια, υπομονή και βαθύ σεβασμό στη μοναδικότητά
          σας.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={1.3}
          variants={fadeUp}
          className="mt-12 flex items-center gap-8"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-alabaster/30 px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-alabaster"
          >
            <span className="absolute inset-0 -translate-x-full bg-alabaster transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
            <span className="relative z-10 transition-colors duration-500 group-hover:text-charcoal">
              Κλείστε Ραντεβού
            </span>
            <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:text-charcoal" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-alabaster/70">
          Κυλίστε
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-champagne" />
        </motion.span>
      </motion.div>
    </section>
  );
}
