export class Either {
  public $value: any;

  static of(value): Right {
    return new Right(value)
  }

  constructor(value) {
    this.$value = value
  }
}


export class Right extends Either {
  map(fn): Either {
    return Either.of(fn(this.$value))
  }
}

export class Left extends Either {
  map(): Left {
    return this
  }
}

export const left = (value) => new Left(value)

