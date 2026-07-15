"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  Scissors,
  Palette,
  Sparkles,
  Gem,
  Wind,
  Flame,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import stylingImage from "@/images/styling.png";
import weddingImage from "@/images/wedding.png";
import colorImage from "@/images/color.png";
import eventImage from "@/images/event.png";
import straitHairImage from "@/images/straitHair.png";
import TreatmentImage from "@/images/treatment.png";

const EASE = [0.16, 1, 0.3, 1] as const;

type Service = {
  number: string;
  icon: LucideIcon;
  image?: StaticImageData;
  title: string;
  description: string;
  span: string;
  offset: string;
  tone: string;
};

const SERVICES: Service[] = [
  {
    number: "01",
    icon: Scissors,
    image: stylingImage,
    title: "Κούρεμα & Styling",
    description:
      "Ακριβείς γραμμές και φόρμες, σχεδιασμένες γύρω από τα χαρακτηριστικά και τη στάση ζωής σας.",
    span: "lg:col-span-4",
    offset: "",
    tone: "from-champagne/30 via-alabaster-dim to-alabaster-dim",
  },
  {
    number: "02",
    icon: Palette,
    image: colorImage,
    title: "Χρώμα & Απόχρωση",
    description:
      "Τεχνικές βαφής και ανταύγειας υψηλής ακριβείας, για ένα αποτέλεσμα βαθιάς φυσικότητας.",
    span: "lg:col-span-4",
    offset: "lg:mt-6",
    tone: "from-bronze/25 via-alabaster-dim to-alabaster-dim",
  },
  {
    number: "03",
    icon: Sparkles,
    image: TreatmentImage,
    title: "Θεραπείες Περιποίησης",
    description:
      "Εξειδικευμένες θεραπείες αποκατάστασης που αναδεικνύουν την υγεία και τη λάμψη της τρίχας.",
    span: "lg:col-span-4",
    offset: "lg:mt-14",
    tone: "from-charcoal/10 via-alabaster-dim to-alabaster-dim",
  },
  {
    number: "04",
    icon: Gem,
    image: weddingImage,
    title: "Νυφική Κόμμωση",
    description:
      "Κομψές, διαχρονικές δημιουργίες για τη πιο σημαντική μέρα της ζωής σας.",
    span: "lg:col-span-4",
    offset: "lg:-mt-10",
    tone: "from-champagne/20 via-alabaster-dim to-alabaster-dim",
  },
  {
    number: "05",
    icon: Wind,
    image: eventImage,
    title: "Χτενίσματα & Εκδηλώσεις",
    description:
      "Φυσικά κυματιστά ή λεία χτενίσματα, χτισμένα να αντέχουν όλη τη βραδιά.",
    span: "lg:col-span-4",
    offset: "lg:mt-2",
    tone: "from-bronze/20 via-alabaster-dim to-alabaster-dim",
  },
  {
    number: "06",
    icon: Flame,
    image: straitHairImage,
    title: "Θεραπεία Ισιώματος",
    description:
      "Κερατίνη και θεραπείες λείανσης που εξημερώνουν τον όγκο χωρίς να βαραίνουν την τρίχα.",
    span: "lg:col-span-4",
    offset: "lg:mt-20",
    tone: "from-charcoal/15 via-alabaster-dim to-alabaster-dim",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-alabaster px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 flex flex-col gap-6 lg:mb-28 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-bronze/60" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-charcoal-soft">
                Οι Υπηρεσίες μας
              </span>
            </div>
            <h2 className="max-w-xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">
              Η τέχνη μας,{" "}
              <span className="italic text-bronze">σε λεπτομέρεια</span>
            </h2>
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-xs text-sm leading-relaxed text-charcoal-soft"
          >
            Κάθε υπηρεσία είναι μια εμπειρία αφοσίωσης, φτιαγμένη γύρω από
            εσάς — όχι γύρω από τάσεις.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-12">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay: index * 0.05 }}
      className={`group ${service.span} ${service.offset}`}
    >
      {service.image ? (
        <div className="relative overflow-hidden rounded-[2px]">
          <Image
            src={service.image}
            alt={service.title}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
          />
          <span className="absolute left-4 top-4 font-serif text-sm italic text-alabaster/90 drop-shadow-sm">
            {service.number}
          </span>
        </div>
      ) : (
        <div
          className={`relative aspect-[4/3] overflow-hidden rounded-[2px] bg-gradient-to-br ${service.tone}`}
        >
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
            <Icon
              strokeWidth={0.85}
              className="h-16 w-16 text-charcoal/70 sm:h-20 sm:w-20"
            />
          </div>
          <span className="absolute left-4 top-4 font-serif text-sm italic text-charcoal/50">
            {service.number}
          </span>
        </div>
      )}

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl tracking-tight sm:text-2xl">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
            {service.description}
          </p>
        </div>
        <ArrowUpRight
          strokeWidth={1.25}
          className="mt-1.5 h-5 w-5 shrink-0 text-bronze transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </motion.article>
  );
}
