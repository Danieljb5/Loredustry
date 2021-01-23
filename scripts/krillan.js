const krillan = extend(Planet, "templura", Planets.sun, 1, 0.5, {
  generator: new SerpuloPlanetGenerator(),
  bloom: true,
  radius: 10,
  accesible: true,
  hasAtmosphere: true,
  atmosphereColor: Color.valueOf("#ab7444"),
  atmosphereRadIn: 0.02,
  atmosphereRadOut: 0.3,
  localizedName: "Krillan"
});
krillan.meshLoader = () => extend(HexMesh, krillan, 2, {});

const forgottenForest = extend(SectorPreset, "forgotten-forest", templura, 1, {
  captureWave: 30,
  localizedName: "Forgotten Forest",
  difficulty: 1,
  alwaysUnlocked: true
});
