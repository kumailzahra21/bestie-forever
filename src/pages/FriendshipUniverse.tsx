
import { useState } from "react";
import {
    Heart,
    Sparkles,
    Star,
    X,
    ChevronRight,
    Orbit,
    Moon,
    Infinity as InfinityIcon,
    Plane,
} from "lucide-react";

const planets = [
    {
        id: 1,
        name: "Pink Planet",
        subtitle: "The Beginning of Us",
        date: "April 2018",
        emoji: "💗",
        icon: Heart,
        color: "#ff6bba",
        story: `April 2018... the beginning of a beautiful friendship.

When I joined 9th class at Government Girls School Tando Muhammad Khan, I never imagined that one quiet girl named Muskan would become such an important part of my life.

At first, I was shy. Slowly, we started interacting, especially during chemistry lab challenges. I used little excuses to talk to her. Sometimes Neha became my excuse, but honestly, I wanted Muskan's friendship.

I wanted her to talk to me, notice me, and become my friend. Without realizing it, she was becoming special to me.`,
        closing: "Some people enter our lives quietly and become our whole universe. 💗",
    },
    {
        id: 2,
        name: "Purple Planet",
        subtitle: "Unspoken Feelings",
        date: "Matric & Intermediate",
        emoji: "💜",
        icon: Star,
        color: "#ad83ff",
        story: `Our school days were full of little moments, laughter, and sometimes hurt.

During matric, I always wanted to sit beside Muskan. Even small things mattered to me, but sometimes other people came between us.

There were moments when people said things, and I stayed silent even when I felt like crying.

In intermediate, we had opportunities to meet, but we were not together every day. I slowly stopped talking because I thought she was happier with other friends.

Maybe I misunderstood things. Maybe I was afraid of losing her. But I never stopped caring.`,
        closing: "Even silence could not erase the feelings in my heart. 💜",
    },
    {
        id: 3,
        name: "Memory Planet",
        subtitle: "Finding Each Other Again",
        date: "2023 – 2025",
        emoji: "🌸",
        icon: Plane,
        color: "#ff91a8",
        story: `Then came 2023.

I started my job, and somehow our friendship found its way back into my life.

We started talking again. There were arguments, jealousy, possessiveness, and so many emotions. Sometimes I did not know how to express how much I cared.

And then came our beautiful memories: Karachi, Mulakatiar, Hyderabad, and all those moments that I wish I could live again.

January 2025 became especially memorable because of our last school trip together.

Those memories are not just pictures. They are little pieces of my heart.`,
        closing: "If I could replay one chapter, I would choose our memories again. 🌸",
    },
    {
        id: 4,
        name: "Moon Planet",
        subtitle: "Fights, Tears & Sorry",
        date: "Eid-ul-Adha",
        emoji: "🌙",
        icon: Moon,
        color: "#82b9ff",
        story: `Not every chapter was perfect.

Sometimes I became possessive. Sometimes I misunderstood her silence. Sometimes little things turned into big arguments.

Our Eid-ul-Adha fight about pictures hurt me so much. I thought she was ignoring me, so I held back the pictures too. She did not send hers either, and everything became more painful.

When Muskan stops talking, I feel lonely. I miss her, sometimes cry, and keep wishing things could become normal again.

I know I make mistakes. I am genuinely sorry for every moment when my words or actions hurt her.`,
        closing: "I never wanted to win an argument. I only wanted to keep our friendship. 🫂",
    },
    {
        id: 5,
        name: "Forever Planet",
        subtitle: "Our Endless Universe",
        date: "Forever & Always",
        emoji: "♾️",
        icon: InfinityIcon,
        color: "#ffcf70",
        story: `Muskan, you are not just a friend in my life.

You are a person I love, care about, and feel deeply attached to. I may not always express myself perfectly, but my feelings are real.

I promise to keep making efforts, to message you, to understand you better, and to never forget the beautiful bond we share.

I do not want distance, ego, or misunderstandings to become bigger than our friendship.

No matter how many planets exist in this universe, my favourite universe will always be our friendship.

Dil Ka Rishta. ❤️`,
        closing: "Different moments, different stories, one forever friendship. ❤️",
    },
];

