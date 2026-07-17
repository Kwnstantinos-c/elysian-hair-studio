"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: EASE },
  }),
};

const letterGroupVariants: Variants = {
  hidden: {},
  visible: (delay: number = 0) => ({
    transition: { delayChildren: delay, staggerChildren: 0.026 },
  }),
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

function TypewriterLine({
  text,
  delay = 0,
  className,
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.span
      aria-hidden="true"
      className={className}
      custom={delay}
      variants={letterGroupVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants} className="inline-block">
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

type HeroProps = {
  imageUrl: string;
  imageAlt: string;
};

export default function Hero({ imageUrl, imageAlt }: HeroProps) {
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
          src={imageUrl}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[30%_22%]"
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
        <div className="flex flex-col items-center">
          <span className="bg-gradient-to-b from-[#e6bc8a] via-[#a97a44] to-[#5c3a1e] bg-clip-text font-serif text-4xl font-normal leading-none tracking-[0.1em] text-transparent [text-shadow:0_1px_0_rgba(255,255,255,0.3),0_2px_5px_rgba(0,0,0,0.5)] sm:text-5xl">
            ELYSIAN
          </span>
          <span className="mt-2 text-[9px] uppercase tracking-[0.35em] text-champagne sm:text-[10px]">
            Hair Lounge by Maria
          </span>
        </div>
        <nav className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.25em] text-alabaster/70 sm:flex">
          <a href="#services" className="transition-colors hover:text-champagne">
            Υπηρεσίες
          </a>
          <a href="#reviews" className="transition-colors hover:text-champagne">
            Κριτικές
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
          className="mb-8 flex items-center justify-center gap-4"
        >
          <span className="h-px w-10 bg-champagne/70" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-alabaster/70">
            Αναδεικνύουμε την καλύτερη, πιο κομψή εκδοχή σας
          </span>
          <span className="h-px w-10 bg-champagne/70" />
        </motion.div>

        <h1 className="font-serif text-[13vw] font-medium leading-[0.98] tracking-tight text-alabaster sm:text-[8.5vw] lg:text-[6.4vw]">
          <span className="sr-only">
            Η ομορφιά που εκφράζει εσάς
          </span>
          <TypewriterLine text="Η ομορφιά" delay={0.5} className="block" />
          <TypewriterLine text="που εκφράζει" delay={0.86} className="block" />
          <TypewriterLine
            text="εσάς."
            delay={1.22}
            className="block italic text-champagne"
          />
        </h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={2.05}
          variants={fadeUp}
          className="mt-8 max-w-md text-sm leading-relaxed tracking-wide text-alabaster/80 sm:text-base"
        >
          Στο Elysian Hair Studio κάθε δημιουργία σχεδιάζεται με αισθητική, τεχνική και απόλυτη προσοχή στη λεπτομέρεια, ώστε να αναδεικνύει τη δική σας μοναδική προσωπικότητα. 
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={2.25}
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
        transition={{ duration: 1, delay: 2.5 }}
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
