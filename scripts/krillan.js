const krillan = extend(Planet, "krillan", Planets.sun, 1, 0.5, {
  generator: new SerpuloPlanetGenerator(),
  bloom: true,
  radius: 1,
  accesible: true,
  hasAtmosphere: true,
  atmosphereColor: Color.valueOf("#ab7444"),
  atmosphereRadIn: 0.02,
  atmosphereRadOut: 0.03,
  localizedName: "Krillan"
});
krillan.meshLoader = () => extend(HexMesh, krillan,2, {});

const forgottenForest = extend(SectorPreset, "forgotten-forest", krillan, 1, {
  captureWave: 30,
  localizedName: "Forgotten Forest",
  difficulty: 1,
  alwaysUnlocked: true
});

//Temp

const archipelago = extend(SectorPreset, "archipelago", krillan, 1, {
  captureWave: 30,
  localizedName: "Archipelago",
  difficulty: 2,
  alwaysUnlocked: true
});

const biomassFacility = extend(SectorPreset, "biomassFacility", krillan, 1, {
  captureWave: 30,
  localizedName: "Biomass Facility",
  difficulty: 2,
  alwaysUnlocked: true
});

const caldera = extend(SectorPreset, "caldera", krillan, 1, {
  captureWave: 30,
  localizedName: "Caldera",
  difficulty: 2,
  alwaysUnlocked: true
});

const canyon = extend(SectorPreset, "canyon", krillan, 1, {
  captureWave: 30,
  localizedName: "Canyon",
  difficulty: 2,
  alwaysUnlocked: true
});

const craters = extend(SectorPreset, "craters", krillan, 1, {
  captureWave: 30,
  localizedName: "Craters",
  difficulty: 2,
  alwaysUnlocked: true
});

const debrisField = extend(SectorPreset, "debrisField", krillan, 1, {
  captureWave: 30,
  localizedName: "Debris Field",
  difficulty: 2,
  alwaysUnlocked: true
});

const desolateRift = extend(SectorPreset, "desolateRift", krillan, 1, {
  captureWave: 30,
  localizedName: "Desolate Rift",
  difficulty: 2,
  alwaysUnlocked: true
});

const extractionOutpost = extend(SectorPreset, "extractionOutpost", krillan, 1, {
  captureWave: 30,
  localizedName: "Extraction Outpost",
  difficulty: 2,
  alwaysUnlocked: true
});
