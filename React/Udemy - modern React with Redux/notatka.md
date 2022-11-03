# JSX
## String literal

<MyComponent message="Hello world" />
jest tym samym co:
<MyComponent message={'Hello world'} />

lub jako dziecko komponentu:

<MyCompontent>Hello world</MyComponent>

Kod JS zawsze w nawiasach wąsatych - {}
atrybuty w komponentach JSX to propsy, zapis:
- liczba: {36}
- tekst: "Hello world"
- tablica: {[1,2,3]}
- zmienna: {variable}
- style (inline): {{color: 'red'}}

nazwy propsów pisane camelCase


