export type HeroStatCard = {
  title: string;
  value: string;
  detail: string;
};

export type Translations = {
  hero: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    subtitle: string;
    primaryCTA: string;
    secondaryCTA: string;
    trustedByTitle: string;
    trustedByItems: string[];
    statCards: HeroStatCard[];
  };
  services: {
    learnMore: string;
  };
  process: {
    stepBadges: string[];
  };
};
