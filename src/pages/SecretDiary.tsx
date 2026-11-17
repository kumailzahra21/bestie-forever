
import { useEffect, useRef, useState } from "react";
import {
    Heart,
    LockKeyhole,
    Sparkles,
    Music2,
    Plane,
    BookOpen,
    Star,
    MessageCircleHeart,
    Gift,
    Clock3,
    X,
    ChevronRight,
    Infinity,
} from "lucide-react";

const conversations = [
    { from: "Bestie", message: "Do you know that you are one of my favourite people in this world? 💗" },
    { from: "Me", message: "And do you know that my world feels incomplete without you? 🥺" },
    { from: "Bestie", message: "Remember our school days? We really made the best memories!" },
    { from: "Me", message: "Our first trip in 2024 will always have a special place in my heart. ✈️" },
    { from: "Bestie", message: "And January 2025! Another trip, another chapter of our story!" },
    { from: "Me", message: "I wish I could relive every little moment with you again. ♾️" },
    { from: "Bestie", message: "Even our silly fights are memories now. 😂" },
    { from: "Me", message: "Especially those paper-checking fights! We fought like enemies and laughed like best friends." },
    { from: "Bestie", message: "Promise me we will never let little misunderstandings break us?" },
    { from: "Me", message: "Forever. You are not just my friend, you are my favourite part of so many memories. 🤍" },
];

const secrets = [
    {
        id: 1,
        icon: Plane,
        title: "Our Most Special Moment",
        subtitle: "Two trips, one beautiful friendship",
        question: "What is your most special moment with me?",
        answer:
            "My most special memories are our first school trip in 2024 and our second trip in January 2025. Those moments were so precious because I got to experience them with you. The laughter, the little adventures, the pictures and all those silly things — I wish I could go back and live those days again. You made those trips unforgettable. 💗",
        color: "from-pink-500 to-purple-600",
    },
    {
        id: 2,
        icon: Sparkles,
        title: "My Weird Habits",
        subtitle: "Things you find funny about me",
        question: "Which things about me seem weird to you?",
        answer:
            "Your anger is definitely one of your funniest features! 😂 Sometimes you get angry so quickly, and your moods can change in seconds. You can be laughing one moment and acting completely serious the next. Sometimes you mix up so many things at once! But honestly, these little things make you YOU. Even your weird habits are special to me.",
        color: "from-violet-500 to-fuchsia-600",
    },
    {
        id: 3,
        icon: BookOpen,
        title: "The School Fight Story",
        subtitle: "The unforgettable paper-checking days",
        question: "When did we fight the most at school?",
        answer:
            "Definitely when our papers were being checked! 😂 Those paper-checking moments caused so many arguments between us. We would get annoyed, disagree over little things and sometimes start fighting for the silliest reasons. But look at us now — those arguments have become some of our funniest school memories. I would not trade those days for anything.",
        color: "from-blue-500 to-purple-600",
    },
    {
        id: 4,
        icon: Heart,
        title: "Why I Love You",
        subtitle: "The answer from my heart",
        question: "Why do you love me so much?",
        answer:
            "Because I see love, care and comfort in you. I feel a special attraction towards your personality, and somewhere along the way I became deeply attached to you. You make me feel understood, happy and connected. I have grown so used to having you in my life that even imagining distance between us hurts. It is not just friendship anymore — it is a bond I never want to lose. You are genuinely so special to me. 🤍",
        color: "from-rose-500 to-pink-600",
    },
    {
        id: 5,
        icon: MessageCircleHeart,
        title: "One Thing That Hurts",
        subtitle: "A little truth I hide inside",
        question: "What makes you sad about our friendship?",
        answer:
            "There is one thing that hurts me deeply. Whenever we fight and you become quiet, sometimes for days, I feel so alone. I miss you a lot. Sometimes tears come into my eyes because I do not know how to make everything normal again. I keep thinking about you and waiting for us to talk. I know we can disagree sometimes, but please never let silence create distance between us. I need you to know that even when we fight, I still love you and miss you. 🥺",
        color: "from-indigo-500 to-purple-700",
    },
];

const memories = [
    {
        date: "2024",
        title: "Our First School Trip",
        description: "The first adventure, endless laughter and memories I will always treasure.",
        icon: "✈️",
    },
    {
        date: "JANUARY 2025",
        title: "Our Second Trip",
        description: "Another beautiful journey with my favourite person by my side.",
        icon: "🌸",
    },
    {
        date: "FOREVER",
        title: "Our Friendship",
        description: "A story that I hope keeps growing with every passing year.",
        icon: "♾️",
    },
];

