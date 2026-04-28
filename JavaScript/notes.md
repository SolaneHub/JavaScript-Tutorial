# JavaScript Notes 📝

Guida alle funzionalità del linguaggio, ordinate dalla curva di apprendimento più semplice alla più complessa.

---

## 1. Variabili e Tipi di Base
Le fondamenta per memorizzare e manipolare dati.

- **`const` e `let`**: `const` dichiara costanti (valori che non cambiano), mentre `let` permette di dichiarare variabili che possono essere riassegnate.
- **Template Literals**: Stringhe racchiuse tra backtick (`` ` ``) che permettono di inserire variabili direttamente con la sintassi `${variabile}`.
- **Metodi Stringa**: Ad esempio `trim()`, utilizzato per rimuovere gli spazi vuoti all'inizio e alla fine di una stringa.

---

## 2. Logica e Controllo
Strumenti per decidere quali parti di codice eseguire.

- **`if` / `else`**: Esegue un blocco di codice solo se una condizione è vera.
- **Ciclo `while`**: Ripete un blocco di codice finché la condizione specificata rimane vera (usato in `script.js` per trovare una posizione senza sovrapposizioni).
- **Oggetto `Math`**: Fornisce funzioni matematiche, come `Math.abs()` per ottenere il valore assoluto.

---

## 3. Funzioni
Blocchi di codice riutilizzabili.

- **Funzioni Classiche**: Dichiarate con la parola chiave `function`.
- **Arrow Functions (`=>`)**: Una sintassi più breve per scrivere funzioni, molto usata come "callback" all'interno dei listener di eventi o dei metodi degli array.

---

## 4. Strutture Dati (Oggetti e Array)
Come organizzare collezioni di dati.

- **Oggetti `{}`**: Collezioni di coppie chiave-valore (es. i dati di una singola task).
- **Array `[]`**: Liste ordinate di elementi.
- **Metodi degli Array**:
  - `push()`: Aggiunge un elemento alla fine della lista.
  - `forEach()`: Esegue un'azione per ogni elemento dell'array.
  - `filter()`: Crea un nuovo array contenente solo gli elementi che superano un test (es. per eliminare una task).

---

## 5. Document Object Model (DOM)
L'interfaccia tra JavaScript e il contenuto HTML della pagina.

- **Selezione**: `document.getElementById()` recupera un elemento tramite il suo ID.
- **Contenuto**: 
  - `innerText`: Gestisce solo il testo semplice.
  - `innerHTML`: Permette di inserire o leggere codice HTML (es. icone o tag).
- **Eventi**: `addEventListener()` mette il codice in "ascolto" di interazioni come il `click`.
- **Manipolazione Struttura**:
  - `createElement()`: Crea nuovi elementi HTML.
  - `append()`: Aggiunge un elemento dentro un altro.
  - `remove()`: Elimina un elemento dalla pagina.
- **Stile e Classi**:
  - `classList.add()`: Aggiunge classi CSS a un elemento.
  - `style`: Permette di modificare direttamente proprietà CSS (es. `position`, `left`, `top`).

---

## 6. Persistenza dei Dati e JSON
Come salvare le informazioni nel browser.

- **`JSON.parse()` e `JSON.stringify()`**: Trasformano oggetti complessi in stringhe e viceversa, necessario per il salvataggio dei dati.
- **`localStorage`**: Un database locale nel browser che permette di mantenere i dati (come la lista delle task) anche dopo aver ricaricato la pagina.

---

## 7. API Web Avanzate
Funzionalità specifiche fornite dal browser.

- **Web Crypto API**: L'uso di `window.crypto.getRandomValues()` permette di generare numeri casuali molto più sicuri rispetto al classico `Math.random()`, ideale per identificativi o calcoli critici.
