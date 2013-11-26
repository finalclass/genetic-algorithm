/// <reference path="../../src/node.d.ts"/>
/// <reference path="../../src/interfaces.d.ts"/>

var GeneticAlgorithm = require('../../src/GeneticAlgorithm');

// var ga = new GeneticAlgorithm({
//   mutationOperator: {
//     execute: function (creature) {
//     }
//   },
//   crossoverOperator: {
//     execute: function (a, b) {
//       if (Math.random() > 0.5) {
//         return { x: a.x, y: b.y };
//       } else {
//         return { x: b.x, y: a.y };
//       }
//     }
//   },
//   creatureBuilder: {
//     execute: function () {
//       return {
//         x: Math.ceil(Math.random() * 100),
//         y: Math.ceil(Math.random() * 100)
//       };
//     }
//   },
//   fitnessFunction: {
//     execute: function (creature) {
//       return 0;
//     }
//   },
//   iterations: 50,
//   populationSize: 50,
//   mutationProbability: 0.1,
//   crossoverProbability: 0.6
// });

