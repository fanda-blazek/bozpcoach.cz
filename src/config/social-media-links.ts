import {
  InstagramIcon,
  TwitterXIcon,
  YoutubeIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/ui/icon-brand";

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
  youtube: {
    name: "Youtube",
    href: "https://www.youtube.com/@BOZPCoach",
    icon: YoutubeIcon,
  },
  linkedin: {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/nikolahošková",
    icon: LinkedInIcon,
  },
} as const satisfies Record<string, SocialMediaLink>;

export const socialMediaLinksArray: SocialMediaLink[] = Object.values(socialMediaLinks);
