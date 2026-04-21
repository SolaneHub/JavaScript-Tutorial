# JavaScript Tutorial

Basato sulla [JavaScript Roadmap di roadmap.sh](https://roadmap.sh/javascript)

## 19 Aprile - Fondamenta: Variabili e Scope

### 1. Dichiarazione Variabili: `var`, `let` e `const`

In JavaScript, abbiamo tre modi principali per dichiarare una variabile. La scelta influisce direttamente sullo **scope** (visibilità) e sulla **mutabilità**.

#### `var` (Il Metodo Tradizionale)
- **Ambito (Scope):** Globale o di funzione. Non rispetta i blocchi di codice (come `if`, `for`).
- **Caratteristiche:** È il modo "vecchio". Può essere ridichiarata e soffre di **Hoisting** (la dichiarazione viene "spostata" in alto, portando a risultati inaspettati).

#### `let` (Variabile Riassegnabile)
- **Ambito (Scope):** Di blocco (`{ ... }`). Vive solo all'interno delle parentesi graffe in cui è definita.
- **Caratteristiche:** Non può essere ridichiarata nello stesso ambito. Ideale per contatori o valori che cambiano.
- **Esempio:**
```javascript
let punteggio = 0;
if (true) {
    let bonus = 5;
    punteggio += bonus;
}
// console.log(bonus); // ERRORE: bonus non è definito qui
```

#### `const` (Costante)
- **Ambito (Scope):** Di blocco (`{ ... }`).
- **Caratteristiche:** Deve essere inizializzata subito e non può essere riassegnata. Per oggetti e array, il contenuto può cambiare, ma il riferimento no.

---

### 2. Capire lo Scope (Ambito)

Lo Scope determina dove una variabile è accessibile nel codice:

- **Global Scope:** Variabili dichiarate fuori da tutto. Accessibili ovunque.
- **Function Scope:** Variabili (`var`, `let`, `const`) dentro una funzione. Accessibili solo lì dentro.
- **Block Scope:** Variabili (`let`, `const`) dentro un blocco `{ ... }`. Fondamentale per evitare errori in cicli e condizioni.

---

### 3. Best Practice: Quale scegliere?

La regola d'oro moderna è:
1. **`const` per impostazione predefinita:** Rende il codice prevedibile.
2. **`let` solo se necessario:** Se il valore deve essere riassegnato (es. in un loop).
3. **Evita `var`:** È considerata una pratica superata che può introdurre bug difficili da scovare.

## 20 Aprile - Fondamenta: Data Types

### 1. I 7 Tipi Primitivi e gli Oggetti

In JavaScript, i dati si dividono in **Primitivi** (immutabili e memorizzati per valore) e **Oggetti** (mutabili e memorizzati per riferimento).

#### `Number` (Numeri)
- Rappresenta sia numeri interi che decimali (es. `42`, `-3.14`).
- Include valori speciali come `Infinity`, `-Infinity` e `NaN` (Not-a-Number).
- **Esempio:** `let eta = 25;`

#### `BigInt` (Grandi Interi)
- Usato per numeri interi oltre il limite di sicurezza di `Number` (±2⁵³ - 1).
- Si crea aggiungendo una `n` alla fine del numero.
- **Esempio:** `const numeroGigante = 9007199254740991n;`

#### `String` (Stringhe)
- Sequenze di caratteri racchiuse tra apici singoli (`'`), doppi (`"`) o backtick (`` ` ``).
- I backtick permettono l'interpolazione di variabili: `` `Ciao, ${nome}` ``.
- **Esempio:** `let saluto = "Buongiorno";`

#### `Boolean` (Booleani)
- Può essere solo `true` o `false`. Fondamentale per la logica condizionale.
- **Esempio:** `let isOnline = true;`

#### `Null` (Nullo)
- Rappresenta l'assenza intenzionale di un valore. È un valore che "non c'è" per scelta dello sviluppatore.
- **Esempio:** `let risultato = null;`

#### `Undefined` (Non Definito)
- Indica che una variabile è stata dichiarata ma non le è ancora stato assegnato un valore.
- **Esempio:** `let x; // x è undefined`

#### `Symbol` (Simbolo)
- Rappresenta un identificatore unico e immutabile. Spesso usato come chiave per proprietà degli oggetti per evitare collisioni.
- **Esempio:** `const id = Symbol('descrizione');`

---

### 2. L'operatore `typeof`

Per conoscere il tipo di una variabile, usiamo l'operatore `typeof`:

```javascript
console.log(typeof 42);          // "number"
console.log(typeof "Ciao");      // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (Nota: questo è un bug storico di JS!)
console.log(typeof 10n);         // "bigint"
console.log(typeof Symbol());    // "symbol"
```

---

### 3. Primitivi vs Oggetti

Mentre i primitivi sono valori singoli, gli **Oggetti** (`Object`) sono collezioni di dati (coppie chiave-valore) o strutture più complesse come Array e Funzioni.

---

### 4. Built-in Objects (Oggetti Integrati)

JavaScript include degli **Oggetti Globali** predefiniti che forniscono funzionalità fondamentali già pronte all'uso. Possiamo dividerli principalmente in due categorie:

#### Wrapper dei Primitivi
Permettono di trattare i tipi primitivi come oggetti, dando accesso a metodi utili (es: `'testo'.toUpperCase()`):
- **`String`**: Metodi per manipolare stringhe (ricerca, taglio, formattazione).
- **`Number`**: Proprietà come `MAX_VALUE` e metodi per gestire precisione e conversioni.
- **`Boolean`**: L'oggetto wrapper per i valori logici.

#### Oggetti di Utilità e Struttura
- **`Math`**: Oggetto che fornisce costanti e funzioni matematiche (es: `Math.PI`, `Math.random()`, `Math.sqrt()`). *Nota: Math non è un costruttore.*
- **`Date`**: Indispensabile per gestire date, orari e calcoli temporali.
- **`Error`**: Utilizzato per generare messaggi di errore personalizzati o gestire eccezioni.
- **`Function`**: Il costruttore alla base di tutte le funzioni JavaScript.

## Type Casting e Coercion

Il Type Casting (o Type Conversion) è il processo di conversione di un valore da un tipo di dato a un altro (ad esempio, da una stringa a un numero).

### 1. Type Conversion vs Type Coercion

In JavaScript, distinguiamo due modi in cui avviene la conversione:

- **Type Conversion (Esplicita):** Quando lo sviluppatore converte intenzionalmente un tipo in un altro usando funzioni integrate.
- **Type Coercion (Implicita):** Quando JavaScript converte automaticamente i tipi durante un'operazione (ad esempio, sommando un numero e una stringa).

---

### 2. Type Coercion (Conversione Implicita)

JavaScript è un linguaggio **debolmente tipizzato** (*loosely typed*), il che significa che cerca di "aiutarci" convertendo i valori per far funzionare le operazioni.

#### Esempi comuni:
- **Stringhe e Numeri (`+`):** Se uno dei due operandi è una stringa, l'operatore `+` concatena invece di sommare.
  ```javascript
  console.log("5" + 2); // "52" (Il numero 2 diventa stringa)
  ```
- **Operazioni Matematiche (`-`, `*`, `/`):** JavaScript converte le stringhe in numeri.
  ```javascript
  console.log("10" - 2);  // 8
  console.log("5" * "2"); // 10
  ```
- **Booleani:** In contesti logici (come un `if`), i valori vengono convertiti in booleani.

---

### 3. Type Conversion (Conversione Esplicita)

Usiamo i costruttori o funzioni globali per forzare la conversione:

#### Convertire in Numero
- `Number(valore)`: Converte in numero (ritorna `NaN` se non possibile).
- `parseInt(stringa)` / `parseFloat(stringa)`: Analizzano una stringa per estrarre un intero o un decimale.
  ```javascript
  let str = "42";
  let num = Number(str); // 42
  let prezzo = parseInt("10.50€"); // 10
  ```

#### Convertire in Stringa
- `String(valore)` o il metodo `.toString()`.
  ```javascript
  let bool = true;
  String(bool);      // "true"
  (123).toString();  // "123"
  ```

#### Convertire in Booleano
- `Boolean(valore)`: Utile per verificare se un valore è "vero" o "falso" secondo le regole di JS.

## Data Structures

Le strutture dati in JavaScript possono essere suddivise in due grandi categorie: **Built-in** (integrate) e **Custom** (personalizzate).

### 1. Strutture Dati: Built-in vs Custom
- **Built-in (Predefinite):** Sono integrate nativamente nel linguaggio. Possono essere utilizzate immediatamente (es: `Array`, `Object`, `Map`, `Set`).
- **Custom (Personalizzate):** Non sono fornite di default e devono essere create "da zero" dallo sviluppatore per risolvere problemi specifici (es: `Linked List`, `Tree`, `Graph`, `Stack`, `Queue`).

---

### 2. Collezioni: "Indexed" vs "Keyed"
In JavaScript, le collezioni di dati si dividono principalmente in due tipologie basate su come si accede ai dati:

- **Indexed Collections:** Collezioni ordinate in cui i dati sono indicizzati da un numero (indice).
- **Keyed Collections:** Collezioni associative in cui i dati sono organizzati tramite chiavi (non necessariamente numeriche) e sono iterabili nell'ordine di inserimento.

---

### 3. Indexed Collections: Gli Array
Gli **Array** sono la principale collezione indicizzata in JavaScript. Sono oggetti utilizzati per memorizzare liste ordinate di valori.

- **Indice Numerico:** Ogni elemento ha una posizione che parte da `0`.
- **Flessibilità:** Possono contenere tipi di dati misti (numeri, stringhe, oggetti, altri array).
- **Assegnazione:** Possono essere assegnati a variabili e passati come argomenti.

---

### 4. Operazioni e Metodi degli Array
Essendo oggetti, gli array hanno proprietà (come `.length`) e metodi integrati per manipolare i dati:

```javascript
let frutti = ["Mela", "Banana", "Arancia"];

// Aggiungere/Rimuovere elementi
frutti.push("Pera");    // Aggiunge alla fine
frutti.pop();           // Rimuove l'ultimo

// Metodi di iterazione e trasformazione
frutti.forEach(f => console.log(f));
let maiuscolo = frutti.map(f => f.toUpperCase());
```

---

### 5. Keyed Collections
Le **Keyed Collections** sono collezioni ordinate per una chiave invece che per un indice numerico. Sono collezioni associative di natura; oggetti come `Map` e `WekMap`, `Set` e `WeakSet` appartengono a questa categoria e sono iterabili nell'ordine di inserimento dei loro elementi.

---

### 6. Structured Data
I **Structured Data** (Dati Strutturati) sono formati standardizzati per fornire informazioni su una pagina e classificarne il contenuto.

- **Utilizzo SEO:** Vengono utilizzati dai motori di ricerca (come Google) per comprendere meglio il contesto semantico delle pagine web, estrarre informazioni strutturate dal web e popolare il Knowledge Graph globale.
- **Formati Comuni:** Uno dei formati più diffusi per rappresentare i dati strutturati è il **JSON** (JavaScript Object Notation), che permette di organizzare le informazioni in coppie chiave-valore leggibili sia dalle macchine che dagli esseri umani.