/// <reference path="../../src/node.d.ts"/>
/// <reference path="../../src/interfaces.d.ts"/>


import GeneticAlgorithm = require('../../src/GeneticAlgorithm');

var ga = new GeneticAlgorithm({
  mutationOperator: {
    execute: (creature:any) => {}
  },
  crossoverOperator: {
    execute: (a:any, b:any) => {
      if (Math.random() > 0.5) {
        return {x: a.x, y: b.y};
      } else {
        return {x: b.x, y: a.y};
      }
    }
  },
  creatureBuilder: {
    execute: () => {
      return {
        x: Math.ceil(Math.random() * 100),
        y: Math.ceil(Math.random() * 100)
      };
    }
  },    
  fitnessFunction: {
    execute: (creature:any) => {
      return 0;
    }
  },
  iterations: 50,
  populationSize: 50,
  mutationProbability: 0.1,
  crossoverProbability: 0.6
});