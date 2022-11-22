window.answers = () => {
    // Each of the following sections is a separate problem. Read the comments and do what they say.
    // Don't delete or change the instructional comments

    // #1 This code checks a variable 'hour' to determine an appropriate greeting
    // Add to it so that it will greet with "Good evening" if it is 7pm (19:00) or later
    let greeting
    if (hour < 12) {
        greeting = "Good morning"
    } 
    else if (hour>=19) {
        greeting = "Good evening"
    }
    else {
        greeting = "Good afternoon"
    }


    // #2 This code sets output to true if input is not zero
    // Change the condition so that output will equal true only if input is an even number greater than 20 or an odd number less than 10
    let output = false
    if ((input % 2 == 0 && input > 20) || input % 2 == 1 && input < 10) {
        output = true
    }


    // #3 Use a ternary operator (x = cond ? a : b) so that if there is exactly 1 rabbit, this line instead results in "There is 1 rabbit"
    //const rabbitString = "There are " +  numRabbits + " rabbits"
    const rabbitString = numRabbits == 1 ? "There is 1 rabbit" : "There are " + numRabbits + " rabbits"


    // #4 Write a for-loop that uses console.log to print out the numbers from 1 to 10 (inclusive) in ascending order
for (let i = 1; i<11; i++) {
    console.log(i)
}

    // #5 Write a for-loop that uses console.log to print out the numbers from 1 to 10 (inclusive) in descending order
for (let i = 10; i>0; i--) {
    console.log(i)
}

    // #6 Write a for-loop that will add up all the positive integers below 100 and store it in the sum variable
    let sum = 0
    for (let i=0; i<100; i++){
        sum += i
    }
    
    // For loop goes here:


    // #7 This for loop prints a 3x3 square of #s. Use a nested for-loop to make it print a square of numbers instead 89(123, 456, 7)
    let line = ""
    for (let i=0; i<3; i++) {
        for (let j=1; j<=3; j++){
            line += j
        }
        console.log(line)
    }
    


    // #8 Write a for-loop that finds the largest common factor of these two numbers and stores it in lcf
    // (The largest common factor is the biggest number that both numbers are divisible by)
    let number1 = 1848
    let number2 = 1820
    let lcf = 0
    // Loop goes here:
    for (let i = number2; i<= number2; i--) {
        if (number1 % i == 0 && number2 % i == 0){     
            lcf = i
            break
            
        }
    }


    



    // #9 Each new term in the Fibonacci sequence is generated by adding the previous two terms.
    // By starting with 1 and 1, the first 10 terms will be: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
    // Find the largest Fibonacci below 5000 and store it in bigFib

    // Solution goes here:
    let bigFib = 0
    let x = 0
    let y = 1
    for (let i = 0; i<bigFib; i++) {
        bigFib = x + y
        x = y
        y = bigFib
        
}


    // #10 (Bonus hard challenge)
    // A Pythagorean  triplet is a set of three integers, a < b < c, for which a**2 + b**2 = c**2
    // For example, 3**2 + 4**2 = 9 + 16 = 25 = 5**2.
    // There exists exactly one Pythagorean  triplet for which a + b + c = 1000.
    // Find a, b, and c
    let a
    let b
    let c
    // Solution goes here:


    // #11 Complete this function so that it returns the product of the three numbers (the three numbers multiplied together)
    function product (num1, num2, num3) {

    }

    // #12 Write a function called 'exclaim' that takes a single string and logs it with an exclamation mark after it
    // For example, exclaim("hello") should log "hello!" to the console


    // #13 We would like "A", "B", "C", "D", "E" to be printed in the correct order.
    // Make that happen by invoking the right functions in the correct order.
    // Do not modify the functions themselves!
    function theFirst () {
        theSecond()
        console.log("B")
    }

    function theSecond () {
        console.log("A")
    }

    function theThird () {
        console.log("C")
        theFourth()
    }

    function theFourth () {
        theFifth()
    }

    function theFifth () {
        console.log("D")
        console.log("E")
    }
    // Invoke your chosen function(s) after this line:


    // #14 Write a function called largestCommonFactor that takes two number
    // and returns the largest common factor of those numbers
    function largestCommonFactor () {

    }


};