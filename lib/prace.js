const prace = [
  {
    nazov: "Jaroslav Mego s.r.o.",
    url: "jaroslav-mego",
    sk: {
      nazovPopis: "mego",
    },
    en: {
      nazovPopis: "mego - en",
    },
  },
  {
    nazov: "Dalitrans s.r.o.",
    url: "dalitrans",
    sk: {
      nazovPopis: "dali",
    },
    en: {
      nazovPopis: "dali - en",
    },
  },
  {
    nazov: "Paverpol obrazy",
    url: "paverpol-obrazy",
    sk: {
      nazovPopis: "paverpol",
    },
    en: {
      nazovPopis: "paverpol - en",
    },
  },
  {
    nazov: "Fair Street Food Trenčín",
    url: "fair-street-food",
    sk: {
      nazovPopis: "fair street",
    },
    en: {
      nazovPopis: "fair street - en",
    },
  },
];

export { prace };

const staticPaths = [];
prace.forEach((praca) => {
  staticPaths.push({ params: { pracaUrl: praca.url } });
});

export { staticPaths };
