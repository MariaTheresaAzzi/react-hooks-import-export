import React from "react";
import howManyParks from "./parks/howManyParks";
import * as RMFunctions from "./parks/RockyMountain";
import MesaVerde from "./parks/MesaVerde";
//import { trees, wildlife } from "./parks/RockyMountain";
// import {
//   trees as parkTrees,
//   wildlife as parkWildlife,
// } from "./parks/RockyMountain";



function ColoradoStateParks() {

  console.log(parkTrees);
  //console.log(trees);
  //console.log(RMFunctions.trees);
  //RMFunctions.wildlife();
  //RMFunctions.elevation();
  //howManyParks(); // => "42 parks!"
  //wildlife();
  //parkWildlife();
  return (
    <div>
      <MesaVerdePark />
    </div>
  );
}
export default ColoradoStateParks;