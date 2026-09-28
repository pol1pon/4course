


let studentName: string = "Анна"
let studentAge: number = 20
let isEnrolled: boolean = true
let middleName: null = null
let hobby: undefined = undefined

let city = "Москва"      
let population = 12_000_000 
let isCapital = true 


let title: string = "Книга"
title = "123" // Type 'number' is not assignable to type 'string'. (fixed)

let pages: number = 300
pages = 100 // Type 'string' is not assignable to type 'number'. (fixed)

let isRead: boolean = false
isRead = true // Type 'number' is not assignable to type 'boolean'. (fixed)


function formatPrice(value: number): string {
    return value.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ₽"
}

function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max)
}

function logMessage(message: string): void {
    console.log(message)
}

function repeat(text: string, times: number = 2): string {
    return text.repeat(times)
}

function describeUser(name: string, age?: number): string {
    if (age !== undefined) {
        return `${name}, возраст: ${age}`
    }
    return name
}


console.log(formatPrice(1234.5))
console.log(clamp(15, 0, 10))
logMessage("Привет")
console.log(repeat("abc"))
console.log(describeUser("Иван"))
console.log(describeUser("Иван", 25))



// formatPrice("100") // Argument of type 'string' is not assignable to parameter of type 'number'.
// clamp(5, 0) // Expected 3 arguments, but got 2.
// logMessage(123) // Argument of type 'number' is not assignable to parameter of type 'string'.


// createBook, markAsRead, getBookInfo, countReadBooks