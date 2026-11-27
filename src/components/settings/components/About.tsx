import {
  Info,
  Clock3,
  WholeWord,
  TextCursorInput,
  ClipboardPenLine,
  Gauge,
  Activity,
  Target,
  CheckCircle2,
  XCircle,
  CircleMinus,
  PlusCircle,
  ChartNoAxesCombined,
  MessageSquare,
  Bug,
  Lightbulb,
  ArrowUpRight,
  Keyboard,
} from "lucide-react";

interface AboutProps {
  onContact: (type: "feedback" | "bug" | "feature") => void;
}

const features = [
  {
    title: "Time",
    description:
      "Test your typing speed against the clock. Choose between 15, 30, or 60 seconds and see how much you can type before time runs out.",
    icon: Clock3,
  },
  {
    title: "Words",
    description:
      "Practice with a fixed number of words. Choose your preferred test length and focus on completing the text accurately.",
    icon: WholeWord,
  },
  {
    title: "Test",
    description:
      "Customize your typing challenge with different test types. Practice with normal text, punctuation, or numbers.",
    icon: TextCursorInput,
  },
  {
    title: "Custom",
    description:
      "Bring your own text and practice with content you choose. Create a personalized typing test and save it for later.",
    icon: ClipboardPenLine,
  },
];

const statistics = [
  {
    title: "WPM",
    subtitle: "Words Per Minute",
    description:
      "Measures your typing speed based on correctly typed characters, with every five characters counting as one word.",
    icon: Gauge,
  },
  {
    title: "Raw WPM",
    subtitle: "Raw Typing Speed",
    description:
      "Shows your typing speed based on total keystrokes, before accounting for typing errors.",
    icon: Activity,
  },
  {
    title: "Accuracy",
    subtitle: "Typing Accuracy",
    description:
      "Shows how accurately you typed the given text by comparing correct and incorrect characters.",
    icon: Target,
  },
  {
    title: "Correct",
    subtitle: "Correct Characters",
    description:
      "Counts the characters you typed correctly according to the given text.",
    icon: CheckCircle2,
  },
  {
    title: "Incorrect",
    subtitle: "Incorrect Characters",
    description: "Counts the characters you typed incorrectly during the test.",
    icon: XCircle,
  },
  {
    title: "Extra",
    subtitle: "Extra Characters",
    description:
      "Tracks additional characters you typed that were not present in the given text.",
    icon: PlusCircle,
  },
  {
    title: "Missed",
    subtitle: "Missed Characters",
    description:
      "Tracks characters from the given text that you skipped or did not type.",
    icon: CircleMinus,
  },
  {
    title: "Consistency",
    subtitle: "Typing Consistency",
    description:
      "Shows how consistently you maintained your typing speed throughout the test.",
    icon: ChartNoAxesCombined,
  },
];

const contactOptions = [
  {
    title: "Feedback",
    description: "Share your thoughts and experience.",
    icon: MessageSquare,
    type: "feedback" as const,
  },
  {
    title: "Bug Report",
    description: "Found something that isn't working?",
    icon: Bug,
    type: "bug" as const,
  },
  {
    title: "Feature Request",
    description: "Have an idea for something new?",
    icon: Lightbulb,
    type: "feature" as const,
  },
];

