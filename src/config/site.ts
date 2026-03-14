export const siteConfig = {
  name: "SiteLab",
  description: "High-performance website development studio",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  logo: "/logo.png",
  languages: ["en", "ru", "he"] as const
};
