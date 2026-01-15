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
          Jsem Mgr. Nikola Hošková, DiS. Spojuji dva světy: tvrdou legislativu (OZO v prevenci
          rizik) a lidskou psychologii (Kouč). V praxi jsem viděla, že represe nefunguje. Lidé musí
          bezpečnost dodržovat proto, že chtějí, ne proto, že musí. Proto jsem založila projekt BOZP
          Coach a spoluzaložila aplikaci hodnoceni-rizik.cz. Mým cílem není jen splnit normy. Mým
          cílem je, aby se vaši lidé vraceli z práce domů zdraví.
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
        <div className="bg-muted flex flex-col justify-between gap-10 rounded-2xl bg-cover bg-center p-10">
          <p className="text-sm font-semibold">Lorem ipsum dolor sit amet.</p>
          <p className="text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel non laboriosam quam aliquid
            magnam ipsa ratione, veritatis aperiam eaque doloremque.
          </p>
        </div>
      </div>
    </div>
  );
}
