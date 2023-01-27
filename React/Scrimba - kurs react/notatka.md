# JSX

class => className
<img> => <img /> - wszystkie tagi muszą być domknięte

---

# Dobre praktyki:

1. jeden komponent = jeden (osobny) plik - nazwa pliki taka sama jak nazwa komponentu
   Nazwy komponentów pisane PascalCase

Metoda renderująca aplikację na ekranie (do wersje React 17):
ReactDOM.render(component, placeholder [id/klasa/tag/etc])

Od wersji react 18:
ReactDOM.createRoot(placeholder [id/klasa/tag/etc]).render(component)

Alternatywny zapis:
const root = ReactDOM.createRoot(placeholder [id/klasa/tag/tc])
root.render(component)

Do wersji 17:
import ReactDOM from 'react-dom'

Od wersji 18:
import ReactDOM from 'react-dom/client'

Nazwy komponentów pisane PascalCase (z wielkich liter) np:

const HelloWorld = () => {}
<Hello />

# Programowanie deklaratywne vs imperatywne:

_Deklaratywne_: mówię co ma być zrobione, jaki jest cel, nie piszę kodu krok po kroku
_Imperatywne_: piszę krok po kroku co musi być wykonane aby osiągnąć cel

Jeżeli występuje kilka komponentów obok siebie to muszą być zagnieżdżone w jakimś rodzicu, np.:

- <div></div> - klasyczny div
- <> </> = <React.Fragment></React.Fragment> - fragment tags, nie rozdmuchuje DOM ale zmienia relacje pomiędzy kompnentami (spłaszcza strukturę) - renderuje kompunenty wyższęgo poziomu razem z zagnieżdżonymi komponentami na tym samym poziomie

ReactDOM.render wyświetla zawsze jeden element, który może zagnieżdżać w sobie wiele innych elementów.

W przypadku return i przypisaniu do zmiennej JSX powinien być w nawiasach (). Nawias zaczyna się w tej samej linii co return lub =

React składnię JSX kompiluje do obiektów JS.

TODO: Sprawdzić import/export ES6

Eksport modułów poprzez:

export default …

const log = require('');

------------------------ Pro kurs ------------------------
Domyślne propsy (ustawia się je w tym samym pliku co komponent, przed exportem:

<component>.defaultProps = {
prop: xyz
}

w przypadku komponentu klasowego default props ustawia się jako static properties w klasie

Biblioteka Prop-types - wprowadza walidację typów do propsów:

<component>/propTypes = {
prop: PropTypes.string / prop: PropTypes.string.isRequired
}

https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes

# Higher order components

HOC - analigocznie do higher order function są to takie komponenty, które jako argument przyjmują inny komponent i zwracają nowy z dodanymi przez siebie elementami lub logiką.

komponent#1

withKomponent#2(komponent#1)

return kompontent#3

HOC jest wzorcem, nie jest narzucony przez logikę, przyjmuje rolę dekoratora

nazwa higher order components powinny zaczynać się od with z małej litery np.. withExtraProp

# update state

jezeli aktualizowany stan jest zalezny od wczesniejej wartości stanu, to może wystapić bug polegający na nieprawidłowym aktualizowaniu nowego stanu - np w wyniku double click na elemencie przechwytującym kliknięcie. Dzieje się tak dlatego, że react nie aktulizuje stanu dokładnie w momnecie wywołania, zbiera kolejkę i aktulizuje stan w pewnym momencie w przyszłości. Aby to rozwiązać nalezy skorzystać z funkcyjnego update stanu.

dwa rodzaj update stanu
prosty (kiedy nowa wartość stanu nie zależy od starej):
const handleClick = () => {
setCounter(10);
}

funkcyjny (kiedy nowa wartość stanu zależy od starej):
const handleClick = () => {
setCounter(currentCounter => {
if (currentCounter > 10 {
return 20;
} else {
return currentCounter + 1;
})
})
}
