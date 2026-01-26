"use client";

import { Star } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

interface DataItem {
  name: string;
  avatar: string;
  content: string;
  margin?: string;
}

const DATA: DataItem[] = [
  {
    name: "Alex Johnson",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content:
      "This tool has completely transformed my workflow. The features are intuitive, and it’s made collaboration with my team so much easier.",
    margin: "mt-6",
  },
  {
    name: "Maria Garcia",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content:
      "The design templates are a lifesaver. They’ve helped me deliver projects faster without compromising on quality.",
  },
  {
    name: "Chris Lee",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content:
      "Our team’s productivity has skyrocketed since we started using this platform. It’s a must-have for any creative team.",
    margin: "mt-4",
  },
];

interface RewardCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

const RewardCard = ({ icon, title, subtitle }: RewardCardProps) => (
  <div className="bg-muted flex flex-col gap-2 rounded-xl p-2 px-4 shadow-sm">
    <div className="flex flex-row items-center gap-2">
      <div className="bg-background rounded-full p-2">
        <img src={icon} alt={title} width={40} height={40} className="rounded-full" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-muted-foreground text-sm">{subtitle}</span>
      </div>
    </div>
  </div>
);

interface Testimonial24Props {
  className?: string;
}

const Review = ({ className }: Testimonial24Props) => {
  return (
    <section className={cn("mt-2", className)}>
      <div className="container">
        {/* Title */}
        <div className="flex flex-col items-center gap-6 px-4 sm:px-8">
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            Tohle o mně řekli klienti
          </h2>

          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
            {/* First Reward Card */}
          </div>
        </div>

        <div className="relative mt-8 w-full px-4 after:absolute after:inset-x-0 after:-bottom-2 after:h-96 after:bg-linear-to-t sm:px-8 md:px-16 lg:px-32">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}>
            <Masonry gutter="20px" columnsCount={3}>
              {DATA.map((testimonial, idx) => (
                <Card
                  key={idx}
                  className={cn(
                    "rounded-xl p-5 shadow-sm",
                    idx > 3 && idx <= 5 && "hidden md:block",
                    idx > 5 && "hidden lg:block",
                    testimonial.margin
                  )}
                >
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-primary h-4 w-4" />
                    ))}
                  </div>

                  <div className="text-foreground mt-4 text-sm">
                    <q>{testimonial.content}</q>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <Avatar className="ring-muted size-9 rounded-full ring-1">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium">{testimonial.name}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};

export { Review };
