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
      name: "Royal Cleaners",
      repo: "The Royal Cleaners",
      tech: ["ReactJs", "NodeJS", "MongoDb"],
      description:
        "Royale Cleaners. Home & Office Cleaning is a curated online marketplace for home & office cleaning services. We work with background-checked, experienced cleaners in the UK.",
      live: "https://www.royalecleaners.co.uk/",
    },
    {
      name: "EliteTrade Resources LTD",
      repo: "elite resource trade",
      tech: ["NextJS", "TailwindCSS"],
      description:
        "Nigerian-based agro commodity trading company specialising in the sourcing, processing, and exporting of premium-grade agricultural commodities to international buyers across Europe, Asia, and the Americas",
      live: "https://eliteresourcestrade.com/",
    },
    {
      name: "GenneTech Solutions LTD",
      repo: "gennetTech",
      tech: ["Nextjs", "TailwindCSS"],
      description:
        "Gennet Tech Solutions installs smart solar systems and CCTV security for homes and businesses across Nigeria  so you stay powered and protected, even when the grid fails.",
      live: "https://www.gennettechsolutions.com/",
    },
    {
      name: "DataEase",
      repo: "dataApp",
      tech: ["Flutter", "Dart", "Node js", "MongoDB"],
      description:
        "A VTU-style utility app for buying data and airtime clean flows for everyday transactions Nigerians make on their phones.",
      live: "https://play.google.com/store/apps/details?id=com.nexatech.dataease&pcampaignid=web_share",
    },
    {
      name: "True Booker",
      repo: "Urban Transport App",
      tech: ["React Native", "NestJs", "PostgreSQL", "AWS", "Android", "IOS"],
      description:
        "A Ride sharing app for Urban transport app for drivers and passengers, driver can create trip passengers book for available trips. available for Android and IOS devices",
      live: "https://play.google.com/store/apps/details?id=com.trubooker.drivers&pcampaignid=web_share",
    },

       {
      name: "Ruuvoo",
      repo: "Bill Payment App",
      tech: ["Flutter", "Dart", "Node js", "MongoDB"],
      description:
        "A Bill payment utility app for buying data and airtime cryto exchange clean flows for everyday transactions Nigerians make on their phones.",
      live: "https://play.google.com/store/apps/details?id=com.ruuvoo.app&pcampaignid=web_share",
    },

     {
      name: "Trace BackEnd",
      repo: "Trauma Trace",
      tech: ["NestJS", "TypeScript", "Firebase", "PostgreSQL"],
      description:
        "Trauma Trace Backend is a an App designed to help people seeking therapist for a psychological solution to thier trauma the app helps find nearby therapist based on proximity,track your recovery progress",
      live: "https://traumatrace-be.vercel.app/api",
    },

      {
      name: "The Warrake Muslims Education and Empowerment Foundation",
      repo: "WMEEF",
      tech: ["NestJS", "TypeScript"],
      description:
        "The Warrake Muslims Education and Empowerment Foundation (WMEEF) is a community-based nonprofit working to renew Quranic learning and Islamic values, and to open doors to education and self-reliance for the people of Warrake.",
      live: "https://www.wmeefoundation.org/",
    },

     {
      name: "Hearts United",
      repo: "hearts united",
      tech: ["Flutter", "Firebase"],
      description:
        "This is a charity android app that helps people to donate to the less privileged built on Flutter and Firebase backend",
      live: "https://apkpure.com/p/com.example.charity_app",
    },
  ],
};

export const waLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappGreeting
)}`;
