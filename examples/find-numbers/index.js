/// <reference path="../../src/typings/node/node.d.ts"/>
/// <reference path="../../src/typings/genetic-algorithm/interfaces.d.ts"/>
var GeneticAlgorithm = require('../../src/GeneticAlgorithm');

var NUMBER_OF_NUMBERS = 100;

var randNum = function () {
    return Math.random() * 100;
};

var Creature = (function () {
    function Creature() {
        this.score = 0;

        this.numbers = new Array(NUMBER_OF_NUMBERS);

        for (var i = 0; i < NUMBER_OF_NUMBERS; i += 1) {
            this.numbers[i];
        }
    }
    Creature.prototype.clone = function () {
        var point = new Creature();
        point.numbers = this.numbers.slice(0);
        return point;
    };

    Creature.prototype.randomize = function () {
        for (var i = 0; i < NUMBER_OF_NUMBERS; i += 1) {
            this.numbers[i] = randNum();
        }
    };
    return Creature;
})();

var CreatureBuilder = (function () {
    function CreatureBuilder() {
    }
    CreatureBuilder.prototype.execute = function () {
        return new Creature();
    };
    return CreatureBuilder;
})();

var MutationOperator = (function () {
    function MutationOperator() {
    }
    MutationOperator.prototype.execute = function (creature) {
        var rand = Math.random();
        var gene = Math.floor(Math.random() * NUMBER_OF_NUMBERS);

        creature.numbers[gene] = randNum();

        return creature;
    };
    return MutationOperator;
})();

var CrossoverOperator = (function () {
    function CrossoverOperator() {
    }
    CrossoverOperator.prototype.execute = function (a, b) {
        var pair = {
            creature1: a.clone(),
            creature2: b.clone()
        };
        var rand = Math.random();
        var crossPoint = Math.floor(Math.random() * NUMBER_OF_NUMBERS);

        for (var i = 0; i < NUMBER_OF_NUMBERS; i += 1) {
            if (i < crossPoint) {
                pair.creature1.numbers[i] = b.numbers[i];
            } else {
                pair.creature2.numbers[i] = a.numbers[i];
            }
        }

        return pair;
    };
    return CrossoverOperator;
})();

var perfectSolution = new Creature();
for (var i = 0; i < NUMBER_OF_NUMBERS; i += 1) {
    perfectSolution.numbers[i] = 50;
}

var FitnessFunction = (function () {
    function FitnessFunction() {
    }
    FitnessFunction.prototype.execute = function (creature) {
        var sumOfPowers = 0;

        for (var i = 0; i < NUMBER_OF_NUMBERS; i += 1) {
            sumOfPowers += Math.pow(perfectSolution.numbers[i] - creature.numbers[i], 2);
        }

        return 1 / Math.sqrt(sumOfPowers);
    };
    return FitnessFunction;
})();

var ga = new GeneticAlgorithm({
    mutationOperator: new MutationOperator(),
    crossoverOperator: new CrossoverOperator(),
    fitnessFunction: new FitnessFunction(),
    creatureBuilder: new CreatureBuilder(),
    crossoverProbability: 0.6,
    mutationProbability: 0.3,
    populationSize: 200,
    iterations: 300,
    ntour: 2
});

var time = process.hrtime();
var solution = ga.run();
console.log('TIME', process.hrtime(time)[1] * 1e-6);

console.log(solution);
//# sourceMappingURL=index.js.map
