"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export type Service = {
  id: string;
  title: string;
  description: string;
  price: string;
  image_url: string;
  display_order: number;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

type ServicesProps = {
  services: Service[];
};

export default function Services({ services }: ServicesProps) {
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

        {services.length === 0 ? (
          <p className="text-sm text-charcoal-soft">
            Οι υπηρεσίες μας ανανεώνονται σύντομα.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.4, ease: EASE } }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white"
    >
      <div className="overflow-hidden">
        <Image
          src={service.image_url}
          alt={service.title.trim()}
          width={640}
          height={800}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-auto w-full"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl tracking-tight sm:text-2xl">
          {service.title.trim()}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
          {service.description.trim()}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-charcoal/10 pt-4">
          <span className="text-sm font-medium text-bronze">
            {service.price.trim()}
          </span>
          <a
            href="#contact"
            className="group/link inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-bronze"
          >
            Περισσότερα
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
