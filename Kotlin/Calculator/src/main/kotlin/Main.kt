package org.example

import java.util.Locale.getDefault

fun main() {

    fun sum() {
        println("Type two numbers")
        val x: Double = readln().toDoubleOrNull() ?: 0.0
        val y: Double = readln().toDoubleOrNull() ?: 0.0

        println(x + y)
    }

    fun sub() {
        println("Type two numbers")
        val x: Double = readln().toDoubleOrNull() ?: 0.0
        val y: Double = readln().toDoubleOrNull() ?: 0.0

        println(x - y)
    }

    fun mul() {
        println("Type two numbers")
        val x: Double = readln().toDouble()
        val y: Double = readln().toDouble()
        println(x * y)
    }

    fun div() {
        println("Type two numbers")
        val x: Double? = readln().toDoubleOrNull()
        val y: Double? = readln().toDoubleOrNull()

        if (x == null || y == null) {
            println("Error: Invalid input. Please enter numbers.")
        } else if (y == 0.0) {
            println("Error: Division by zero is not allowed")
        } else {
            println(x / y)
        }
    }

    println("CALCULATOR")
    println("Operation?")
    println("Choose between: 'Sum', 'Sub', 'Mul' or 'Div'")
    val op: String = readln()

    when (op.lowercase().replaceFirstChar { if (it.isLowerCase()) it.titlecase(getDefault()) else it.toString() }) {
        "Sum" -> sum()
        "Sub" -> sub()
        "Mul" -> mul()
        "Div" -> div()
        else -> println("Invalid operation")
    }
}