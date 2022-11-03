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
