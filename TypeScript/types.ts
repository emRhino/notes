const today = new Date();

const person = {
  age: 20,
};

const age: number = 76;
const firstName: string = 'Ewa';

const ages: number[] = [12, 23, 56];
const firstNames: string[] = ['Marta', 'Ula'];

class Car {
  'sound': 'wruuum';
}
const opel: Car = new Car();
opel.sound;

const literalObject: { name: string; age: number; city: string } = {
  name: 'John',
  age: 20,
  city: 'Warsaw',
};

// interface Person = {
//   name: string,
//   age: number,
//   city: string
// }

const profile = {
  name: 'Marcin',
  age: 20,
  city: 'Pru',
  coords: {
    lat: 23,
    long: 24,
  },
  setAge(num: number): void {
    this.age = num;
  },
};

const { city }: { city: string } = profile;

const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;

console.log(long);

// const jsn = '{"name":"John","age":31,"city":"New York"}';
// const result: number = JSON.parse(jsn);

// const test = "asd";

const add = (a: number, b: number): number => {
  return a + b;
};

const cars = [['asd'], [123]];

interface Carrr {
  summary(): string;
}

const oldCivic = {
  name: 'Honda',
  year: 2000,
  broken: true,
  summary() {
    return `This car is ${this.name}`;
  },
};

const drink = {
  alko: 20,
  name: 'insh',
  summary() {
    return `This is ${this.name}`;
  },
};

const printItem = (item: Carrr): void => {
  console.log(item.summary());
};

printItem(oldCivic);
