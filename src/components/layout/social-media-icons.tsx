import { socialMediaLinksArray } from "@/config/social-media-links";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export function SocialMediaIcons(props: React.ComponentProps<"ul">) {
  return (
    <ul
      {...props}
      className={cn("flex flex-wrap items-center justify-center gap-4", props.className)}
    >
      {socialMediaLinksArray.map((item, index) => (
        <li key={index}>
          <Button variant="ghost" asChild className="h-10 px-3">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-medium">@bozpcoach</span>
            </a>
          </Button>
        </li>
      ))}
    </ul>
  );
}
