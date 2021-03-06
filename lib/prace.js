const prace = [
  {
    nazov: "Jaroslav Mego s.r.o.",
    url: "jaroslav-mego",
    color: "#b3e4db",
    image: "/prace/mego.webp",
    link: {
      link: "https://www.mego.sk/",
      text: "text-black",
    },
    sk: {
      nazovPopis: "Vytvorenie web stránky a správa sociálnych sietí",
      popis:
        "Vytvorenie prezentačnej web stránky pre lokálneho výrobcu drevených okien a dverí. V tejto stránke je špecifický 3d prvok. Hneď v úvode môžte vidieť 3d animujúce sa okno. 3D vždy bolo aj je súčasťou našej každodennej práce.",
    },
    en: {
      nazovPopis: "Website creation and social network management",
      popis:
        "Creating a presentation website for a local manufacturer of wooden windows and doors. This page has a specific 3d element. Right at the beginning you can see a 3d animated window. 3D has always been a part of our daily work.",
    },
  },
  {
    nazov: "Dalitrans s.r.o.",
    url: "dalitrans",
    color: "#cd0000",
    image: "/prace/dalitrans.webp",
    link: {
      link: "https://www.dalitrans.sk/",
      text: "text-white",
    },
    sk: {
      nazovPopis: "Web stránka pre firmu so službami v logistike a doprave",
      popis:
        "Dalitrans je spoločnosť, ktorá poskytuje služby a logistiku v doprave. Po schválenom dizajne sme sa rozhodli realizovať onepage web stránku s rôznymi animáciami. Slúži ako jednoduchý informačný web. Pre dôkladnejšie prezretie webu kliknite na tlačidlo nižšie.",
    },
    en: {
      nazovPopis:
        "Website for a company with services in logistics and transport",
      popis:
        "Dalitrans is a company that provides services and logistics in transport. After the approved design, we decided to implement a web page with various animations. It serves as a simple information website. Click the button below to browse the site more closely.",
    },
  },
  {
    nazov: "Paverpol obrazy",
    url: "paverpol-obrazy",
    color: "#372b1d",
    image: "/prace/paverpol.webp",
    link: {
      link: "https://paverpolobrazy.sk/",
      text: "text-white",
    },
    sk: {
      nazovPopis: "Kompletný eshop build",
      popis:
        "Paverpol Obrazy od autorky Maťky Hankovej, je kompletne vytvorený eshop. Dizajnová časť bola riešená spolu s autorkou, čiže to nebola čisto naša práca, ale čo sa technickej stránky týka, tak všetko sme to spravili my. Eshop kompletne funguje aj s automatickým posielaním emailov.",
    },
    en: {
      nazovPopis: "Complete eshop build",
      popis:
        "Paverpol Paintings by the author Maťka Hanková, is a completely created eshop. The design part was solved together with the author, so it was not purely our work, but as far as the technical side is concerned, we did it all. The e-shop also works completely with automatic emailing.",
    },
  },
  {
    nazov: "Fair Street Food Trenčín",
    url: "fair-street-food",
    image: "/prace/fairstreetfood.webp",
    color: "#000000",
    link: {
      link: "https://fairtn.sk/",
      text: "text-white",
    },
    sk: {
      nazovPopis: "Pripravovaný projekt pre lokálnu reštauráciu",
      popis:
        "Fair street food je lokálna reštaurácia v Trenčíne. Tento projekt momentálne pripravujeme. Budeme robiť kompletnú dizajnovú aj prográmatorskú časť. Môžte sa na to tešiť, už teraz vieme, že to bude perfektné. ",
    },
    en: {
      nazovPopis: "Upcoming project for a local restaurant",
      popis:
        "Fair street food is a local restaurant in Trenčín. We are currently preparing this project. We will do the complete design and programming part. You can look forward to it, we already know that it will be perfect.",
    },
  },
];

export { prace };

const staticPaths = [];
prace.forEach((praca) => {
  staticPaths.push({ params: { pracaUrl: praca.url } });
});

export { staticPaths };
