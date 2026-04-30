# 🚀 Kotlin Roadmap

Una guida rapida ai concetti fondamentali di Kotlin, dai tipi base alle collezioni.

---

## 1. 🏁 Hello, World!

Il punto di partenza di ogni programma Kotlin.

```kotlin
fun main() {
    println("Hello, world!")
    // Output: Hello, world!
}
```

- `fun`: Parola chiave per dichiarare una funzione.
- `main()`: Il punto di ingresso del programma.
- `{}`: Racchiudono il corpo della funzione.
- `println()` / `print()`: Funzioni standard per stampare l'output (con o senza nuova riga).

---

## 2. 📦 Variabili

Kotlin distingue tra variabili immutabili e mutabili.

- `val`: Variabile a **sola lettura** (assegnazione singola).
- `var`: Variabile **mutabile** (può essere riassegnata).

```kotlin
val popcorn = 5     // Immutabile
val hotdog = 7
var customers = 10  // Mutabile

// Modifica di una variabile var
customers = 8
println(customers) // 8
```

> [!TIP]
> La buona pratica in Kotlin è usare `val` di default e ricorrere a `var` solo quando strettamente necessario.

---

## 3. 🧵 String Templates

Inserire variabili direttamente all'interno delle stringhe in modo semplice.

```kotlin
val customers = 10
println("Ci sono $customers clienti")               // Output: Ci sono 10 clienti
println("Domani saranno ${customers + 1} clienti")  // Output: Domani saranno 11 clienti
```

---

## 4. 🔢 Tipi di Base

Kotlin è a tipizzazione statica, ma può inferire i tipi automaticamente.

| Categoria          | Tipo                               | Esempio                         |
| :----------------- | :--------------------------------- | :------------------------------ |
| **Integers**       | `Byte`, `Short`, `Int`, `Long`     | `val year: Int = 2026`          |
| **Unsigned**       | `UByte`, `UShort`, `UInt`, `ULong` | `val score: UInt = 100u`        |
| **Floating-point** | `Float`, `Double`                  | `val temp: Float = 24.5f`       |
| **Booleans**       | `Boolean`                          | `val isEnabled: Boolean = true` |
| **Characters**     | `Char`                             | `val separator: Char = ','`     |
| **Strings**        | `String`                           | `val message: String = "Ciao!"` |

### Dichiarazione Esplicita

È possibile dichiarare una variabile senza inizializzarla subito usando `:`.

```kotlin
val d: Int
d = 3

val e: String = "hello"
```

---

## 📚 Collezioni

Le collezioni in Kotlin si dividono in **Read-only** e **Mutable**.

| Tipo     | Descrizione                                      |
| :------- | :----------------------------------------------- |
| **List** | Collezione ordinata di oggetti.                  |
| **Set**  | Collezione non ordinata di oggetti unici.        |
| **Map**  | Coppie chiave-valore dove le chiavi sono uniche. |

### 📋 Liste (List)

```kotlin
// Sola lettura
val readOnlyShapes = listOf("triangle", "square", "circle")

// Mutabile
val shapes: MutableList<String> = mutableListOf("triangle", "square", "circle")

// Operazioni comuni
println("Primo elemento: ${readOnlyShapes.first()}")
println("Ultimo elemento: ${readOnlyShapes.last()}")
println("Conteggio: ${readOnlyShapes.count()}")
println("Esiste 'circle'? ${"circle" in readOnlyShapes}")

// Modifica (solo MutableList)
shapes.add("pentagon")
shapes.remove("triangle")
```

#### 🔒 Casting (Upcasting)

È possibile proteggere una lista mutabile assegnandola a una variabile di tipo `List` (sola lettura). Questo impedisce modifiche accidentali.

```kotlin
val shapes: MutableList<String> = mutableListOf("triangle", "square", "circle")
val shapesLocked: List<String> = shapes // Casting a List (sola lettura)

// shapesLocked.add("square") // Errore di compilazione!
```

### 🎯 Set

```kotlin
val readOnlySet = setOf("apple", "banana", "cherry", "apple")
println(readOnlySet) // Output: [apple, banana, cherry] (i duplicati vengono rimossi)

val fruitSet = mutableSetOf("apple", "banana")
fruitSet.add("orange")
```

### 🗺️ Mappe (Map)

```kotlin
val juiceMenu = mapOf("apple" to 100, "kiwi" to 190, "orange" to 100)
println("Il prezzo del succo alla mela è: ${juiceMenu["apple"]}")

val mutableMenu = mutableMapOf("apple" to 100)
mutableMenu["banana"] = 150
mutableMenu.remove("apple")
```

---

## 🔀 Control Flow

In Kotlin, le strutture di controllo come `if` e `when` possono essere utilizzate come **espressioni** che restituiscono un valore.

### 🚦 If

