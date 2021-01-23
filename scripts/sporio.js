const sporio = extend(Planet, "templura", Planets.krillan, 1.5, 0.5, {
  generator: new SerpuloPlanetGenerator(),
  bloom: true,
  radius: 0.1,
  accesible: true,
  hasAtmosphere: true,
  atmosphereColor: Color.valueOf("#4b1596"),
  atmosphereRadIn: 0.02,
  atmosphereRadOut: 0.3,
  localizedName: "Sporio"
 });
 sporio.meshLoader = () => extend(HexMesh, sporio, 2, {});
