// ✏️ Edit everything about yourself in this one file.

export const site = {
  name: "Shazaniyu Gbadamosi",
  firstName: "Shazaniyu",
  role: "Software Developer",
  tagline: "I build mobile & web apps that solve real problems.",
  bio: "All about problem solving and innovative software solutions. I ship cross platform apps with Flutter and modern web apps with JavaScript, React and Next.js from Abuja, Nigeria to anywhere.",
  location: "Abuja, Nigeria",

  githubUsername: "Shazaniyu55",

  // WhatsApp: 09074235666 → international format (+234, drop the leading 0)
  whatsappNumber: "2349074235666",
  whatsappGreeting:
    "Hi Shazaniyu! I saw your portfolio and I'd like to talk about a project.",

  links: {
    github: "https://github.com/Shazaniyu55",
    linkedin: "https://www.linkedin.com/in/shazaniyu-gbadamosi-582931406",
    instagram: "https://www.instagram.com/shazaniyu.tech",
  },

  skills: [
    "Flutter", "Dart", "JavaScript", "TypeScript", "React",
    "Next.js", "Node.js", "Firebase", "REST APIs", "Git & GitHub",
    "UI Implementation", "Mobile Development", "NestJs", "MongoDB", "PostgreSQL", "MYSQL", "Python", "Docker"
  ],

  // Pinned/featured projects (shown first, before the live GitHub feed).
  // Add a `live` URL to show a "Live Demo" button.
  featured: [
    {
      name: "Instagram Clone App",
      repo: "instagram_clone_app",
      tech: ["Flutter", "Dart", "Firebase"],
      description:
        "A full-featured Instagram clone photo feed, likes, comments and profiles built with Flutter for a native feel on both Android and iOS.",
      live: "",
    },
    {
      name: "Crypto Wallet App",
      repo: "flutter_crypto_wallet_app",
      tech: ["Flutter", "Dart"],
      description:
        "A sleek crypto wallet UI with portfolio balances, coin charts and transaction flows — designed to feel fast, secure and modern.",
      live: "",
    },
    {
      name: "Geez Fashion App",
      repo: "geez-fashion-app",
      tech: ["Flutter", "Dart"],
      description:
        "A fashion e-commerce experience with product catalogues, carts and smooth shopping flows for a boutique brand.",
      live: "",
    },
    {
      name: "Data App",
      repo: "dataApp",
      tech: ["Flutter", "Dart", "Node js", "MongoDB"],
      description:
        "A VTU-style utility app for buying data and airtime clean flows for everyday transactions Nigerians make on their phones.",
      live: "https://play.google.com/store/apps/details?id=com.nexatech.dataease&pcampaignid=web_share",
    },
    {
      name: "Fitness App",
      repo: "fitness_app",
      tech: ["Flutter", "Firebase"],
      description:
        "A workout companion that helps users browse exercises and follow routines, built with JavaScript on the web.",
      live: "",
    },

       {
      name: "Ruuvoo",
      repo: "Bill Payment App",
      tech: ["Flutter", "Dart", "Node js", "MongoDB"],
      description:
        "A Bill payment utility app for buying data and airtime cryto exchange clean flows for everyday transactions Nigerians make on their phones.",
      live: "https://play.google.com/store/apps/details?id=com.ruuvoo.app",
    },
  ],
};

export const waLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappGreeting
)}`;
