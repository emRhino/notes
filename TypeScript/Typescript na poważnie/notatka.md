TypeScript - powstał po to by wprowadzić do JS silne typowanie; kod a stać się przewidywalny tj. wiadomo jakiego typu dane wchodzą i wiadomo jakiego typu dane wychodzą.

Np..

function add(a: number, b: number) {
  return a+b;
}

Uruchomienie kompilatora w trybie strict:
tsc --strict plik.ts

Mamy kolejny błąd typów. Tryb ścisły szybko stanie się Twoim domyślnym wyborem właśnie ze względu na jeszcze większe bezpieczeństwo typów! Tryb strict włącza następujące opcje kompilatora:
	• noImplicitAny: wyrażenia, które nie mają typu, nie staną się any, tylko spowodują błąd,
	• noImplicitThis: this bez konkretnego typu jest niepoprawny, zamiast stać się any,
	• alwaysStrict: wszystkie pliki są rozumiane w trybie „use strict” z ECMAScript,
	• strictBindCallApply: typy argumentów przekazywanych do bind, call i apply są dokładniej sprawdzane,
	• strictNullChecks: zmienne i argumenty przestają przyjmować null i undefined tak, jakby były prawidłowymi wartościami (jak w przykładzie wyżej),
	• strictFunctionTypes: argumenty funkcji nie są biwariantne (dokładne wyjaśnienie w rozdziale 10),
	• strictPropertyInitialization: wszystkie pola klasy muszą być zainicjalizowane.


Uruchomienie servera node + kompilatora ts:
Tsc --strick nazwa.ts
Node nazwa.js

Ts-node - pakiet, które jednocześnie automatyzuje uruchmienie kompilatora i serwera