`if` può essere usato in modo tradizionale o come espressione (sostituendo l'operatore ternario `? :` di altri linguaggi).

```kotlin
val a = 10
val b = 20

// Come espressione
val max = if (a > b) a else b
println("Il massimo è $max")
```

### 🛣️ When

`when` definisce un flusso condizionale con più rami. È più potente e leggibile di una serie di `if-else` ed è il sostituto dello `switch`.

```kotlin
val x = "Hello"

val result = when (x) {
    "1" -> "Uno"
    "Hello" -> "Un saluto caloroso"
    is String -> "È una stringa"
    else -> "Altro"
}
println(result)
```

> [!TIP]
> Preferisci `when` rispetto a `if` quando hai più di due diramazioni: rende il codice più pulito e meno propenso a errori.

---

## 🔄 Cicli e Range

### 📏 Range
I range permettono di definire intervalli di valori in modo conciso.

- `1..4`: 1, 2, 3, 4 (incluso).
- `1..<4`: 1, 2, 3 (escluso l'estremo superiore).
- `4 downTo 1`: 4, 3, 2, 1.
- `1..5 step 2`: 1, 3, 5.

### ➰ For
Utilizzato per iterare su collezioni o range.

```kotlin
for (i in 1..3) {
    println(i)
}

val cakes = listOf("carrot", "cheese", "chocolate")
for (cake in cakes) {
    println("Mmm... $cake cake!")
}
```

### 🔁 While
I cicli `while` e `do-while` funzionano in modo standard.

```kotlin
var cakesEaten = 0
while (cakesEaten < 3) {
    println("Mangio una torta...")
    cakesEaten++
}
```

---

## 🛠️ Funzioni

Dichiarazione di funzioni con la parola chiave `fun`.

```kotlin
fun sum(x: Int, y: Int): Int {
    return x + y
}

fun main() {
    println(sum(1, 2)) // 3
}
```

- **Parametri**: Definiti tra `()`, tipo obbligatorio.
- **Ritorno**: Specificato dopo `:`, se omesso è implicitamente `Unit`.

### 🏷️ Named Arguments e Default Values

Puoi assegnare valori di default e usare i nomi dei parametri per chiarezza o per cambiare ordine.

```kotlin
fun printMessage(message: String, prefix: String = "Info") {
    println("[$prefix] $message")
}

fun main() {
    printMessage("Hello")                               // [Info] Hello (Default)
    printMessage(prefix = "Log", message = "Ready")     // [Log] Ready (Named)
}
```

### ⚡ Single-Expression Functions

Per funzioni brevi, usa `=` per omettere graffe e tipo di ritorno (inferenza).

```kotlin
fun multiply(x: Int, y: Int) = x * y
```

### 🚪 Early Returns

Usa `return` per uscire anticipatamente dalla funzione.

```kotlin
fun checkAge(age: Int): String {
    if (age < 18) return "Troppo giovane"
    return "Accesso garantito"
}
```

---

## 𝜆 Lambda Expressions

Le Lambda sono funzioni anonime che possono essere trattate come valori: passate come argomenti, restituite o memorizzate.

```kotlin
val upperCaseString = { text: String -> text.uppercase() }

fun main() {
    println(upperCaseString("hello")) // HELLO
}
```

- **Sintassi**: `{ parametri -> corpo }`.
- **it**: Se la lambda ha un solo parametro, puoi ometterlo e usare la parola chiave implicita `it`.

### 🧬 Function Types

Le funzioni hanno tipi specifici definiti come `(Input) -> Output`.

```kotlin
val sum: (Int, Int) -> Int = { x, y -> x + y }
val isPositive: (Int) -> Boolean = { it > 0 }
```

### 🏹 Trailing Lambdas

Se l'ultimo parametro di una funzione è una lambda, puoi scriverla **fuori** dalle parentesi tonde. Se è l'unico parametro, le tonde possono essere rimosse.

```kotlin
val numbers = listOf(1, -2, 3)

// Senza trailing lambda
val positives = numbers.filter({ it > 0 })

// Con trailing lambda (consigliato)
val positivesClean = numbers.filter { it > 0 }
```

### 🚚 Passare e Restituire Lambda

Le lambda sono fondamentali per le funzioni di ordine superiore (Higher-Order Functions).

```kotlin
// Restituire una lambda
fun logic(type: String): (Int) -> Int = when (type) {
    "double" -> { it * 2 }
    else -> { it }
}

fun main() {
    val myFunc = logic("double")
    println(myFunc(5)) // 10
}
```

---

## 🏛️ Classi

Le classi definiscono le caratteristiche (proprietà) e il comportamento (funzioni membro) di un oggetto.

```kotlin
class Contact(val id: Int, var email: String) {
    fun printEmail() {
        println(email)
    }
}

fun main() {
    val contact = Contact(1, "mary@gmail.com")
    contact.printEmail()            // mary@gmail.com
    contact.email = "jane@gmail.com" // Update
}
```

- **Constructor**: Definito nell'intestazione della classe.
- **Properties**: `val` per sola lettura, `var` per mutabili. Possono avere valori di default.

### 📦 Data Classes

Specializzate per memorizzare dati. Includono automaticamente funzioni utili come `toString()`, `equals()`, e `copy()`.

```kotlin
data class User(val name: String, val id: Int)

fun main() {
    val user = User("Alex", 1)
    
    // toString() automatico
    println(user) // User(name=Alex, id=1)

    // equals() con ==
    val secondUser = User("Alex", 1)
    println(user == secondUser) // true

    // copy() per creare cloni modificati
    val newUser = user.copy(name = "Max")
    println(newUser) // User(name=Max, id=1)
}
```

---

## 🛡️ Null Safety

Kotlin previene i `NullPointerException` distinguendo tra tipi che possono contenere `null` e tipi che non possono.

```kotlin
fun main() {
    var neverNull: String = "Hello"
    // neverNull = null // Errore di compilazione

    var nullable: String? = "Potrei essere null"
    nullable = null // OK
}
```

### ❓ Safe Calls (`?.`)

Accedi a proprietà o funzioni in modo sicuro. Se l'oggetto è `null`, restituisce `null` invece di crashare.

```kotlin
val length: Int? = nullable?.length // Restituisce null se nullable è null
```

### 🕺 Elvis Operator (`?:`)

Fornisce un valore di default se l'espressione a sinistra è `null`.

```kotlin
val lengthOrZero: Int = nullable?.length ?: 0
```
