/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/genetic-algorithm/interfaces.d.ts"/>
var Population = (function () {
    function Population() {
        this.creatures = [];
    }
    Population.prototype.findBest = function () {
        var best = this.creatures[0];

        for (var p = 0; p < this.creatures.length; p += 1) {
            var solution = this.creatures[p];
            if (solution && solution.score > best.score) {
                best = solution;
            }
        }

        return best;
    };
    return Population;
})();

module.exports = Population;
//# sourceMappingURL=Population.js.map
