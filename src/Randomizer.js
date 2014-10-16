/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/genetic-algorithm/interfaces.d.ts" />
var Randomizer = (function () {
    function Randomizer(random) {
        if (random === void 0) { random = Math.random; }
        this.random = random;
    }
    Randomizer.prototype.randomInt = function (max) {
        return Math.round(this.random() * max) * 10 / 10;
    };
    Randomizer.prototype.randomBetween = function (from, to, step) {
        var out = +from + this.random() * (to - from);
        out = Math.round(out / step) * step;
        return out * 10 / 10; // 10 / 10 is a js fix to make sure this number is adjusted to definition.step
    };
    return Randomizer;
})();
module.exports = Randomizer;
//# sourceMappingURL=Randomizer.js.map