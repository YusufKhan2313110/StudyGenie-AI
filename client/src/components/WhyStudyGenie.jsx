import {
  Brain,
  Zap,
  ShieldCheck,
  BookOpen,
  Smartphone,
  Clock3,
} from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Powered by Gemini AI",
    description:
      "Get intelligent responses generated using Google's Gemini model for accurate explanations and study assistance.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Generate summaries, quizzes, flashcards and explanations in just a few seconds.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: BookOpen,
    title: "Built for Students",
    description:
      "Designed specifically for revision, assignments, exam preparation and concept learning.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Clock3,
    title: "Save Study Time",
    description:
      "Spend less time making notes and more time actually understanding concepts.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Works beautifully on desktops, laptops, tablets and mobile devices.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: ShieldCheck,
    title: "Simple & Secure",
    description:
      "Clean interface with no unnecessary distractions so you can stay focused while studying.",
    color: "from-indigo-500 to-sky-500",
  },
];

function WhyStudyGenie() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="absolute left-0 top-32 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-300">

            Why Choose StudyGenie?

          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-white">

            Built For Modern

            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">

              {" "}Learning

            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-400 leading-8">

            Everything inside StudyGenie has been designed to make learning
            faster, easier and much more enjoyable.

          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {benefits.map((item) => {
            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-600/20"
              >

                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} shadow-xl`}
                >

                  <Icon
                    size={30}
                    className="text-white"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">

                  {item.title}

                </h3>

                <p className="mt-5 leading-8 text-slate-400">

                  {item.description}

                </p>

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}

export default WhyStudyGenie;