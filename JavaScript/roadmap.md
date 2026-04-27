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

## 21 Aprile - Equality Comparisons

I Comparison Operators sono usati nei "Logical Statements" per determinare l'uguaglianza o la differenza tra variabili o valori. Possono essere utilizzati anche nei "Conditional Statements" per decidere quali azioni eseguire in base al risultato del confronto.

In JavaScript, abbiamo tre strumenti principali per confrontare l'uguaglianza: `==`, `===` e `Object.is`.

### 1. `==` (Abstract Equality)
Questo operatore confronta due valori per l'uguaglianza, ma **converte i tipi** (Type Coercion) se sono diversi prima di effettuare il confronto.

**Esempio:**
```javascript
console.log(5 == "5");      // true (la stringa "5" viene convertita in numero)
console.log(1 == true);     // true
console.log("" == false);   // true
```

### 2. `===` (Strict Equality)
Questo operatore confronta sia il **valore** che il **tipo**. Non effettua alcuna conversione automatica. È lo standard consigliato nella maggior parte dei casi per evitare bug imprevisti.

**Esempio:**
```javascript
console.log(5 === "5");     // false (tipi diversi: number vs string)
console.log(1 === true);    // false
console.log(0 === false);   // false
```

### 3. `Object.is` (Same-Value Equality)
Determina se due valori sono "lo stesso valore". Si comporta quasi come `===`, ma gestisce in modo specifico alcuni casi limite come `NaN` e lo zero con segno (`+0` vs `-0`).

**Esempio:**
```javascript
console.log(Object.is(NaN, NaN));   // true  (mentre NaN === NaN è false)
console.log(Object.is(+0, -0));     // false (mentre +0 === -0 è true)
```

---

#### Punti di attenzione:
- **Coercion:** `Object.is` non applica mai la conversione dei tipi, a differenza di `==`.
- **Casi limite:** L'unica differenza reale tra `===` e `Object.is` risiede nel trattamento di `NaN` (che `Object.is` considera uguale a se stesso) e degli zeri con segno.

## Loops and Iterations

I cicli (loop) permettono di eseguire un blocco di codice ripetutamente finché una determinata condizione è soddisfatta. In JavaScript possiamo distinguere principalmente tra cicli basati su una condizione e cicli di iterazione.

### 1. `while` e `do...while` (Cicli Condizionali)
Questi cicli continuano a girare finché una condizione logica rimane vera.

- **`while`**: Controlla la condizione **prima** di ogni esecuzione. Se è falsa dall'inizio, il codice non viene mai eseguito.
- **`do...while`**: Esegue il codice **almeno una volta**, poi controlla la condizione.

**Esempio:**
```javascript
let counter = 0;
while (counter < 3) {
    console.log("While loop: " + counter);
    counter++;
}

let j = 0;
do {
    console.log("Eseguito almeno una volta");
    j++;
} while (j < 0);
```

---

### 2. Il Ciclo `for` (Standard)
È il ciclo più comune quando si conosce il numero di iterazioni. Si compone di inizializzazione, condizione e incremento.

**Esempio:**
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Giro numero: " + i);
}
```

---

### 3. Iterare sulle Collezioni: `for...in` vs `for...of`
Versioni moderne per scorrere dati in modo più leggibile.

#### `for...in` (Indici e Chiavi)
Restituisce le **chiavi** di un oggetto o gli **indici** di un array.
```javascript
const auto = { marca: "Fiat", modello: "500", anno: 2020 };
for (let chiave in auto) {
    console.log(chiave + ": " + auto[chiave]);
}
```

#### `for...of` (Valori)
Estrae direttamente i **valori** di un array o di un oggetto iterabile, senza dover usare l'indice.
```javascript
const colori = ["Rosso", "Verde", "Blu"];
for (let colore of colori) {
    console.log(colore);
}
```

---

### 4. Controllo del Flusso: `break` e `continue`
- **`break`**: Esce immediatamente dal ciclo.
- **`continue`**: Salta l'iterazione attuale e passa alla prossima.

**Esempio:**
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 3) continue; // Salta il 3
    if (i === 7) break;    // Si ferma al 7
    console.log(i);
}
```

## Control Flow

In JavaScript, il `Control Flow` (flusso di controllo) rappresenta l'ordine in cui le istruzioni vengono eseguite dal computer. Di base, il codice viene eseguito riga per riga (sequenzialmente), ma questo flusso può essere alterato da condizioni, cicli e gestione delle eccezioni.

Il codice può essere controllato tramite strutture specifiche: `Sequential`, `Conditional Statements`, `Exception Handling` e `Loops and Iterations`.

### 1. Conditional Statements: `if`, `if ... else` e `switch`

Le istruzioni condizionali permettono di eseguire blocchi di codice diversi in base al verificarsi di determinate condizioni.

#### `if` e `else`
L'istruzione `if` esegue un blocco se la condizione è `truthy`. Se la condizione è `falsy`, può essere eseguito un blocco alternativo tramite `else`.
```javascript
let temperatura = 25;

if (temperatura > 30) {
    console.log("Fa caldo!");
} else if (temperatura > 20) {
    console.log("Si sta bene."); // Eseguito se la prima è false e questa è true
} else {
    console.log("Fa freddo.");
}
```

#### `switch`
Lo `switch` valuta un'espressione confrontandola con diverse clausole `case`. È ideale quando si hanno molteplici opzioni basate su un singolo valore.
```javascript
let giorno = "Lunedì";

switch (giorno) {
    case "Lunedì":
        console.log("Inizio settimana");
        break; // Fondamentale per non eseguire i case successivi
    case "Venerdì":
        console.log("Quasi weekend!");
        break;
    default:
        console.log("Un giorno normale"); // Eseguito se nessun case coincide
}
```

