/// <reference path="node.d.ts" />
/// <reference path="interfaces.d.ts" />

import Randomizer = require('./Randomizer');
import Population = require('./Population');

class TournamentPreselection implements IPreselection {


  constructor(
    private creatureBuilder:ICreatureBuilder,
    private ntour:number = 10,
    private randomizer:IRandomizer = new Randomizer()) {

  }

  public preselect(population:IPopulation) : IPopulation {
    var nextGeneration:IPopulation = new Population();

    for (var p = 0; p < population.creatures.length; p += 1) {
        var fitness = [];
        var tours = [];
        //wybierz losowych ntour uczestników turnieju
        for (var t = 0; t < this.ntour; t += 1) {
          var random1 = this.randomizer.random();
          var s = Math.floor(random1 * population.creatures.length); //tu podłoga
          tours.push(s);
          fitness[t] = population.creatures[s].score;
        }

        //wyłoń numer zwycięzcy
        var lok = this.getMaxPositionInArray(fitness);
        //zapisz zwycięzcę
        nextGeneration.creatures.push(population.creatures[tours[lok]].clone());
      }

      return nextGeneration;
  }

  private getMaxPositionInArray(array) {
    var max:number = array[0];
    var maxPosition:number = 0;

    for (var i = 0; i < array.length; i += 1) {
      if (array[i] > max) {
        max = array[i];
        maxPosition = i;
      }
    }

    return maxPosition;
  }
  
}

export = TournamentPreselection;