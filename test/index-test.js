var tape = require("tape"),
    d3 = require("../");

tape("exports the expected schemes", function(test) {
  test.deepEqual(Object.keys(d3).sort(), [
    "interpolateBlues",
    "interpolateBrBG",
    "interpolateBuGn",
    "interpolateBuPu",
    "interpolateCool",
    "interpolateCubehelixDefault",
    "interpolateGnBu",
    "interpolateGreens",
    "interpolateGreys",
    "interpolateInferno",
    "interpolateMagma",
    "interpolateOrRd",
    "interpolateOranges",
    "interpolatePRGn",
    "interpolatePiYG",
    "interpolatePlasma",
    "interpolatePuBu",
    "interpolatePuBuGn",
    "interpolatePuOr",
    "interpolatePuRd",
    "interpolatePurples",
    "interpolateRainbow",
    "interpolateRdBu",
    "interpolateRdGy",
    "interpolateRdPu",
    "interpolateRdYlBu",
    "interpolateRdYlGn",
    "interpolateReds",
    "interpolateSinebow",
    "interpolateSpectral",
    "interpolateViridis",
    "interpolateWarm",
    "interpolateYlGn",
    "interpolateYlGnBu",
    "interpolateYlOrBr",
    "interpolateYlOrRd",
    "schemeAccent",
    "schemeBlues",
    "schemeBrBG",
    "schemeBuGn",
    "schemeBuPu",
    "schemeCategory10",
    "schemeDark2",
    "schemeGnBu",
    "schemeGreens",
    "schemeGreys",
    "schemeOrRd",
    "schemeOranges",
    "schemePRGn",
    "schemePaired",
    "schemePastel1",
    "schemePastel2",
    "schemePiYG",
    "schemePuBu",
    "schemePuBuGn",
    "schemePuOr",
    "schemePuRd",
    "schemePurples",
    "schemeRdBu",
    "schemeRdGy",
    "schemeRdPu",
    "schemeRdYlBu",
    "schemeRdYlGn",
    "schemeReds",
    "schemeSet1",
    "schemeSet2",
    "schemeSet3",
    "schemeSpectral",
    "schemeYlGn",
    "schemeYlGnBu",
    "schemeYlOrBr",
    "schemeYlOrRd"
  ]);
  test.end();
});
