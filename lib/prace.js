const prace = [
  {
    nazov: "Jaroslav Mego s.r.o.",
    url: "jaroslav-mego",
    color: "#b3e4db",
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
    color: "#cd0000",
    sk: {
      nazovPopis: "dali",
      popis:
        "lorem ipsum lorem ipsum potrebujem nejaky nahodny dlhy text just for fun omg este dlhsi deleeeeeeeeeej",
    },
    en: {
      nazovPopis: "dali - en",
      popis:
        "lorem ipsum potrebujem nejaky nahodny dlhy text just for fun omg este dlhsi deleeeeeeeeeej - en",
    },
  },
  {
    nazov: "Paverpol obrazy",
    url: "paverpol-obrazy",
    color: "#372b1d",
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
