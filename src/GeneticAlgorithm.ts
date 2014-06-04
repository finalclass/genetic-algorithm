/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/genetic-algorithm/interfaces.d.ts" />

import Settings = require('./Settings');
import Evolver = require('./Evolver');

class GeneticAlgorithm {

  private settings:ISettings;
  private evolver:IEvolver;

  constructor(options:ISettings) {
    if (!(options instanceof Settings)) {
      options = new Settings(options);
    }

    this.settings = options;
    this.evolver = new Evolver(this.settings);
  }

  public run() {
    return this.evolver.evolve();
  }

}

export = GeneticAlgorithm;