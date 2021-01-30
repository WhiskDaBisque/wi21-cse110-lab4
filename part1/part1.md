# Variables and Scoping
## var
1. It will display the number (prices.length-1) because 'i' was declared var in the for loop
2. It will display (prices[prices.length-1] * (1-discount)) because var is declared as a global variable/limited to function scope.
3. It will display Math.round(discountedPrice *100)/100 because var is declared as a global variable/limited to function scope.
4. The function will return discounted = [50,100,150]. It is performing a discount of 50% given from the second paramter which will apply it to each of the prices in the list.

## let
5. There was no such variable 'i' declared declared within scope. We receive a Reference Error.
6. There was no such variable 'discountedPrice' declared within scope. Only visible to the for loop.
7. finalPrice will display whats on line-7 because we have declared/initialized this variable outside the loops and inside the function where it is being called. 
8. The function will return discounted = [50,100,150]. It is performing a discount of 50% given from the second paramter which will apply it to each of the prices in the list. Although we can't access the variables defined within the loops, we are able to access and modify the variables we declared/initialized outside of its scope when using 'let'.

## const
9. There was no such variable 'i' declared declared within scope. We receive a Reference Error.
10. We receive an error because we are trying to reassign discountedPrice which is a const.
11. We receive an error because we are trying to reassign finalPrice which is a const.
12. Assuming the previous lines were correct this current line will return the discounted prices [50,100,150]. This is because we are not reassigning the const 'discounted' but rather mutating it. This is allowed as it is a container that holds objects. 

# Data Types
13. 
    a.  student.name    
    b.  student["Grad Year"]   
    c.  student.greeting()  
    d.  student["Favorite Teacher"].name    
    e.  student.courseLoad[0]   

    ```We can assign these to a variable or call it on the screen through "alert()"```

# Basic Operator & Type Conversion

### Arithmetic
14.
    *  '3' + 2  -> '32' 

        ``` It is rendering '+' as a concatenation of the string literal '3' therefore converting 2 to '2' and performing said concatenation ```
    *   '3' - 2 ->  1

        ``` It is rendering '-' as a mathematical operation converting '3' to 3 and performing subtraction```
    *   3 + null -> 3

        ``` It is rendering '+' as a mathematical operation converting null to 0 and performing addition```

    *   '3' + null -> '3null'

        ``` It is rendering '+' as a concatenation and performing a String conversion of null and performing said concatenation```

    *   true + 3 -> 4

        ``` It is rendering '+' as a mathematical operation and performing a Numerical conversion of true and performing addition ```

    *   false + null -> 0
        
        ``` It is rendering '+' as a mathematical operation and performing a Numerical conversion of both false and null and performing addition ```

    *   "3" + undefined -> '3undefined'

        ``` It is rendering '+' as a concatenation and performing a String conversion on undefined to perform said concatenation```
   
    *   "3" - undefined -> NaN

        ``` It is rendering '-' as a mathematical operation and performs a Numerical conversion on both "3" and undefined, but because undefined is converted to NaN, that is the therefore the result.```

### Comparison

15. 
    * '2' > 1 -> true

        ``` Performs a Numerical conversion on '2' because RHS operand is a number ```
    * '2' < '12' -> false
    
         ``` Performs a dictionary comparison on the string literals and '2' > '1' hence returns false```
    * 2 == '2' -> true
    
        ``` Performs a Numerical conversion on '2' because LHS operand is a number and 2 == 2 is true```
    * 2 === '2' -> false
    
        ``` Performs a strict equality check and because they are different types it is automatically false```
    * true == 2 -> false
    
        ``` Performs a Numerical conversion on 'true' which is equal to 1 and 1 != 2 therefore returning false```
    * true === Boolean(2) -> true

        ``` Performs a Boolean conversion on 2 which returns true and then performs a strict equality check on true === true which is true ```
16.     The difference between == and === operators is that === will not perform any type conversions which makes it a strict equality check whereas == will perform a type conversion depending if the values being compared are different.

# Conditionals

17. 'How are you?'
    
    ``` The equality operator == detects two different types which it then needs to convert 'true' to a numerical value. The numerical conversion of true is 1 and then it checks if 2 == 1 which is false so it goes to the next if statement. The second if is using a Boolean conversion which will always result as true unless the parameter is the following[ "", null, NaN, undefined, 0] therefore asking my how i am :D.```

# Loops

18. part1-question18.js

# Functions

19. modifyArray([1,2,3],doSomething) -> [6,8,10]
    
    ```We have a function called doSomething which accepts the parameters num and callback. num is a number and callback is merely a placeholder for another function in this case "function(x)" in which whatever is inside the block of doSomething will be invoked as a parameter for function(x). modifyArray requires two parameters, an array to be modified and a callback function, in this case it is doSomething. When we use callback we are actually referring to doSomething in which it will get the number and add 2 to it. It will then send this result into the placeholder 'x' so it can perform a doubling in the defined function inside modifyArray. All in all I kinda just think of this as nested function calls which is useful when using an API``` 

20. part1-question20.js

21. The output is:
    1
    4
    3
    2

