//planets
  const krillan, sporio;
  
  Events.On(ClientLoadEvent, () => {
  //krillan
  krillan = new Planet("krillan", Planets.sun, 3.5, 0.5, {
    generator = new SerpuloPlanetGenerator(),
    bloom = true,
    accesible = true,
    alwaysUnlocked = true,
    hasAtmosphere = true,
    atmosphereColor = Color.valueOf("#ab7444"),
    atmosphereRadIn = 0.02,
    atmosphereRadOut = 0.3,
    localizedName = "Krillan"
  });
  krillan.meshLoader = () => extend(HexMesh, krillan, 6, {});
  
  //sporio
  sporio = new Planet("sporio", Planets.sun, 2, 0.5, {
    generator = new SerpuloPlanetGenerator(),
    bloom = true,
    accesible = true,
    alwaysUnlocked = true,
    hasAtmosphere = true,
    atmosphereColor = Color.valueOf("#590cab"),
    atmosphereRadIn = 0.02,
    atmosphereRadOut = 0.3,
    localizedName = "Sporio"
  });
  sporio.meshLoader = () => extend(HexMesh, sporio, 4, {});
  /*
  //embris
  const embris = extend(Planet, "embris", Planets.sun, 3, 0.5);
  embris.generator = new SerpuloPlanetGenerator();
  embris.mesh = new HexMesh(embris, 5);
  embris.bloom = true;
  embris.accesible = true;
  sporio.alwaysUnlocked = true;
  embris.hasAtmosphere = true;
  embris.atmosphereColor = Color.valueOf("#260f06");
  embris.atmosphereRadIn = 0.02;
  embris.atmosphereRadOut = 0.3;
  embris.localizedName = "Embris";

  //Maps
  //krillan
  const forgottenForest = extend(SectorPreset, "forgotten-forest", krillan, 1);
  forgottenForest.captureWave = 30;
  forgottenForest.localizedName = "Forgotten Forest";
  forgottenForest.difficulty = 2;
  forgottenForest.alwaysUnlocked = true;
  
  //sporio
  const sporeLab = extend(SectorPreset, "spore-lab", sporio, 5);
  sporeLab.captureWave = 0;
  sporeLab.localizedName = "Spore Lab";
  sporeLab.difficulty = 1;
  sporeLab.alwaysUnlocked = true;
  
  //embris
  const moltenRiver = extend(SectorPreset, "molten-river", embris, 9);
  moltenRiver.captureWave = 20;
  moltenRiver.localizedName = "Molten River";
  moltenRiver.difficulty = 1;
  moltenRiver.alwaysUnlocked = true;
  */
});
