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
