//krillan
const krillan = extend(Planet, "krillan", Planets.sun, 3.5, 0.5, {
  generator: new SerpuloPlanetGenerator(),
  bloom: true,
  radius: 1,
  accesible: true,
  hasAtmosphere: true,
  atmosphereColor: Color.valueOf("#ab7444"),
  atmosphereRadIn: 0.02,
  atmosphereRadOut: 0.3,
  localizedName: "Krillan"
});
krillan.meshLoader = () => extend(HexMesh, krillan, 6, {});

//sporio
const sporio = extend(Planet, "sporio", krillan, 2, 0.5, {
  generator: new SerpuloPlanetGenerator(),
  bloom: true,
  radius: 0.5,
  orbitRadius: 7,
  accesible: true,
  hasAtmosphere: false,
  localizedName: "Sporio"
});
sporio.meshLoader = () => extend(HexMesh, sporio, 4, {});

//embris
const embris = extend(Planet, "embris", Planets.sun, 3, 0.5, {
  generator: new EmbrisPlanetGenerator(),
  bloom: true,
  radius: 1,
  orbitRadius: 45,
  accesible: true,
  hasAtmosphere: true,
  atmosphereColor: Color.valueOf("#260f06"),
  atmosphereRadIn: 0.02,
  atmosphereRadOut: 0.3,
  localizedName: "Embris"
});
embris.meshLoader = () => extend(HexMesh, embris, 5, {});

//Maps
//krillan
const forgottenForest = extend(SectorPreset, "forgotten-forest", krillan, 1, {
  captureWave: 30,
  localizedName: "Forgotten Forest",
  difficulty: 2,
  alwaysUnlocked: true
});

//sporio
const sporeLab = extend(SectorPreset, "spore-lab", sporio, 5, {
  captureWave: 0,
  localizedName: "Spore Lab",
  difficulty: 1,
  alwaysUnlocked: true
});

//embris
const moltenRiver = extend(SectorPreset, "molten-river", embris, 9, {
  captureWave: 20,
  localizedName: "Molten River",
  difficulty: 1,
  alwaysUnlocked: true
});
