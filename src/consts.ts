import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Sin Arch",
  EMAIL: "paofort@outlook.it",
  // NUM_NEWS_ON_HOMEPAGE: 0,
  // NUM_RICERCA_ON_HOMEPAGE: 0,
  // NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "SIN ARCH.",
};

export const NEWS: Metadata = {
  TITLE: "News",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const RICERCA: Metadata = {
  TITLE: "Ricerca",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROGETTI: Metadata = {
  TITLE: "Progetti",
  DESCRIPTION: "I miei progetti.",
};

export const SOCIALS: Socials = [
  // {
  //   NAME: "twitter-x",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
  {
    NAME: "instagram",
    HREF: "https://www.instagram.com/sin_architettura"
  },
  // {
  //   NAME: "facebook",
  //   HREF: "https://github.com/markhorn-dev"
  // },
  { 
    NAME: "linkedin",
    HREF: "#",
  }
];
