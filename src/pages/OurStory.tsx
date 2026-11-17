
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft, 
  Camera,
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const chapters = [
  {
    year: "2018",
    label: "THE BEGINNING",
    title: "Where it all began",
    description:
      "Every beautiful story has a beginning. Ours started with little conversations, unexpected laughs and a friendship that slowly became something priceless.",
    image: "/images/memory-1.jpg",
    quote: "Little did we know how special this journey would become.",
  },
  {
    year: "2020",
    label: "GROWING TOGETHER",
    title: "A bond like no other",
    description:
      "Through changing days and new experiences, we kept making memories. Every laugh, every conversation and every little moment made our bond stronger.",
    image: "/images/memory-3.jpg",
    quote: "The best moments are even better when shared with you.",
  },
  {
    year: "2023",
    label: "COUNTLESS MEMORIES",
    title: "Our little universe",
    description:
      "From silly jokes to meaningful talks, our friendship became a place full of comfort, happiness and memories that will always make me smile.",
    image: "/images/memory-6.jpg",
    quote: "Some memories become treasures that time can never erase.",
  },
  {
    year: "2026",
    label: "STILL CHOOSING US",
    title: "And the story continues",
    description:
      "Here we are, with years of memories behind us and countless beautiful moments waiting ahead. This is not the end. It is another chapter.",
    image: "/images/memory-8.jpg",
    quote: "Nine years down, forever to go. ♡",
  },
];

const extraMemories = [
  {
    image: "/images/memory-2.jpg",
    title: "Sweet Little Moments",
    year: "2019",
  },
  {
    image: "/images/memory-4.jpg",
    title: "Always Together",
    year: "2021",
  },
  {
    image: "/images/memory-5.jpg",
    title: "Our Happy Days",
    year: "2022",
  },
  {
    image: "/images/memory-7.jpg",
    title: "Forever Memories",
    year: "2024",
  },
];

const allPhotos = [
  ...chapters.map((chapter) => ({
    image: chapter.image,
    title: chapter.title,
    year: chapter.year,
  })),
  ...extraMemories,
];