export default function SecretDiary() {
    const [activeMessage, setActiveMessage] = useState(0);
    const [openSecret, setOpenSecret] = useState<number | null>(null);
    const [musicOn, setMusicOn] = useState(false);
    const [showPromise, setShowPromise] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const conversationTimer = window.setInterval(() => {
            setActiveMessage((previous) => (previous + 1) % conversations.length);
        }, 3500);

        return () => window.clearInterval(conversationTimer);
    }, []);

    const toggleMusic = async () => {
        if (!audioRef.current) {
            audioRef.current = new Audio(
                "/music/Yariyaan%20%28Ost%20Ehd%20E%20Wafa%29%28KoshalWorld.Com%29.mp3"
            );
            audioRef.current.loop = true;
            audioRef.current.volume = 0.35;
        }

        if (musicOn) {
            audioRef.current.pause();
            setMusicOn(false);
        } else {
            try {
                await audioRef.current.play();
                setMusicOn(true);
            } catch {
                setMusicOn(false);
            }
        }
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#100b27] px-4 py-12 text-white">
            <style>{`
        @keyframes diaryFloat {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-13px); }
        }
        @keyframes diaryTwinkle {
          0%,100% { opacity: .25; transform: scale(.8); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes diaryGlow {
          0%,100% { box-shadow: 0 0 15px #c084fc33; }
          50% { box-shadow: 0 0 35px #ec489966; }
        }
        @keyframes diaryShine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .diary-float { animation: diaryFloat 4s ease-in-out infinite; }
        .diary-twinkle { animation: diaryTwinkle 2.5s ease-in-out infinite; }
        .diary-glow { animation: diaryGlow 3s ease-in-out infinite; }
        .diary-card {
          background: linear-gradient(145deg, rgba(48,27,83,.88), rgba(25,16,53,.96));
          border: 1px solid rgba(216,180,254,.22);
          backdrop-filter: blur(14px);
        }
        .diary-shine {
          background: linear-gradient(110deg, transparent 25%, rgba(255,255,255,.12) 50%, transparent 75%);
          background-size: 200% 100%;
          animation: diaryShine 5s linear infinite;
        }
        .secret-scroll { scroll-margin-top: 30px; }
      `}</style>

            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-purple-700/20 blur-[100px]" />
                <div className="absolute -right-32 top-[35%] h-96 w-96 rounded-full bg-pink-600/15 blur-[110px]" />
                <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-700/15 blur-[100px]" />
                {Array.from({ length: 35 }).map((_, index) => (
                    <Star
                        key={index}
                        size={index % 3 === 0 ? 12 : 7}
                        className="diary-twinkle absolute text-purple-200/60"
                        style={{
                            left: `${(index * 37) % 100}%`,
                            top: `${(index * 53) % 100}%`,
                            animationDelay: `${(index % 7) * 0.35}s`,
                        }}
                    />
                ))}
            </div>

            {/* Music player */}
            <button
                onClick={toggleMusic}
                className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full border border-pink-300/30 bg-[#21143e]/90 px-4 py-3 text-sm font-bold text-pink-200 shadow-lg shadow-pink-900/30 backdrop-blur-xl transition hover:scale-105"
            >
                <Music2 size={18} className={musicOn ? "animate-bounce" : ""} />
                {musicOn ? "Music Playing" : "Play Our Song"}
            </button>

            <div className="relative z-10 mx-auto max-w-6xl">
                {/* Main heading */}
                <header className="mb-16 pt-12 text-center">
                    <div className="diary-float mb-5 inline-flex rounded-2xl border border-pink-300/30 bg-pink-400/10 p-5 text-pink-200">
                        <LockKeyhole size={34} />
                    </div>

                    <p className="mb-4 text-xs font-black uppercase tracking-[.45em] text-purple-300 sm:text-sm">
                        A little world that belongs to us
                    </p>

                    <h1 className="text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
                        <span className="bg-gradient-to-r from-pink-300 via-purple-200 to-fuchsia-400 bg-clip-text text-transparent">
                            Secret Diary
                        </span>
                        <br />
                        <span className="text-white">Of Us</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-purple-200 sm:text-lg">
                        Some memories are too precious to be ordinary stories.
                        They deserve their own little secret world. 💗
                    </p>

                    <div className="mt-7 flex flex-wrap justify-center gap-3">
                        {["Two besties", "One crazy bond", "A million memories"].map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-purple-300/20 bg-purple-400/10 px-4 py-2 text-xs font-bold text-purple-200"
                            >
                                ✨ {item}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Automatic conversation */}
                <section className="diary-card diary-glow mx-auto mb-20 max-w-4xl rounded-[2rem] p-5 sm:p-9">
                    <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-pink-400/15 p-3 text-pink-300">
                                <MessageCircleHeart size={25} />
                            </div>
                            <div>
                                <h2 className="text-xl font-black text-white sm:text-2xl">
                                    Our Little Conversations
                                </h2>
                                <p className="text-xs text-purple-300">A friendship that never runs out of words</p>
                            </div>
                        </div>
                        <span className="rounded-full border border-green-300/20 bg-green-400/10 px-3 py-1 text-xs font-bold text-green-300">
                            ● LIVE CHAT
                        </span>
                    </div>

                    <div className="min-h-[230px] space-y-4 rounded-2xl border border-purple-300/15 bg-[#100b27]/60 p-4 sm:p-6">
                        {conversations.map((chat, index) => {
                            const isMe = chat.from === "Me";
                            const isVisible =
                                index === activeMessage ||
                                index === (activeMessage - 1 + conversations.length) % conversations.length;

                            if (!isVisible) return null;

                            return (
                                <div
                                    key={index}
                                    className={`flex ${isMe ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[90%] rounded-2xl px-4 py-3 sm:max-w-[78%] ${isMe
                                                ? "rounded-br-sm border border-pink-300/20 bg-gradient-to-r from-pink-600/40 to-purple-600/40"
                                                : "rounded-bl-sm border border-purple-300/20 bg-purple-500/15"
                                            }`}
                                    >
                                        <p className={`mb-1 text-xs font-black ${isMe ? "text-pink-200" : "text-purple-200"}`}>
                                            {isMe ? "YOU 💗" : "YOUR BESTIE 🤍"}
                                        </p>
                                        <p className="text-sm leading-7 text-white sm:text-base">
                                            {chat.message}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3">
                        <p className="text-xs text-purple-300">
                            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-pink-400" />
                            New memory loading every few seconds...
                        </p>
                        <span className="text-xs font-bold text-pink-300">
                            {activeMessage + 1} / {conversations.length}
                        </span>
                    </div>
                </section>

                {/* Secret questions */}
                <section className="secret-scroll mb-20" id="secrets">
                    <div className="mb-10 text-center">
                        <span className="mb-3 inline-block rounded-full border border-pink-300/20 bg-pink-400/10 px-4 py-2 text-xs font-black uppercase tracking-[.3em] text-pink-200">
                            <LockKeyhole className="mr-2 inline" size={14} />
                            Classified: Bestie Only
                        </span>
                        <h2 className="text-3xl font-black sm:text-5xl">
                            <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                                Open Our Secret Boxes
                            </span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-purple-200 sm:text-base">
                            Every box holds a question, a memory or a little truth from my heart.
                            Tap any box to discover what is inside. 💌
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {secrets.map((secret) => {
                            const Icon = secret.icon;
                            const isOpen = openSecret === secret.id;

                            return (
                                <button
                                    key={secret.id}
                                    onClick={() => setOpenSecret(isOpen ? null : secret.id)}
                                    className={`diary-card group relative overflow-hidden rounded-3xl p-6 text-left transition duration-300 hover:-translate-y-2 hover:border-pink-300/50 ${isOpen ? "border-pink-300/60 shadow-xl shadow-pink-900/20" : ""
                                        }`}
                                >
                                    <div className="diary-shine pointer-events-none absolute inset-0 opacity-30" />
                                    <div className={`mb-5 inline-flex rounded-2xl bg-gradient-to-br ${secret.color} p-4 text-white shadow-lg`}>
                                        <Icon size={27} />
                                    </div>

                                    <div className="relative">
                                        <p className="mb-2 text-xs font-black uppercase tracking-[.2em] text-pink-300">
                                            SECRET #{secret.id}
                                        </p>
                                        <h3 className="text-xl font-black text-white">{secret.title}</h3>
                                        <p className="mt-2 text-sm text-purple-200">{secret.subtitle}</p>

                                        <div className="mt-6 flex items-center justify-between border-t border-purple-300/15 pt-4">
                                            <span className="text-sm font-bold text-pink-200">
                                                {isOpen ? "Close secret" : "Unlock secret"}
                                            </span>
                                            {isOpen ? <X size={18} /> : <ChevronRight size={19} />}
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {openSecret !== null && (
                        <div className="diary-card mt-8 rounded-[2rem] border border-pink-300/40 p-6 shadow-2xl shadow-purple-950/40 sm:p-10">
                            <div className="mb-6 flex items-center justify-between">
                                <span className="rounded-full bg-pink-400/15 px-4 py-2 text-xs font-black tracking-widest text-pink-200">
                                    <LockKeyhole className="mr-2 inline" size={14} />
                                    SECRET UNLOCKED
                                </span>
                                <button
                                    onClick={() => setOpenSecret(null)}
                                    className="rounded-full bg-white/10 p-2 text-purple-200 transition hover:bg-pink-400/20 hover:text-white"
                                    aria-label="Close secret"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <h3 className="text-2xl font-black leading-snug text-white sm:text-3xl">
                                {secrets.find((secret) => secret.id === openSecret)?.question}
                            </h3>

                            <div className="my-6 h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent" />

                            <p className="text-base leading-8 text-purple-100 sm:text-lg">
                                {secrets.find((secret) => secret.id === openSecret)?.answer}
                            </p>

                            <p className="mt-7 text-right text-sm font-bold text-pink-300">
                                Written with love, just for you. 💗
                            </p>
                        </div>
                    )}
                </section>

                {/* Friendship timeline */}
                <section className="mb-20">
                    <div className="mb-10 text-center">
                        <div className="mb-4 inline-flex rounded-2xl border border-purple-300/20 bg-purple-400/10 p-4 text-purple-200">
                            <Clock3 size={28} />
                        </div>
                        <h2 className="text-3xl font-black sm:text-5xl">
                            Our Memory Timeline
                        </h2>
                        <p className="mt-3 text-sm text-purple-300">
                            Little dates, huge memories. ✨
                        </p>
                    </div>

                    <div className="mx-auto max-w-3xl space-y-5">
                        {memories.map((memory) => (
                            <div
                                key={memory.title}
                                className="diary-card flex gap-4 rounded-3xl p-5 transition hover:-translate-y-1 sm:gap-6 sm:p-7"
                            >
                                <div className="diary-float flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-pink-300/20 bg-pink-400/10 text-3xl">
                                    {memory.icon}
                                </div>
                                <div className="flex-1">
                                    <p className="mb-1 text-xs font-black tracking-[.25em] text-pink-300">
                                        {memory.date}
                                    </p>
                                    <h3 className="text-lg font-black text-white sm:text-xl">
                                        {memory.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-purple-200">
                                        {memory.description}
                                    </p>
                                </div>
                                <div className="hidden items-center text-purple-300/50 sm:flex">
                                    <Star size={20} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Promise box */}
                <section className="diary-card relative mx-auto mb-16 max-w-4xl overflow-hidden rounded-[2rem] p-7 text-center sm:p-12">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink-500/15 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

                    <div className="relative">
                        <div className="diary-float mb-6 inline-flex rounded-full border border-pink-300/30 bg-pink-400/10 p-5 text-pink-200">
                            <Heart size={34} fill="#f9a8d4" stroke="#fbcfe8" />
                        </div>

                        <p className="mb-3 text-xs font-black uppercase tracking-[.35em] text-pink-300">
                            A promise from my heart
                        </p>
                        <h2 className="text-3xl font-black leading-tight sm:text-5xl">
                            No Fight Is Bigger
                            <br />
                            <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                                Than Our Friendship
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-purple-100 sm:text-base">
                            We may get angry, misunderstand each other or have difficult days.
                            But I hope we always choose to talk, understand and find our way
                            back to each other. I never want a temporary fight to become a
                            permanent distance.
                        </p>

                        <button
                            onClick={() => setShowPromise(!showPromise)}
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-7 py-4 font-black text-white shadow-xl shadow-pink-950/30 transition hover:scale-105"
                        >
                            <Gift size={19} />
                            {showPromise ? "Hide My Promise" : "Open My Promise"}
                        </button>

                        {showPromise && (
                            <div className="mt-7 rounded-2xl border border-pink-300/30 bg-pink-400/10 p-6">
                                <Infinity className="mx-auto mb-3 text-pink-300" size={35} />
                                <p className="text-lg font-bold leading-8 text-pink-100">
                                    "No matter how many arguments we have, you will always be
                                    someone I choose, someone I miss and someone I never want
                                    to lose. Best friends, through every chapter." 💗
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Footer */}
                <footer className="pb-6 text-center">
                    <div className="mb-4 flex justify-center gap-3 text-pink-300">
                        <Heart size={17} fill="currentColor" />
                        <Sparkles size={17} />
                        <Heart size={17} fill="currentColor" />
                    </div>
                    <h3 className="text-2xl font-black text-white sm:text-3xl">
                        Our Story. Our Secrets. Our Forever.
                    </h3>
                    <p className="mt-3 text-sm text-purple-300">
                        Sealed with love, friendship and a million memories. 🔐
                    </p>
                    <p className="mt-5 text-xs font-bold tracking-[.3em] text-pink-300">
                        FOREVER & ALWAYS ♡
                    </p>
                </footer>
            </div>
        </main>
    );
}