---

### 2. Exceptional Handling (Gestione delle Eccezioni)

In JavaScript, le eccezioni sono oggetti. La maggior parte di esse sono istanze della classe globale `Error`. La gestione delle eccezioni permette al programma di non interrompersi bruscamente quando si verifica un errore imprevisto. È possibile lanciare eccezioni usando sia oggetti errore predefiniti che oggetti personalizzati.

---

### 3. Throw Statement

L'istruzione `throw` viene utilizzata per "lanciare" un'eccezione definita dall'utente. L'esecuzione della funzione corrente viene interrotta, il codice successivo non viene eseguito e il controllo passa al primo blocco `catch` disponibile nella gerarchia delle chiamate. Se non esiste alcun `catch`, il programma viene terminato.

**Esempio:**
```javascript
function controllaEta(eta) {
    if (eta < 18) {
        throw new Error("Devi essere maggiorenne!"); // Lancio di un Error object
    }
    return "Accesso consentito";
}
```

---

### 4. Try, Catch, Finally

Esistono blocchi specifici per gestire gli errori in modo sicuro:

- **`try`**: Contiene il codice che potrebbe generare un errore.
- **`catch`**: Gestisce l'errore se si verifica nel blocco try.
- **`finally`**: Esegue il codice dopo i primi due blocchi, indipendentemente dal risultato (errore o successo).

**Esempio:**
```javascript
try {
    let risultato = controllaEta(15);
    console.log(risultato);
} catch (errore) {
    console.error("Si è verificato un errore: " + errore.message);
} finally {
    console.log("Operazione terminata."); // Utile per pulire variabili o chiudere connessioni
}
```

---

### 5. Error Objects

Durante un errore a runtime, viene creato e lanciato un oggetto `Error`. Grazie a questo oggetto, siamo in grado di determinare il tipo di errore e gestirlo in base alla sua natura.

I tipi di errore più comuni sono:
- **`AggregateError`**: Collezione di errori lanciati contemporaneamente.
- **`EvalError`**: Errore durante la valutazione di un'espressione tramite `eval()`.
- **`InternalError`**: Errore interno del motore JavaScript (es: bug dell'engine).
- **`RangeError`**: Un valore è al di fuori del campo di operazioni consentite.
- **`ReferenceError`**: Una variabile o un oggetto viene chiamato prima della sua dichiarazione o non esiste.
- **`SyntaxError`**: Il codice contiene errori di sintassi.

## Expressions and Operators

Un'espressione è un pezzo valido di codice che fa riferimento ad un valore.
Ci sono 2 tipi di espressioni, quelli che hanno effetti collaterali e quelli sono puramente valutativi.

Esistono 8 Operatori:

- **Conditional Operators (Ternary):** conosciuto anche come operatore ternario, è l'unico operatore che usa 3 operandi: `condition ? val_for_true : val_for_false`.
  ```javascript
  let eta = 20;
  let status = (eta >= 18) ? "adulto" : "minore"; // "adulto"
  ```

- **Comma Operators:** valuta ognuno dei suoi operandi da sinistra verso destra e ritorna il valore dell'ultimo operando. Usato comunemente nei cicli for.
  ```javascript
  let x = (1, 2, 3); // x riceve il valore 3
  for (let i = 0, j = 10; i <= 10; i++, j--) { /* ... */ }
  ```

- **Unary Operators:** sono operatori speciali che considerano un singolo operando. Includono unary plus (`+`), unary minus (`-`), prefix/postfix increments (`++`) e prefix/postfix decrements (`--`).
  ```javascript
  let x = 5;
  console.log(+x);     // 5 (unary plus)
  console.log(-x);     // -5 (unary minus)

  // Incremento e Decremento
  let a = 1;
  console.log(++a);    // 2 (prefix: incrementa e poi ritorna il valore)
  console.log(a++);    // 2 (postfix: ritorna il valore e poi incrementa. Ora a è 3)

  let b = 10;
  console.log(--b);    // 9 (prefix decrement)
  console.log(b--);    // 9 (postfix decrement. Ora b è 8)
  ```

- **Assignment Operators:** assegna un valore all'operando di sinistra basato sul valore di destra.
  ```javascript
  let x = 10;
  x += 5; // x = x + 5 (15)
  x *= 2; // x = x * 2 (30)
  ```

- **Comparison Operators:** operatori che confrontano valori e ritornano `true` o `false`.
  ```javascript
  console.log(10 > 5);      // true
  console.log(10 === "10"); // false (uguaglianza stretta)
  console.log(5 !== 2);     // true
  ```

- **Arithmetic Operators:** eseguono operazioni matematiche classiche.
  ```javascript
  console.log(10 % 3);  // 1 (resto della divisione)
  console.log(2 ** 3);  // 8 (elevamento a potenza)
  ```

- **Logical Operators:** operatori per la logica booleana e gestione valori nulli.
  ```javascript
  console.log(true && false); // false (AND)
  console.log(true || false); // true (OR)
  let nome = null;
  console.log(nome ?? "Ospite"); // "Ospite" (Nullish Coalescing)
  ```

- **String Operators:** oltre ai confronti, l'operatore `+` concatena le stringhe.
  ```javascript
  let saluto = "Ciao " + "Mondo"; // "Ciao Mondo"
  let msg = "Benvenuto";
  msg += "!"; // "Benvenuto!"
  ```

  ## 24 Aprile - Functions
  ### Le funzioni servono per farci riusare codice. Si eseguono ogni volta che vengono richiamate.

  