export default function FriendshipUniverse() {
    const [selected, setSelected] = useState<number | null>(null);
    const [alienMessage, setAlienMessage] = useState(
        "Welcome to Muskan's Friendship Universe! Choose a planet to discover your story. 👽"
    );

    const activePlanet = planets.find((planet) => planet.id === selected);

    const messages = [
        "Every planet holds a beautiful memory! ✨",
        "Some friendships are written in the stars. 💗",
        "Keep exploring your friendship universe! 🌌",
        "Muskan's friendship is a galaxy of memories! 🪐",
    ];

    const nextPlanet = () => {
        if (selected === null) {
            setSelected(1);
            return;
        }
        setSelected(selected === 5 ? 1 : selected + 1);
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#09051b] px-4 py-12 text-white">
            <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: .25; transform: scale(.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 15px #d946ef55; }
          50% { box-shadow: 0 0 35px #d946efaa; }
        }
        .universe-star {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: white;
          animation: twinkle 3s infinite ease-in-out;
        }
        .planet-float { animation: float 4s ease-in-out infinite; }
        .planet-ring { animation: rotateRing 12s linear infinite; }
        .planet-glow { animation: glow 3s infinite ease-in-out; }
      `}</style>

            <div className="pointer-events-none absolute inset-0">
                {Array.from({ length: 65 }).map((_, i) => (
                    <span
                        key={i}
                        className="universe-star"
                        style={{
                            left: `${(i * 37) % 100}%`,
                            top: `${(i * 61) % 100}%`,
                            animationDelay: `${(i % 7) * 0.4}s`,
                        }}
                    />
                ))}
                <div className="absolute left-[-100px] top-20 h-80 w-80 rounded-full bg-purple-700/20 blur-[100px]" />
                <div className="absolute bottom-0 right-[-100px] h-96 w-96 rounded-full bg-pink-600/20 blur-[110px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl">
                <header className="mb-12 text-center">
                    <div className="mb-4 flex justify-center">
                        <div className="rounded-full border border-pink-300/30 bg-pink-300/10 p-4">
                            <Orbit className="h-9 w-9 text-pink-300" />
                        </div>
                    </div>

                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-purple-300">
                        A Galaxy Made of Memories
                    </p>

                    <h1 className="bg-gradient-to-r from-pink-300 via-purple-200 to-yellow-200 bg-clip-text text-4xl font-black text-transparent sm:text-6xl">
                        MUSKAN'S FRIENDSHIP
                    </h1>
                    <h2 className="mt-2 text-3xl font-black text-white sm:text-5xl">
                        UNIVERSE ✨
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-purple-200 sm:text-lg">
                        Five magical planets. Countless memories. One bond that deserves
                        its own universe.
                    </p>
                </header>

                <div className="mx-auto mb-12 flex max-w-2xl items-center gap-4 rounded-2xl border border-purple-300/20 bg-white/5 p-4 backdrop-blur-md">
                    <div className="planet-float text-4xl">👽</div>
                    <div className="flex-1">
                        <p className="text-xs font-bold uppercase tracking-widest text-pink-300">
                            Your Galaxy Guide
                        </p>
                        <p className="mt-1 text-sm leading-6 text-purple-100">
                            {alienMessage}
                        </p>
                    </div>
                    <button
                        onClick={() =>
                            setAlienMessage(
                                messages[Math.floor(Math.random() * messages.length)]
                            )
                        }
                        className="rounded-full bg-purple-500/20 px-3 py-2 text-xs font-bold text-pink-200 hover:bg-purple-500/40"
                    >
                        Surprise!
                    </button>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {planets.map((planet) => {
                        const PlanetIcon = planet.icon;

                        return (
                            <button
                                key={planet.id}
                                onClick={() => {
                                    setSelected(planet.id);
                                    setAlienMessage(
                                        `You discovered ${planet.name}! Open your heart and enjoy this memory. ${planet.emoji}`
                                    );
                                }}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-left backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-pink-300/50 hover:bg-white/10"
                            >
                                <div
                                    className="planet-glow relative mx-auto mb-6 flex h-36 w-36 items-center justify-center rounded-full"
                                    style={{
                                        background: `radial-gradient(circle at 30% 25%, white, ${planet.color} 35%, #29134d 85%)`,
                                    }}
                                >
                                    <div
                                        className="planet-ring absolute h-40 w-16 rounded-[50%] border-2 opacity-60"
                                        style={{ borderColor: planet.color }}
                                    />
                                    <span className="text-5xl drop-shadow-lg">{planet.emoji}</span>
                                    <div className="absolute bottom-3 right-3 rounded-full bg-black/30 p-2">
                                        <PlanetIcon size={18} />
                                    </div>
                                </div>

                                <p
                                    className="text-center text-xs font-bold uppercase tracking-[0.25em]"
                                    style={{ color: planet.color }}
                                >
                                    {planet.date}
                                </p>
                                <h3 className="mt-2 text-center text-2xl font-black">
                                    {planet.name}
                                </h3>
                                <p className="mt-2 text-center text-sm text-purple-200">
                                    {planet.subtitle}
                                </p>

                                <div className="mt-5 flex items-center justify-center gap-2 text-sm font-bold text-pink-200">
                                    Explore Memory <ChevronRight size={16} />
                                </div>
                            </button>
                        );
                    })}
                </div>

                <div className="mt-14 text-center">
                    <div className="mb-3 flex justify-center">
                        <Sparkles className="text-yellow-200" size={26} />
                    </div>
                    <p className="text-lg font-bold text-pink-200">
                        "In a universe full of stars, some bonds shine differently."
                    </p>
                    <p className="mt-3 text-sm tracking-widest text-purple-300">
                        MADE WITH LOVE • DIL KA RISHTA
                    </p>
                </div>
            </div>

            {activePlanet && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="relative my-auto w-full max-w-2xl rounded-3xl border border-pink-300/30 bg-[#170d32] p-6 shadow-2xl sm:p-10"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-pink-500/30"
                            aria-label="Close story"
                        >
                            <X size={22} />
                        </button>

                        <div className="mb-5 text-center">
                            <div className="mb-3 text-6xl">{activePlanet.emoji}</div>
                            <p
                                className="text-xs font-bold uppercase tracking-[0.3em]"
                                style={{ color: activePlanet.color }}
                            >
                                {activePlanet.date}
                            </p>
                            <h2 className="mt-2 text-3xl font-black text-white">
                                {activePlanet.name}
                            </h2>
                            <p className="mt-2 text-purple-200">
                                {activePlanet.subtitle}
                            </p>
                        </div>

                        <div className="my-6 h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent" />

                        <div className="whitespace-pre-line text-base leading-8 text-purple-100">
                            {activePlanet.story}
                        </div>

                        <div className="mt-7 rounded-2xl border border-pink-300/20 bg-pink-400/10 p-5 text-center">
                            <Heart className="mx-auto mb-3 text-pink-300" size={24} />
                            <p className="font-bold leading-7 text-pink-100">
                                {activePlanet.closing}
                            </p>
                        </div>

                        <button
                            onClick={nextPlanet}
                            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 font-bold text-white shadow-lg transition hover:scale-[1.02]"
                        >
                            Explore Next Planet <ChevronRight size={19} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
