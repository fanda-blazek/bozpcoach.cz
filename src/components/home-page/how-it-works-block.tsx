import { CloudIcon, UsersIcon, XCircleIcon } from "lucide-react";

interface DataItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DATA: DataItem[] = [
  {
    icon: <CloudIcon strokeWidth={1.5} className="size-12" aria-hidden="true" />,
    title: "AI-Driven Insights",
    description:
      "Leverage advanced AI algorithms to gain actionable insights and make data-driven decisions for your business.",
  },
  {
    icon: <XCircleIcon strokeWidth={1.5} className="size-12" aria-hidden="true" />,
    title: "Error-Free Automation",
    description:
      "Eliminate manual errors with intelligent automation tools that ensure accuracy and consistency across all processes.",
  },
  {
    icon: <UsersIcon strokeWidth={1.5} className="size-12" aria-hidden="true" />,
    title: "Seamless Team Collaboration",
    description:
      "Enhance teamwork with AI-powered collaboration tools that enable real-time communication and shared workflows.",
  },
];

export function HowItWorksBlock(props: React.ComponentProps<"div">) {
  return (
    <div {...props}>
      <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column - Fixed Content */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="max-w-lg">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Jak to Funguje
            </h2>
            <p className="text-muted-foreground mt-12 text-base">
              Seamlessly integrate AI into your workflows. Automate tasks, enhance efficiency, and
              stay ahead.
            </p>
          </div>
        </div>

        {/* Right Column - Scrollable Cards */}
        <div className="-mt-8 sm:-mt-12">
          {DATA.map((item, index) => (
            <div
              key={index}
              className="bg-muted relative my-12 overflow-hidden rounded-lg px-8 py-16 shadow-none sm:px-12 sm:py-24 lg:px-16 lg:py-32"
            >
              <div className="gap-4 sm:gap-6">
                <div className="block shrink-0">{item.icon}</div>
                <div className="absolute top-12 right-12 font-mono text-5xl">0{index + 1}</div>
                <div className="mt-6">
                  <h4 className="font-display mb-2 text-2xl font-semibold">{item.title}</h4>
                  <p className="text-muted-foreground mt-6 text-xs sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
