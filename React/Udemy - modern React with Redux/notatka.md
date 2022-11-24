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
1. constructor - good place to do one-time setup, według konwencji tutaj bez data loading
2. render - avoid doing anything besides return jsx
  * Content visible on screen
3. componentDidMount - first render on the screen - good place to do data loading
  * Sit and wait for updates... (wywołanie po setState) *
4. componentDidUpdate - goop place to do more data loading when props/state change
  * Sit and wait until this component is not longer shown *
5. componentWillUnmount - good place to do cleanup (espacially for non-React stuff, eg. Google maps) - używany sporadycznie

Aktualizacja stanu komponentu wywołuje przerenderowanie komponentu i wszystkich jego dzieci.

Nazwę komponentu dodawać jako klasę do elementu root komponentu.

Props - wartość default:
- OR statment - props.message || 'Hello world!'
- Component.defaultProps = { message: 'Hello world!' }

Należy unikać warunków if else itp w metodzie render

organizacja kodu w plikach:
Kod typu KomponentConfig czy helper functions powinny znajdować się na górze, deklaracja i ciało funkcji zawsze jako ostatni blok kodu w pliku. Export na końcu.

# 7 - Handling user inputs (forms and events)

controlled i uncontrolled elemenets
^^^^^^^^^^^^
W podejściu reactowym chcemy mieć jedno scenatralizowane miejsce, z którego czerpiemy informacje, np. nie pobieramy w trakcie działania programu wartości z inputów, inputy same umieszczają swoje dane w stanie.

uncontrolled elem - na jakich temat nie mamy info w stanie
controlled elem - wszystko w nich w stanie

* dotyczy elementów formularzy (interakcja z userem)

# 8 - making api request
Axios - konfiguracja axios może być w zewnętrznym katalogu "api"

## good practice:
3rd part library import above component which used them

Key prop - renderując listę takich samych elementów np. przy użyciu .map() nalezy do każego elementu dodać unikalne id => key={}

React renderując porównuje elementy i zmienia tylke te, których brakuje lub w których zaszła zmiana (sprawa czy key istnieje, następnie porównuje zawartość)

<!-- TODO: destrukturyazacja obiektu -->

# 9 - Refs
Refs - ekwiwalent document.getElementBy* - w reakcie nie pobieramy elementów z DOMu, zamiast tego pobieramy reprezentację z virtualDOM pryz użyciu Refs

# 10 - Hooks

Uzywają hooków bazuje wyłącznie na componentach funkcyjnych. Funkcje będące helperami piszemy na poczatku componentu.

State w hooks:
import React, *{ useState }* from 'react';

inicjalizacja stanu:
const [*exampleState*, *SetExampleState*] = setState(*initial val*)

^^^^^^^^^^^
tutaj nastąpiła destrukturyzacja tabeli, przykład:

const color = ["red", "blue"]

const [firstColor, secondColor] = color

do stałej firstColor zostaje przypisane "red", do stałej secondColor zostaje przypisane "blue"

const [activeItem, setActiveItem] = useState(null)


                |   CLASS COMPONENT                      |   FUNCTION COMPONENT
________________|________________________________________|________________________________
                |                                        |
initialization  |   state = { activeIndex = null }       |   useState(null)
                |                                        |
reference       |   this.state.activeIndex               |   activeIndex
                |                                        |
update          |   this.setState({ activeIndex: 1 })    |   setActiveIndex(1)

## UseEffect

użycie: import React, { useEffect } from 'react';

zapis:

const Component = () => {

  useEffect(() => {
    ...
  }, *);

  return <h1>...</h1>
}

* w miejśću gwiazdki, jako callback funkcji może podać 3 możliwe wartości (zależy od nich kiedy useEffect zostanie wykonany):
  - *nic* jeżeli nie podamy żadne argumentu to useEffect odpali się po zainicjowaniu componentu i w po kazdym przerenderowaniu
  - *[]* jezeli podamy pustą tablice to useEffect odpali się wyłącznie raz po zainicjowaniu componentu
  - *[data]* odpali się po zainicjowaniu componentu oraz zawsze po renderze o ile data ulegnie zmianie

API call wewnatrz useEffect:

useEffect(() => {
  const req = async () => {
    await axios.get('...')
  }
  req();
})

useEffect posiada właściwość posprzątania tzw. clean up function. Clean up funkcji zapisuje sie poprzez zwrócenie arrow function w useEffect.

Cleanup function wywoływana jest zawsze przed nowym przerenderowaniem componentu.

# Redux

Konwencja:
Nazwa type pisana wielkimi literami: type: "DELETE_POLICY"

