import { InstagramIcon, TwitterXIcon, YoutubeIcon, GitHubIcon } from "@/components/ui/icon-brand";

export type ExternalLink = {
  name: string;
  href: string;
};

export type SocialMediaLink = ExternalLink & {
  icon: React.ComponentType<{ className?: string }>;
};

export const socialMediaLinks = {
  instagram: {
    name: "Instagram",
    href: "https://www.instagram.com/bozpcoach/",
    icon: InstagramIcon,
  },
} as const satisfies Record<string, SocialMediaLink>;

export const socialMediaLinksArray: SocialMediaLink[] = Object.values(socialMediaLinks);