export default function OurStory() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const closePhoto = () => setSelectedPhoto(null);

  const previousPhoto = () => {
    setSelectedPhoto((current) =>
      current === null
        ? null
        : (current - 1 + allPhotos.length) % allPhotos.length
    );
  };

  const nextPhoto = () => {
    setSelectedPhoto((current) =>
      current === null ? null : (current + 1) % allPhotos.length
    );
  };

  useEffect(() => {
    if (selectedPhoto === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePhoto();
      if (event.key === "ArrowLeft") previousPhoto();
      if (event.key === "ArrowRight") nextPhoto();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedPhoto]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#10091c] px-5 pb-20 pt-20 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-120px] top-32 h-96 w-96 rounded-full bg-purple-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-120px] top-[45%] h-96 w-96 rounded-full bg-pink-500/10 blur-[120px]" />

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-4xl py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-7 inline-flex items-center gap-3 rounded-full border border-pink-300/20 bg-pink-300/5 px-5 py-3 text-xs font-semibold tracking-[0.3em] text-pink-200"
        >
          <Sparkles size={15} />
          OUR STORY
          <Heart size={15} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-black leading-tight sm:text-7xl"
        >
          Nine Years of
          <br />
          <span className="gradient-text">Beautiful Us</span>
        </motion.h1>

        <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-purple-100/60 sm:text-base">
          Some friendships are written in the stars. Ours is a story of
          laughter, love, unforgettable memories and a bond I will always
          treasure.
        </p>

        <div className="mt-9 flex items-center justify-center gap-4 text-pink-300">
          <Star size={17} />
          <Heart size={25} className="fill-pink-400/20" />
          <Star size={17} />
        </div>
      </section>

      {/* Timeline */}
      <section className="relative z-10 mx-auto max-w-6xl py-10">
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-pink-300">
            CHAPTERS OF US
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Our journey through time
          </h2>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-pink-400/0 via-pink-400/40 to-purple-400/0 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-20">
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className={`relative grid items-center gap-8 pl-12 sm:grid-cols-2 sm:pl-0 ${
                  index % 2 === 0 ? "" : "sm:[&>div:first-child]:order-2"
                }`}
              >
                <div
                  className={`absolute left-[9px] top-8 z-10 flex h-3 w-3 items-center justify-center rounded-full bg-pink-300 shadow-[0_0_15px_rgba(244,114,182,0.8)] sm:left-1/2 sm:-translate-x-1/2`}
                />

                <div
                  className={`${
                    index % 2 === 0
                      ? "sm:pr-14 sm:text-right"
                      : "sm:pl-14 sm:text-left"
                  }`}
                >
                  <p className="text-5xl font-black text-pink-300/80 sm:text-6xl">
                    {chapter.year}
                  </p>
                  <p className="mt-3 text-xs font-bold tracking-[0.3em] text-purple-300">
                    {chapter.label}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                    {chapter.title}
                  </h3>
                  <p className="mt-5 text-sm leading-8 text-purple-100/60">
                    {chapter.description}
                  </p>
                  <p className="mt-5 text-sm italic leading-7 text-pink-200/80">
                    “{chapter.quote}”
                  </p>
                </div>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => setSelectedPhoto(index)}
                  className={`group relative overflow-hidden rounded-3xl border border-pink-300/20 bg-white/5 p-2 text-left shadow-xl transition hover:border-pink-300/50 ${
                    index % 2 === 0
                      ? "sm:ml-14"
                      : "sm:mr-14 sm:[&]:order-1"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-purple-950/50">
                    <img
                      src={chapter.image}
                      alt={chapter.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-semibold text-white">
                      <Camera size={17} />
                      View Memory
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra memories */}
      <section className="relative z-10 mx-auto max-w-6xl py-24">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-pink-300">
            LITTLE PIECES OF FOREVER
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            More moments, more memories
          </h2>
          <p className="mt-4 text-sm text-purple-100/55">
            A few more little treasures from our journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {extraMemories.map((memory, index) => (
            <motion.button
              key={memory.image}
              type="button"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedPhoto(chapters.length + index)}
              className="group overflow-hidden rounded-3xl border border-pink-300/15 bg-white/[0.04] text-left transition hover:border-pink-300/40"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={memory.image}
                  alt={memory.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10091c] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="text-xs tracking-[0.2em] text-pink-300">
                    {memory.year}
                  </p>
                  <h3 className="mt-2 text-lg font-bold">{memory.title}</h3>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Ending */}
      <section className="relative z-10 mx-auto max-w-4xl px-2 py-24 text-center">
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-pink-300/20 bg-pink-400/10 text-pink-200 shadow-[0_0_35px_rgba(236,72,153,0.2)]"
        >
          <Heart size={36} className="fill-pink-400/30" />
        </motion.div>

        <p className="text-xs font-semibold tracking-[0.35em] text-pink-300">
          AND THIS IS NOT THE END
        </p>

        <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
          To many more years
          <br />
          <span className="gradient-text">together.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-purple-100/65 sm:text-base">
          If I could choose my favourite person all over again, I would still
          choose you. Thank you for being my best friend, my comfort and my
          chosen family. Whatever the future holds, I hope our story keeps
          growing.
        </p>

        <p className="mt-9 text-lg font-semibold text-pink-200">
          Forever your bestie ♡
        </p>

        <div className="mx-auto my-12 h-px max-w-xs bg-gradient-to-r from-transparent via-pink-300/40 to-transparent" />

        <p className="text-xs font-semibold tracking-[0.3em] text-pink-300">
          A FOREVER PROMISE
        </p>

        <h3 className="mt-5 text-3xl font-bold">
          Made with endless love
        </h3>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-purple-100/55">
          For my forever bestie — thank you for being my safe place, my
          happiness and one of the most beautiful parts of my life.
        </p>

        <div className="mt-12 flex items-center justify-center gap-3 text-pink-300">
          <Sparkles size={18} />
          <Heart size={20} />
          <Sparkles size={18} />
        </div>

        <p className="mt-6 text-xs font-bold tracking-[0.25em] text-pink-200">
          BESTIE UNIVERSE ✦ 2K18 — 2K26
        </p>

        <p className="mt-4 text-sm text-purple-200/50">
          One friendship. A million memories. Forever. ♡
        </p>

        <p className="mt-8 text-[10px] tracking-[0.3em] text-pink-300/40">
          MADE WITH LOVE · 2018 — ∞
        </p>
      </section>

      {/* Back to top */}
      <div className="relative z-10 text-center">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-400/5 px-6 py-3 text-sm text-pink-200 transition hover:bg-pink-400/15"
        >
          <ArrowLeft size={16} />
          Back to the beginning
        </button>
      </div>

      {/* Fullscreen photo viewer */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePhoto}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
          >
            <button
              type="button"
              aria-label="Close photo"
              onClick={closePhoto}
              className="absolute right-5 top-5 z-20 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-pink-500/30"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              aria-label="Previous photo"
              onClick={(event) => {
                event.stopPropagation();
                previousPhoto();
              }}
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-pink-500/30 sm:left-8"
            >
              <ChevronLeft size={25} />
            </button>

            <motion.div
              key={selectedPhoto}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(event) => event.stopPropagation()}
              className="flex max-h-[90vh] w-full max-w-5xl flex-col items-center justify-center"
            >
              <img
                src={allPhotos[selectedPhoto].image}
                alt={allPhotos[selectedPhoto].title}
                className="max-h-[72vh] max-w-full rounded-xl object-contain shadow-[0_0_50px_rgba(236,72,153,0.15)]"
              />

              <div className="mt-5 text-center">
                <p className="text-xs font-semibold tracking-[0.25em] text-pink-300">
                  {allPhotos[selectedPhoto].year}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {allPhotos[selectedPhoto].title}
                </h3>
                <p className="mt-3 text-xs text-pink-200/50">
                  {selectedPhoto + 1} / {allPhotos.length}
                </p>
              </div>
            </motion.div>

            <button
              type="button"
              aria-label="Next photo"
              onClick={(event) => {
                event.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-pink-500/30 sm:right-8"
            >
              <ChevronRight size={25} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
