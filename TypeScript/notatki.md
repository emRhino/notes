# Type inference

Typescript domyśla się typu automatycznie, np.
const color = red;

jeżeli zadeklarowanie i pyszpisanie wartościd o zmiennej następuje w tej samej linii to zmienna przyjmuje type rezprezentowany przez wartość po prawej stronie znaku przypisania:

const color = 'blue'; // type: string
const color = 12345; // type: number
const color = false; // type: boolean

Kiedy używać: zawsze

# Type annotations

Zadeklarowanie typu w odpowiednim miejscu składni.

Kiedy używać:

- Kiedy funkcja zwraca type: any, musimy doprecyzować typ wartości zwracanej przez funkcję
- Kiedy musimy zainicjować zmienną, której używamy później
- Kiedy chcemy pryzpisać typ, który nie może być wywnioskowany automatycznie

Należy unikać typu any.

Annotacja funkcji:

Zapis 1
const add (a: number; b:number) => number = (a: number, b: number) => {}

Zapis 2 - lepszy
const add = (a: number, b: number): number => {}

Interface - używany dla klasy, tworzymy w nim nowy typ, który opisuje właściwości
