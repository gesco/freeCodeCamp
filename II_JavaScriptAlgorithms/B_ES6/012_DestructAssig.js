// var voxel = {x: 3.6, y: 7.4, z: 6.54 };
// var x = voxel.x; // x = 3.6
// var y = voxel.y; // y = 7.4
// var z = voxel.z; // z = 6.54
//
// const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
//
// const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54

// var basicOjb = {x: 40};
// //To reassign 'get the value of the x property of basicObj and place its value into bigX' in ES6:
// const { x: bigX } = basicOjb;
// consle.log(bigX) // ans = 40

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const {tomorrow: tempOfTomorrow} = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // 79
