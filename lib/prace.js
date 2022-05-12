const prace = [
  {
    nazov: "Jaroslav Mego s.r.o.",
    url: "jaroslav-mego",
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
    sk: {
      nazovPopis: "Web stránka pre firmu so službami v logistike a doprave",
    },
    en: {
      nazovPopis: "Website for a company with services in logistics and transport",
    },
  },
  {
    nazov: "Paverpol obrazy",
    url: "paverpol-obrazy",
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