export default function About({ onContact }: AboutProps) {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 font-[Roboto_Mono] sm:px-6 sm:py-10 lg:px-8">
      {/* Page heading */}
      <header className="mb-10 flex items-center gap-3 sm:mb-12 sm:gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-(--surface) text-(--text) sm:size-14">
          <Info size={28} strokeWidth={1.8} />
        </div>

        <div>
          <h1 className="font-[Courier_Prime] text-2xl font-semibold tracking-tight text-(--text) sm:text-3xl">
            About
          </h1>
          <p className="mt-1 text-xs text-(--muted-text) sm:text-sm">
            A little more about Sloth Typing
          </p>
        </div>
      </header>

      {/* Introduction */}
      <section className="mb-12 sm:mb-14">
        <div className="mb-3 flex items-center gap-2">
          <Keyboard size={19} className="text-(--muted-text)" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted-text)">
            Meet the app
          </span>
        </div>

        <h2 className="mb-4 font-[Courier_Prime] text-2xl font-semibold leading-snug text-(--text) sm:text-3xl">
          What is Sloth Typing?
        </h2>

        <p className="max-w-3xl text-sm leading-7 text-(--muted-text) sm:text-base sm:leading-8">
          Sloth Typing is a minimalistic and fully customizable typing test
          application designed to help you practice, improve, and understand
          your typing performance. Choose your preferred test mode, personalize
          your practice, and track your progress through detailed statistics.
          Whether you're working on speed or accuracy, Sloth Typing gives you
          the tools to make every practice session count.
        </p>
      </section>

      {/* Test features */}
      <section className="mb-12 sm:mb-16">
        <div className="mb-6">
          <h2 className="font-[Courier_Prime] text-xl font-semibold text-(--text) sm:text-2xl">
            Test Options
          </h2>
          <p className="mt-2 text-sm text-(--muted-text)">
            Different ways to practice, built around your preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group flex gap-4 rounded-xl border border-(--border)/60 bg-(--surface) p-4 transition-colors duration-200 hover:border-(--border) sm:p-5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-(--background) text-(--muted-text) transition-colors group-hover:text-(--text) sm:size-11">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-xs tabular-nums text-(--muted-text)/70">
                      0{index + 1}
                    </span>
                    <h3 className="text-base font-semibold text-(--text)">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-xs leading-6 text-(--muted-text) sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Dashboard and statistics */}
      <section className="mb-12 sm:mb-16">
        <div className="mb-6">
          <div className="mb-3 flex items-center gap-2">
            <ChartNoAxesCombined size={20} className="text-(--muted-text)" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted-text)">
              Understand your performance
            </span>
          </div>

          <h2 className="font-[Courier_Prime] text-xl font-semibold text-(--text) sm:text-2xl">
            Dashboard & Statistics
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-(--muted-text)">
            Every completed test gives you a detailed breakdown of your
            performance. Here's what each metric tells you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
          {statistics.map((stat) => {
            const Icon = stat.icon;

            return (
              <article
                key={stat.title}
                className="flex gap-3 rounded-xl border border-(--border)/60 bg-(--surface) p-4 sm:p-5"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-(--background) text-(--muted-text)">
                  <Icon size={19} strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-(--text)">{stat.title}</h3>

                  <p className="mb-2 text-[11px] text-(--muted-text)">
                    {stat.subtitle}
                  </p>

                  <p className="text-xs leading-6 text-(--muted-text) sm:text-sm">
                    {stat.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Contact section */}
      <section className="mb-6">
        <div className="mb-6">
          <h2 className="font-[Courier_Prime] text-xl font-semibold text-(--text) sm:text-2xl">
            Get in touch
          </h2>

          <p className="mt-2 text-sm leading-6 text-(--muted-text)">
            Have something to share? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {contactOptions.map((option) => {
            const Icon = option.icon;

            return (
              <button
                key={option.type}
                onClick={() => onContact(option.type)}
                className="group flex min-h-24 items-center justify-between gap-3 rounded-xl border border-(--border)/60 bg-(--surface) p-4 text-left transition-all duration-200 hover:border-(--border) hover:bg-(--option-bar-background) sm:min-h-28 sm:p-5"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-(--background) text-(--muted-text) group-hover:text-(--text)">
                    <Icon size={20} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-(--text)">
                      {option.title}
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-(--muted-text) sm:text-xs">
                      {option.description}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={17}
                  className="shrink-0 text-(--muted-text) transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            );
          })}
        </div>
      </section>

      {/* Footer note */}
      <div className="mt-12 border-t border-(--border)/60 pt-5 text-center">
        <p className="text-xs text-(--muted-text)">
          Sloth Typing — Practice at your own pace.
        </p>
      </div>
    </main>
  );
}
