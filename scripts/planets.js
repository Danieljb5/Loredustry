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
krillan.meshLoader = () => extend(HexMesh, krillan, 5, {});

const forgottenForest = extend(SectorPreset, "forgotten-forest", krillan, 1, {
  captureWave: 30,
  localizedName: "Forgotten Forest",
  difficulty: 2,
  alwaysUnlocked: true
});

//sporio
const sporio = extend(Planet, "sporio", Planets.serpulo, 2, 0.1, {
  generator: new SerpuloPlanetGenerator(),
  bloom: true,
  radius: 1,
  accesible: true,
  hasAtmosphere: true,
  atmosphereColor: Color.valueOf("#590cab"),
  atmosphereRadIn: 0.02,
  atmosphereRadOut: 0.3,
  localizedName: "Sporio",
  orbitRadius: 0.1
});
sporio.meshLoader = () => extend(HexMesh, sporio, 4, {});

const sporeLab = extend(SectorPreset, "spore-lab", sporio, 1, {
  captureWave: 0,
  localizedName: "Spore Lab",
  difficulty: 1,
  alwaysUnlocked: true
});

//embris
const embris = extend(Planet, "embris", Planets.sun, 3, 0.5, {
  generator: new SerpuloPlanetGenerator(),
  bloom: true,
  radius: 1,
  accesible: true,
  hasAtmosphere: true,
  atmosphereColor: Color.valueOf("#260f06"),
  atmosphereRadIn: 0.02,
  atmosphereRadOut: 0.3,
  localizedName: "Embris"
});
embris.meshLoader = () => extend(HexMesh, embris, 3, {});

const moltenRiver = extend(SectorPreset, "molten-river", embris, 1, {
  captureWave: 20,
  localizedName: "Molten River",
  difficulty: 1,
  alwaysUnlocked: true
});
