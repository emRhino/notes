Komponenty:
- funkcyjne
- klasowe
- hooki

# 2 - JSX

String literal

<MyComponent message="Hello world" />
jest tym samym co:
<MyComponent message={'Hello world'} />

lub jako dziecko komponentu:

<MyCompontent>Hello world</MyComponent>

Kod JS zawsze w nawiasach klamrowych - {}

atrybuty w komponentach JSX to propsy, zapis:
- liczba: {36}
- tekst: "Hello world"
- tablica: {[1,2,3]}
- zmienna: {variable}
- style (inline):
  - style={{ color: 'red' }}
  - style={{ textDecoration: 'none', paddingTop: '10px' }}

nazwy atrybutów pisane camelCase

dla atrybutów zdefiniowanych jako true wystarczy napisać <MyComponent spellCheck /> zamiast <MyComponent spellCheck={true}>

# 3 - Props

Flow (komunikacja propsów z góry na dół, od rodziców w dół do dzieci / dziedziczenie)

# 5 - State
Stan dostępny tylko dla komponentów klasyych oraz hooków.
Stan jest to zwykły obiekt JS.
Aktualizacja stanu powoduje przerenderowanie komponentu
Stan musi być zadekalowany w momencie tworzeniu komponentu
*Stan powinien być aktualizowany (mutowany) przez metodę setState*

Inicjalizacja stanu następuje w konstruktorze klasy.

Komponent rozszerzający React.Component zawsze w konstruktorze musi mieć Super(props) - zapewnia to poprawne dziedzicznie wszystkie metoda i atrybutów do twórzonego komponentu.

# 6 - Component Lifecycle Methods

Kolejność egzekucji:
1. constructor
2. render
  * Content visible on screen
3. componentDidMount - first render on the screen
  * Sit and wait for updates... (wywołanie po setState) *
4. componentDidUpdate
  * Sit and wait until this component is not longer shown *
5. componentWillUnmount

