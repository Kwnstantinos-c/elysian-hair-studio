"use client";

import { motion, type Variants } from "framer-motion";
import { Star } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

type Review = {
  name: string;
  role: string;
  rating: number;
  quote: string;
};

const REVIEWS: Review[] = [
  {
    name: "Ελένη Παπαδοπούλου",
    role: "Πελάτισσα, 3 χρόνια",
    rating: 5,
    quote:
      "Κάθε επίσκεψη στο Elysian είναι μια εμπειρία από μόνη της. Η προσοχή στη λεπτομέρεια και το αποτέλεσμα ξεπερνούν πάντα τις προσδοκίες μου.",
  },
  {
    name: "Μαρία Κωνσταντίνου",
    role: "Νυφική κόμμωση",
    rating: 5,
    quote:
      "Για τον γάμο μου εμπιστεύτηκα το Elysian και ήταν η καλύτερη απόφαση. Άκουσαν ακριβώς τι ήθελα και το αποτέλεσμα ήταν διαχρονικό και κομψό.",
  },
  {
    name: "Δέσποινα Αλεξίου",
    role: "Πελάτισσα, 1 χρόνο",
    rating: 5,
    quote:
      "Επιτέλους ένα ατελιέ που αντιμετωπίζει την κόμμωση σαν τέχνη. Το χρώμα μου έχει ποτέ δεν φαινόταν πιο φυσικό και υγιές.",
  },
  {
    name: "Κατερίνα Ιωάννου",
    role: "Θεραπεία περιποίησης",
    rating: 5,
    quote:
      "Επαγγελματισμός, φιλική ατμόσφαιρα και άψογο αποτέλεσμα σε κάθε ραντεβού. Δεν πάω πουθενά αλλού πια.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-charcoal px-6 py-28 text-alabaster sm:px-10 lg:px-16 lg:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 flex flex-col items-center text-center lg:mb-24"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-champagne/60" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-alabaster/60">
              Μαρτυρίες Πελατών
            </span>
            <span className="h-px w-10 bg-champagne/60" />
          </div>
          <h2 className="max-w-xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            Λόγια που{" "}
            <span className="italic text-champagne">μας τιμούν</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {REVIEWS.slice(0, 3).map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} />
          ))}
        </div>

        {REVIEWS.length > 3 && (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:max-w-md sm:gap-8 lg:mx-auto">
            {REVIEWS.slice(3).map((review, index) => (
              <ReviewCard key={review.name} review={review} index={index + 3} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay: index * 0.08 }}
      className="flex flex-col justify-between rounded-sm border border-alabaster/10 bg-alabaster/[0.04] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
    >
      <div>
        <div className="mb-5 flex gap-1">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5 fill-champagne text-champagne"
              strokeWidth={1}
            />
          ))}
        </div>
        <p className="font-serif text-lg italic leading-relaxed text-alabaster/90 sm:text-xl">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      <div className="mt-8 border-t border-alabaster/10 pt-5">
        <p className="text-sm tracking-wide text-alabaster">{review.name}</p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-alabaster/40">
          {review.role}
        </p>
      </div>
    </motion.article>
  );
}
