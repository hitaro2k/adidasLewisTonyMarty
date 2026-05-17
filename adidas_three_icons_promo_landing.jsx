import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BadgeCheck,
  ChevronRight,
  Flame,
  Gauge,
  Shield,
  ShoppingBag,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const videoSrc = "/ADIFINAL.mp4";

const personas = [
  {
    id: "tony",
    ambassador: "Tony Montana",
    archetype: "Ambitious",
    headline: "Ambitious by design.",
    line: "Choose ambition. Play like the room already belongs to you.",
    boot: "adidas F50",
    colorway: "Team Solar Yellow / Core Black / Lucid Red",
    price: 260,
    accent: "#fff23b",
    accent2: "#ff7a18",
    image: "/boots/adidas-f50-yellow-orange.png",
    imageAlt: "adidas F50 Team Solar Yellow football boots cutout",
    bg: "radial-gradient(circle at 22% 20%, rgba(255,242,59,0.24), transparent 34%), radial-gradient(circle at 80% 62%, rgba(255,122,24,0.28), transparent 34%), linear-gradient(135deg, #050505 0%, #161207 45%, #2b1000 100%)",
    card: "from-yellow-950 via-zinc-950 to-orange-950",
    traits: ["Explosive first step", "Yellow-orange speed shell", "Ambition with status energy"],
    icons: [Flame, Zap, BadgeCheck],
  },
  {
    id: "lewis",
    ambassador: "Lewis Hamilton",
    archetype: "Strong willed",
    headline: "Strong willed under pressure.",
    line: "Choose pressure. Move like every second is measured.",
    boot: "adidas Predator Elite FG",
    colorway: "Lucid Red / Core Black / Footwear White",
    price: 290,
    accent: "#b66cff",
    accent2: "#ff233d",
    image: "/boots/adidas-predator-elite-red.png",
    imageAlt: "red adidas Predator Elite FG football boots cutout",
    bg: "radial-gradient(circle at 18% 18%, rgba(182,108,255,0.30), transparent 34%), radial-gradient(circle at 82% 62%, rgba(255,35,61,0.30), transparent 34%), linear-gradient(135deg, #07000f 0%, #180026 48%, #260005 100%)",
    card: "from-violet-950 via-black to-red-950",
    traits: ["Race-mode precision", "Fully red strike energy", "Strong-willed pressure"],
    icons: [Gauge, Target, Shield],
  },
  {
    id: "marty",
    ambassador: "Marty Supreme",
    archetype: "Obsessed",
    headline: "Obsessed with the strike.",
    line: "Choose obsession. Stay after the light turns off.",
    boot: "adidas Predator Accuracy.1 FG",
    colorway: "Team Solar Orange / Core Black",
    price: 299,
    accent: "#ff4f00",
    accent2: "#ffb000",
    image: "/boots/adidas-predator-accuracy-orange.png",
    imageAlt: "orange adidas Predator Accuracy.1 FG football boots cutout",
    bg: "radial-gradient(circle at 20% 22%, rgba(255,79,0,0.34), transparent 34%), radial-gradient(circle at 78% 64%, rgba(255,176,0,0.28), transparent 34%), linear-gradient(135deg, #160500 0%, #281000 48%, #080502 100%)",
    card: "from-orange-950 via-black to-yellow-950",
    traits: ["Addicted to reps", "Toxic-orange precision", "Obsessed predator focus"],
    icons: [Target, Sparkles, Flame],
  },
];

const pricingTests = [
  { id: "tony", expected: 260 },
  { id: "lewis", expected: 290 },
  { id: "marty", expected: 299 },
];

const copyTests = [
  { id: "marty", field: "ambassador", expected: "Marty Supreme" },
  { id: "tony", field: "headline", expected: "Ambitious by design." },
  { id: "lewis", field: "archetype", expected: "Strong willed" },
];

const assetTests = [
  { id: "tony", expectedPath: "/boots/adidas-f50-yellow-orange.png" },
  { id: "lewis", expectedPath: "/boots/adidas-predator-elite-red.png" },
  { id: "marty", expectedPath: "/boots/adidas-predator-accuracy-orange.png" },
];

