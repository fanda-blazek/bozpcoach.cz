import Image from "next/image";

import { cn } from "@/lib/utils";

export function AboutBlock(props: React.ComponentProps<"div">) {
  return (
    <div {...props} className={cn("flex flex-col gap-16 lg:gap-28", props.className)}>
      <div className="flex flex-col gap-4 lg:gap-8">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          O mně
        </h2>
        <p className="max-w-xl text-xl">
          Shadcnblocks.com makes it easy to build customer portals, CRMs, internal tools, and other
          business applications for your team. In minutes, not months.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Image
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
          alt="placeholder"
          width={1000}
          height={1000}
          className="size-full max-h-96 rounded-2xl object-cover"
        />
        <div className="bg-muted flex flex-col justify-between gap-10 rounded-2xl bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/christin-hume-Hcfwew744z4-unsplash.jpg')] bg-cover bg-center p-10">
          <p className="text-sm font-semibold text-white">OUR MISSION</p>
          <p className="text-lg font-medium text-white">
            We believe that building software should be insanely easy. That everyone should have the
            freedom to create the tools they need, without any developers, designers or drama.
          </p>
        </div>
      </div>
    </div>
  );
}
