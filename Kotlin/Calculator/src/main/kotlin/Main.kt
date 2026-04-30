package org.example

import javax.management.Query.div

fun main() {

    fun sum(){
        println("Type two numbers")
        val x : Int = readln().toInt();
        val y : Int = readln().toInt();

        println(x + y);
    }

    fun sub(){
        println("Type two numbers")
        val x : Int = readln().toInt();
        val y : Int = readln().toInt();

        if (x == -x){

        }

        println(x - y);
    }

    fun mul(){
        println("Type two numbers")
        val x : Int = readln().toInt();
        val y : Int = readln().toInt();

        println(x * y);
    }

    fun div(){
        println("Type two numbers")
        val x : Int = readln().toInt();
        val y : Int = readln().toInt();

        println(x / y);
    }

    println("CALCULATOR")
    println("Operation?")
    println("Choose between: 'Sum', 'Substraction', 'Multiplication' or 'Division'")
    val op : String = readln()
    println(op)

    when(op){
        "Sum" -> sum()
        "Substraction" -> sub()
        "Multiplication" -> mul()
        "Division" -> div()
    }

}