
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  Images,
  BookHeart,
  Heart,
  Mail,
  LockKeyhole,
  Menu,
  X,
  Music,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import Welcome from "./pages/Welcome";
import MemoryLane from "./pages/MemoryLane";
import OurStory from "./pages/OurStory";
import TrueValue from "./pages/TrueValue";
import SorryPage from "./pages/SorryPage";
import FriendshipUniverse from "./pages/FriendshipUniverse";
import SecretDiary from "./pages/SecretDiary";

type Page =
  | "home"
  | "memories"
  | "story"
  | "value"
  | "sorry"
  | "universe"
  | "diary";

const pages = [
  { id: "home" as Page, label: "Home", icon: Home },
  { id: "memories" as Page, label: "Memory Lane", icon: Images },
  { id: "story" as Page, label: "Our Story", icon: BookHeart },
  { id: "value" as Page, label: "Your Value", icon: Heart },
  { id: "sorry" as Page, label: "A Thousand Sorrys", icon: Mail },
  { id: "universe" as Page, label: "Friendship Universe", icon: Sparkles },
  { id: "diary" as Page, label: "Secret Diary", icon: LockKeyhole },
];

const musicFile =
  "/music/Yariyaan%20%28Ost%20Ehd%20E%20Wafa%29%28KoshalWorld.Com%29.mp3";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(musicFile);
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const goToPage = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
    } else {
      try {
        await audio.play();
        setMusicPlaying(true);
      } catch (error) {
        console.error("Music could not play:", error);
        setMusicPlaying(false);
      }
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <Welcome onEnter={() => goToPage("memories")} />
        );

      case "memories":
        return (
          <MemoryLane onContinue={() => goToPage("story")} />
        );

      case "story":
        return <OurStory />;

      case "value":
        return <TrueValue />;

      case "sorry":
        return <SorryPage />;

      case "universe":
        return <FriendshipUniverse />;

      case "diary":
        return <SecretDiary />;

      default:
        return (
          <Welcome onEnter={() => goToPage("memories")} />
        );
    }
  };

  const currentIndex = pages.findIndex(
    (page) => page.id === currentPage
  );

  const goPrevious = () => {
    if (currentIndex > 0) {
      goToPage(pages[currentIndex - 1].id);
    }
  };

  const goNext = () => {
    if (currentIndex < pages.length - 1) {
      goToPage(pages[currentIndex + 1].id);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#100b27] text-white">

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-600/15 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#100b27]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">

          <button
            onClick={() => goToPage("home")}
            className="flex items-center gap-2 text-lg font-black tracking-wide text-pink-300"
          >
            <Heart size={22} fill="currentColor" />
            MUSKAN
          </button>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {pages.map((page) => {
              const Icon = page.icon;

              return (
                <button
                  key={page.id}
                  onClick={() => goToPage(page.id)}
                  className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition ${currentPage === page.id
                      ? "bg-pink-500/20 text-pink-200"
                      : "text-purple-200 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  <Icon size={15} />
                  {page.label}
                </button>
              );
            })}
          </nav>

          {/* Music and mobile menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMusic}
              className="flex items-center gap-2 rounded-full border border-pink-300/30 bg-pink-500/10 px-3 py-2 text-sm text-pink-200 transition hover:bg-pink-500/20"
              aria-label="Toggle music"
            >
              <Music size={17} />
              <span className="hidden sm:inline">
                {musicPlaying ? "Music On" : "Music Off"}
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-xl border border-white/10 p-2 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10 bg-[#17102f] px-4 lg:hidden"
            >
              <div className="mx-auto grid max-w-7xl gap-2 py-4 sm:grid-cols-2">
                {pages.map((page) => {
                  const Icon = page.icon;

                  return (
                    <button
                      key={page.id}
                      onClick={() => goToPage(page.id)}
                      className={`flex items-center gap-3 rounded-xl p-3 text-left ${currentPage === page.id
                          ? "bg-pink-500/20 text-pink-200"
                          : "text-purple-200 hover:bg-white/10"
                        }`}
                    >
                      <Icon size={18} />
                      {page.label}
                    </button>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Page content */}
      <main className="relative z-10 min-h-[75vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 sm:flex-row">

          <p className="text-center text-sm text-purple-300">
            Made with 💗 for a friendship that means forever.
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={goPrevious}
              disabled={currentIndex === 0}
              className="flex items-center gap-1 rounded-full border border-white/10 px-4 py-2 text-sm text-purple-200 transition hover:bg-white/10 disabled:opacity-30"
            >
              <ChevronLeft size={16} />
              Previous
            </button>

            <span className="text-xs text-purple-400">
              {currentIndex + 1} / {pages.length}
            </span>

            <button
              onClick={goNext}
              disabled={currentIndex === pages.length - 1}
              className="flex items-center gap-1 rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-2 text-sm text-pink-200 transition hover:bg-pink-500/20 disabled:opacity-30"
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <p className="mt-5 text-center text-xs tracking-widest text-purple-500">
          FOREVER BESTIES ✦ MUSKAN UNIVERSE
        </p>
      </footer>
    </div>
  );
}