function formatPrice(value) {
  return `$${Number(value).toLocaleString()}`;
}

function getPersona(id) {
  return personas.find((persona) => persona.id === id) || personas[0];
}

function CTA({ persona }) {
  return (
    <a
      href="#buy"
      className="group inline-flex items-center justify-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-black text-black transition hover:bg-white/90"
    >
      <span>Buy the boot</span>
      <span className="h-5 w-px bg-black/15" />
      <span className="text-black/60">{formatPrice(persona.price)}</span>
      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

function BootProductImage({ persona, compact = false }) {
  return (
    <motion.div
      key={persona.id + String(compact)}
      initial={{ opacity: 0, y: 30, rotate: compact ? -2 : -3, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, rotate: compact ? -2 : -3, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 90, damping: 18 }}
      className={`relative mx-auto isolate overflow-hidden ${compact ? "h-[280px] w-full" : "h-[390px] w-full max-w-[680px]"}`}
    >
      <div
        className="absolute inset-0 rounded-[3rem] opacity-70"
        style={{
          background: `radial-gradient(circle at 50% 48%, ${persona.accent}22, transparent 48%), radial-gradient(circle at 60% 72%, ${persona.accent2}24, transparent 42%)`,
        }}
      />
      <div
        className="absolute inset-x-8 bottom-8 h-20 rounded-full blur-3xl"
        style={{ backgroundColor: `${persona.accent2}55` }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[76%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] blur-3xl"
        style={{ background: `radial-gradient(circle, ${persona.accent}33, transparent 62%)` }}
      />

      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 py-8">
        <img
          src={persona.image}
          alt={persona.imageAlt}
          className="h-full w-full object-contain drop-shadow-[0_35px_55px_rgba(0,0,0,0.72)]"
          style={{
            filter: "contrast(1.03) saturate(1.08) drop-shadow(0 34px 46px rgba(0,0,0,0.66))",
          }}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-[3rem]"
        style={{
          background: `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.10) 78%, rgba(0,0,0,0.24) 100%), radial-gradient(circle at 50% 50%, transparent 46%, ${persona.accent2}10 100%)`,
        }}
      />

      <div className="absolute left-8 top-8 z-30 rounded-2xl border border-white/10 bg-black/55 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white shadow-2xl backdrop-blur-xl">
        {persona.boot}
      </div>
    </motion.div>
  );
}

function PersonaTabs({ activeId, onChange }) {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-3 rounded-[2rem] border border-white/10 bg-white/[0.055] p-2 backdrop-blur-2xl md:flex-row">
      {personas.map((persona) => {
        const isActive = activeId === persona.id;
        return (
          <button
            key={persona.id}
            onClick={() => onChange(persona.id)}
            className={`relative flex-1 overflow-hidden rounded-[1.5rem] p-5 text-left transition ${isActive ? "bg-white text-black" : "text-white/58 hover:bg-white/10 hover:text-white"}`}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className={`text-xs font-black uppercase tracking-[0.22em] ${isActive ? "text-black/45" : "text-white/35"}`}>{persona.archetype}</div>
                <div className="mt-2 text-xl font-black tracking-tight">{persona.ambassador}</div>
              </div>
              <div className="h-10 w-10 rounded-full" style={{ background: `linear-gradient(135deg, ${persona.accent}, ${persona.accent2})` }} />
            </div>
            <div className={`mt-5 text-sm font-semibold ${isActive ? "text-black/58" : "text-white/42"}`}>{persona.boot}</div>
          </button>
        );
      })}
    </div>
  );
}

function StatCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-xl"
    >
      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-black tracking-tight text-white">{title}</h3>
      <p className="mt-3 leading-7 text-white/52">{text}</p>
    </motion.div>
  );
}

