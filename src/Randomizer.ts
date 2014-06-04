/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/genetic-algorithm/interfaces.d.ts" />

class Randomizer implements IRandomizer {

  constructor(public random:() => number = Math.random) {

  }

  public randomInt(max:number) : number {
    return Math.round(this.random() * max) * 10 / 10;
  }

  public randomBetween(from:number, to:number, step:number) : number {
    var out:number = +from + this.random() * (to - from);
    out = Math.round(out / step) * step;
    return out * 10 / 10; // 10 / 10 is a js fix to make sure this number is adjusted to definition.step
  }

}

export = Randomizer;