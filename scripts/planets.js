  //planets
  //krillan
  const krillan = extend(Planet, "krillan", Planets.sun, 3.5, 0.5);
  krillan.generator = new SerpuloPlanetGenerator();
  krillan.mesh = new HexMesh(krillan, 6);
  krillan.orbitRadius = 4;
  krillan.orbitTime = 1.5 * 60;
  krillan.rotateTime = 60;
  krillan.bloom = true;
  krillan.accesible = true;
  krillan.alwaysUnlocked = true;
  krillan.hasAtmosphere = true;
  krillan.atmosphereColor = Color.valueOf("#ab7444");
  krillan.atmosphereRadIn = 0.02;
  krillan.atmosphereRadOut = 0.3;
  krillan.localizedName = "Krillan";
  /*
  //sporio
  const sporio = extend(Planet, "sporio", krillan, 2, 0.5);
  sporio.generator = new SerpuloPlanetGenerator();
  sporio.mesh = new HexMesh(sporio, 4);
  sporio.bloom = true;
  sporio.accesible = true;
  sporio.alwaysUnlocked = true;
  sporio.hasAtmosphere = true;
  sporio.atmosphereColor = Color.valueOf("#590cab");
  sporio.atmosphereRadIn = 0.02;
  sporio.atmosphereRadOut = 0.3;
  sporio.localizedName = "Sporio";
  
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
  */
  //Maps
  //krillan
  const forgottenForest = extend(SectorPreset, "forgotten-forest", krillan, 1);
  forgottenForest.captureWave = 30;
  forgottenForest.localizedName = "Forgotten Forest";
  forgottenForest.difficulty = 2;
  forgottenForest.alwaysUnlocked = true;
  /*
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
