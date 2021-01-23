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
krillan.meshLoader = () => extend(HexMesh, krillan, 10, {});

const forgottenForest = extend(SectorPreset, "forgotten-forest", krillan, 1, {
  captureWave: 30,
  localizedName: "Forgotten Forest",
  difficulty: 1,
  alwaysUnlocked: true
});
