/// <reference path="interfaces.d.ts" />
var Settings = (function () {
    function Settings(options) {
        if (options) {
            this.mutationOperator = options.mutationOperator;
            this.crossoverOperator = options.crossoverOperator;
            this.creatureBuilder = options.creatureBuilder;
            this.fitnessFunction = options.fitnessFunction;
            this.iterations = options.iterations;
            this.mutationProbability = options.mutationProbability;
            this.crossoverProbability = options.crossoverProbability;
            this.populationSize = options.populationSize;
        }
    }
    Object.defineProperty(Settings.prototype, "iterations", {
        get: function () {
            return this._iterations;
        },
        set: function (iterations) {
            if (iterations < 1) {
                iterations = 1;
            }
            this._iterations = iterations;
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(Settings.prototype, "mutationProbability", {
        get: function () {
            return this._mutationProbability;
        },
        set: function (probability) {
            if (probability > 1) {
                probability = 1;
            } else if (probability < 0) {
                probability = 0;
            }
            this._mutationProbability = probability;
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(Settings.prototype, "crossoverProbability", {
        get: function () {
            return this._crossoverProbability;
        },
        set: function (probability) {
            if (probability > 1) {
                probability = 1;
            } else if (probability < 0) {
                probability = 0;
            }
            this._crossoverProbability = probability;
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(Settings.prototype, "populationSize", {
        get: function () {
            return this._populationSize;
        },
        set: function (populationSize) {
            if (populationSize < 1) {
                populationSize = 1;
            }
            this._populationSize = populationSize;
        },
        enumerable: true,
        configurable: true
    });

    return Settings;
})();


module.exports = Settings;

