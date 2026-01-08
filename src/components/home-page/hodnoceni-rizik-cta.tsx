import { PlayIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HodnoceniRizikCta(props: React.ComponentProps<"div">) {
  return (
    <div {...props}>
      <div className="overflow-hidden">
        <div className="bg-muted/50 relative mx-auto flex flex-col justify-between gap-6 overflow-hidden rounded-xl border md:flex-row">
          <div className="self-center p-6 md:px-12 md:py-24">
            <h2 className="text-3xl font-semibold md:text-4xl">Aplikace na hodnocení rizik</h2>
            <p className="text-muted-foreground mt-4 md:text-lg">
              Discover the full potential of our platform. Try our interactive demo or watch a
              comprehensive walkthrough today.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button>Try Demo</Button>
              <Button variant="outline">
                Watch Video
                <PlayIcon className="ml-2" aria-hidden="true" />
              </Button>
            </div>
          </div>
          <div className="relative ml-6 max-h-96 md:mt-8 md:ml-0">
            <Image
              width={1000}
              height={1000}
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg"
              alt="placeholder"
              className="absolute -bottom-12 left-4 h-48 -translate-x-1/2 -rotate-[120deg]"
            />
            <Image
              width={1000}
              height={1000}
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
              alt="placeholder"
              className="z-10 aspect-video h-full w-full rounded-tl-xl border-t border-l object-cover pt-3.5 pl-3.5 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
