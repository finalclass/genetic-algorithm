/// <reference path="../../src/typings/node/node.d.ts"/>
/// <reference path="../../src/typings/genetic-algorithm/interfaces.d.ts"/>
var GeneticAlgorithm = require('../../src/GeneticAlgorithm');

var Point = (function () {
    function Point() {
        this.score = 0;
        this.x = 0;
        this.y = 0;
    }
    Point.prototype.clone = function () {
        var point = new Point();
        point.x = this.x;
        point.y = this.y;
        return point;
    };

    Point.prototype.randomize = function () {
        this.x = Math.random() * 100;
        this.y = Math.random() * 100;
    };
    return Point;
})();

var CreatureBuilder = (function () {
    function CreatureBuilder() {
    }
    CreatureBuilder.prototype.execute = function () {
        return new Point();
    };
    return CreatureBuilder;
})();

var MutationOperator = (function () {
    function MutationOperator() {
    }
    MutationOperator.prototype.execute = function (creature) {
        var rand = Math.random();

        if (rand > 0.5) {
            creature.x = Math.random() * 100;
        } else {
            creature.y = Math.random() * 100;
        }

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

        if (rand > 0.5) {
            pair.creature1.x = b.x;
            pair.creature2.x = a.x;
        } else {
            pair.creature1.y = b.y;
            pair.creature2.y = a.y;
        }

        return pair;
    };
    return CrossoverOperator;
})();

var perfectSolution = new Point();
perfectSolution.x = 50;
perfectSolution.y = 50;

var FitnessFunction = (function () {
    function FitnessFunction() {
    }
    FitnessFunction.prototype.execute = function (creature) {
        var distance = Math.sqrt(Math.pow(perfectSolution.x - creature.x, 2) + Math.pow(perfectSolution.y - creature.y, 2));

        return 1 / distance;
    };
    return FitnessFunction;
})();

var ga = new GeneticAlgorithm({
    mutationOperator: new MutationOperator(),
    crossoverOperator: new CrossoverOperator(),
    fitnessFunction: new FitnessFunction(),
    creatureBuilder: new CreatureBuilder(),
    crossoverProbability: 0.6,
    mutationProbability: 0.1,
    populationSize: 750,
    iterations: 2000,
    ntour: 2
});

var time = process.hrtime();
var solution = ga.run();
console.log('TIME', process.hrtime(time)[1] * 1e-6);

console.log(solution);
//# sourceMappingURL=index.js.map
