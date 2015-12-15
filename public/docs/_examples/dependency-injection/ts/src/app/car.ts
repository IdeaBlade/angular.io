// #docregion
class Engine {}

class Tires {}

class Car {
  private engine: Engine;
  private tires: Tires;

  constructor() {
    this.engine = new Engine();
    this.tires = new Tires();
  }
  // Method using the engine and tires
  drive() {}
}
// #enddocregion
