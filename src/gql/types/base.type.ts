export abstract class BaseType<T> {
  constructor(data: T) {
    Object.assign(this, data);
  }
}