export default function AdidasThreeIconsLanding() {
  const [activeId, setActiveId] = useState("tony");
  const active = getPersona(activeId);
  const activeIcons = active.icons;

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    console.assert(
      pricingTests.every((test) => getPersona(test.id).price === test.expected),
      "Pricing test failed"
    );
    console.assert(personas.length === 3, "Expected exactly three personas");
    console.assert(
      copyTests.every((test) => getPersona(test.id)[test.field] === test.expected),
      "Copy test failed"
    );
    console.assert(
      assetTests.every((test) => getPersona(test.id).image === test.expectedPath),
      "Exact asset path test failed"
    );
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-2xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="text-sm font-black tracking-[0.22em] text-white">ADIDAS ICON MODE</a>
          <div className="hidden items-center gap-7 text-xs font-semibold text-white/55 md:flex">
            <a href="#choose" className="hover:text-white">Choose</a>
            <a href="#boots" className="hover:text-white">Boots</a>
            <a href="#buy" className="hover:text-white">Buy</a>
          </div>
          <a href="#buy" className="rounded-full bg-white px-4 py-1.5 text-xs font-black text-black transition hover:bg-white/90">
            Buy · from {formatPrice(260)}
          </a>
        </div>
      </nav>

      <section id="top" className="relative flex min-h-screen items-center px-5 pt-24 sm:px-8" style={{ background: active.bg }}>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22),rgba(0,0,0,0.88))]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_10%_20%,#fff_0_1px,transparent_1px),radial-gradient(circle_at_80%_30%,#fff_0_1px,transparent_1px),radial-gradient(circle_at_40%_70%,#fff_0_1px,transparent_1px)] bg-[length:80px_80px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.82fr]">
          <motion.div key={active.id} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/75 backdrop-blur-xl">
              <Sparkles className="h-4 w-4" /> Choose who you become
            </div>
            <h1 className="mt-8 max-w-4xl text-6xl font-black tracking-[-0.075em] sm:text-7xl lg:text-8xl">
              {active.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-white/62 sm:text-2xl sm:leading-9">
              {active.line} Three boots. Three icons. One question: what version of yourself steps onto the pitch?
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CTA persona={active} />
              <a href="#choose" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-black text-white transition hover:bg-white/10">
                Pick your icon <ChevronRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-7 text-sm font-semibold text-white/42">
              Current mode: {active.ambassador} · {active.boot} · {formatPrice(active.price)}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.14, duration: 0.85 }} className="relative">
            <div className="absolute -inset-8 rounded-[3rem] blur-3xl" style={{ backgroundColor: active.accent + "33" }} />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-3 shadow-[0_50px_140px_rgba(0,0,0,0.62)] backdrop-blur-xl">
              <div className="aspect-[9/16] overflow-hidden rounded-[2rem] bg-black">
                <video className="h-full w-full object-cover" src={videoSrc} autoPlay muted loop playsInline />
                <div className="pointer-events-none absolute inset-3 rounded-[2rem] ring-1 ring-white/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="choose" className="relative bg-black px-5 py-24 sm:px-8 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-white/35">Three tabs. Three identities.</p>
            <h2 className="mt-5 text-5xl font-black tracking-[-0.06em] sm:text-7xl">Choose your mode.</h2>
            <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-white/52">
              Each boot carries a different character: ambition, strong-willed pressure or obsession with precision.
            </p>
          </div>

          <div className="mt-14">
            <PersonaTabs activeId={activeId} onChange={setActiveId} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45 }}
              className="mt-10 overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br p-6 shadow-[0_35px_120px_rgba(0,0,0,0.36)] sm:p-10"
              style={{ background: active.bg }}
            >
              <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
                <div>
                  <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/60 backdrop-blur-xl">
                    {active.archetype} identity
                  </div>
                  <h3 className="mt-7 text-5xl font-black tracking-[-0.06em] sm:text-6xl">{active.ambassador}</h3>
                  <p className="mt-5 max-w-xl text-xl leading-9 text-white/62">{active.line}</p>
                  <div className="mt-8 grid gap-4">
                    {active.traits.map((trait, index) => {
                      const Icon = activeIcons[index];
                      return (
                        <div key={trait} className="flex items-center gap-3 text-white/76">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black"><Icon className="h-4 w-4" /></div>
                          {trait}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <BootProductImage persona={active} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section id="boots" className="bg-[#f4f4f0] px-5 py-24 text-black sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-10 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-black/35">Boot lineup</p>
              <h2 className="mt-5 text-5xl font-black tracking-[-0.06em] sm:text-7xl">Built for different kinds of hunger.</h2>
            </div>
            <p className="text-xl leading-9 text-black/56">
              F50 is speed and ambition. Predator Elite is pressure and control. Predator Accuracy is repetition, obsession and clean contact.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {personas.map((persona) => (
              <motion.div
                key={persona.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                className="overflow-hidden rounded-[2.5rem] bg-black text-white shadow-[0_24px_90px_rgba(0,0,0,0.16)]"
              >
                <div className="relative h-[300px] overflow-hidden" style={{ background: persona.bg }}>
                  <BootProductImage persona={persona} compact />
                </div>
                <div className="p-7">
                  <div className="text-xs font-black uppercase tracking-[0.22em] text-white/35">{persona.archetype}</div>
                  <h3 className="mt-3 text-2xl font-black tracking-tight">{persona.boot}</h3>
                  <p className="mt-2 text-sm font-semibold text-white/45">{persona.colorway}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-2xl font-black">{formatPrice(persona.price)}</span>
                    <button onClick={() => setActiveId(persona.id)} className="rounded-full bg-white px-4 py-2 text-xs font-black text-black transition hover:bg-white/90">Select</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-white/35">Why it works</p>
            <h2 className="mt-5 text-5xl font-black tracking-[-0.06em] sm:text-7xl">The product becomes a persona.</h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <StatCard icon={Flame} title="Ambition sells F50" text="Tony Montana mode turns speed into status: aggressive, direct, impossible to ignore." />
            <StatCard icon={Gauge} title="Pressure sells red" text="Lewis Hamilton mode frames red boots as racing precision, control and strong-willed energy." />
            <StatCard icon={Target} title="Obsession sells Predator" text="Marty Supreme mode makes Predator Accuracy feel like repetition, focus and addiction to the clean strike." />
          </div>
        </div>
      </section>

      <section id="buy" className="px-5 py-24 sm:px-8 lg:py-32" style={{ background: active.bg }}>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[3rem] border border-white/10 bg-black/55 text-white shadow-[0_35px_130px_rgba(0,0,0,0.48)] backdrop-blur-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/70">
                <ShoppingBag className="h-4 w-4" /> Selected mode · {active.archetype}
              </div>
              <h2 className="mt-8 text-5xl font-black tracking-[-0.06em] sm:text-7xl">Become {active.archetype.toLowerCase()}.</h2>
              <p className="mt-6 max-w-xl text-xl leading-9 text-white/58">
                {active.ambassador} mode selected. Get the {active.boot} in {active.colorway}.
              </p>

              <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                <div className="text-sm font-semibold text-white/42">Selected boot</div>
                <div className="mt-1 text-2xl font-black">{active.boot}</div>
                <div className="mt-2 text-white/45">{active.colorway}</div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {personas.map((persona) => (
                  <button
                    key={persona.id}
                    onClick={() => setActiveId(persona.id)}
                    className={`rounded-full border px-5 py-3 text-sm font-black transition ${activeId === persona.id ? "border-white bg-white text-black" : "border-white/15 text-white/70 hover:bg-white/10"}`}
                  >
                    {persona.archetype} · {formatPrice(persona.price)}
                  </button>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CTA persona={active} />
                <a href="#choose" className="rounded-full border border-white/15 px-7 py-4 text-sm font-black text-white/70 transition hover:bg-white/10">Change mode</a>
              </div>
            </div>
            <div className="relative min-h-[620px] overflow-hidden p-6" style={{ background: `radial-gradient(circle at 50% 30%, ${active.accent}33, transparent 42%), #050505` }}>
              <div className="absolute left-8 right-8 top-10 z-20 rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-xl">
                <div className="text-sm text-white/45">Current icon</div>
                <div className="mt-1 text-2xl font-black">{active.ambassador}</div>
              </div>
              <div className="relative z-10 mt-36">
                <BootProductImage persona={active} />
              </div>
              <div className="absolute inset-x-8 bottom-10 z-20 rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-xl">
                <div className="text-sm text-white/45">Price</div>
                <div className="mt-1 text-4xl font-black">{formatPrice(active.price)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-10 text-center text-xs font-semibold text-white/35 sm:px-8">
        Adidas promo concept landing · Three boots, three personas, one campaign.
      </footer>
    </main>
  );
}
