export class Maybe {
  public $value: any;

  static of(value) {
    return new Maybe(value)
  }

  constructor(value) {
    this.$value = value
  }

  get isNothing() {
    return this.$value === null || this.$value === undefined
  }

  map(fn) {
    this.isNothing ? this : new Maybe(fn(this.$value))
  }
}