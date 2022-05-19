const prace = [
  {
    nazov: "Jaroslav Mego s.r.o.",
    url: "jaroslav-mego",
    color: "#b3e4db",
    sk: {
      nazovPopis: "Vytvorenie web stránky a správa sociálnych sietí",
    },
    en: {
      nazovPopis: "Website creation and social network management",
    },
  },
  {
    nazov: "Dalitrans s.r.o.",
    url: "dalitrans",
    color: "#cd0000",
    image: "/prace/dalitrans.webp",
    sk: {
      nazovPopis: "Web stránka pre firmu so službami v logistike a doprave",
      popis:
        "Dalitrans je spoločnosť, ktorá poskytuje služby a logistiku v doprave. Po schválenom dizajne sme sa rozhodli realizovať onepage web stránku s rôznymi animáciami. Slúži ako jednoduchý informačný web. Pre dôkladnejšie prezretie webu kliknite na tlačidlo nižšie.",
    },
    en: {
      nazovPopis:
        "Website for a company with services in logistics and transport",
      popis:
        "lorem ipsum potrebujem nejaky nahodny dlhy text just for fun omg este dlhsi deleeeeeeeeeej - en",
    },
  },
  {
    nazov: "Paverpol obrazy",
    url: "paverpol-obrazy",
    color: "#372b1d",
    sk: {
      nazovPopis: "Kompletný eshop build",
    },
    en: {
      nazovPopis: "Complete eshop build",
    },
  },
  {
    nazov: "Fair Street Food Trenčín",
    url: "fair-street-food",
    sk: {
      nazovPopis: "Pripravovaný projket - web stránka ",
    },
    en: {
      nazovPopis: "Upcomming project - web page",
    },
  },
];

export { prace };

const staticPaths = [];
prace.forEach((praca) => {
  staticPaths.push({ params: { pracaUrl: praca.url } });
});

export { staticPaths };
