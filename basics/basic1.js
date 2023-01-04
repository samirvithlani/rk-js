//print --> console.log

console.log("Hello World");
console.error("This is an error");
console.warn("This is a warning");
console.info("This is an info");


var a =10
var sname = "abc"
var isActive = true

console.log("a = ",a)
console.log("name = ",sname)
console.log("isActive = ",isActive)

console.log("a = ",typeof(a))
console.log("name = ",typeof(sname))
console.log("isActive = ",typeof(isActive))

const pi = 3.14
console.log("pi = ",pi)
//pi = 3.15

let b = 20
console.log("b = ",b)


var x = 11
var y = 11
console.log(x!==y)

//ternary operator

var ans =0
if(x >y)
{
    console.log("x is greater")
    ans = x
}
else{
    console.log("y is greater")
    ans = y
}
console.log("ans = ",ans)

//x>y ? console.log("x is greater") : console.log("y is greater")
ans = x> y ? x:y
console.log("ans = ",ans)


//null vs undefined
//Null: it is intentional absence of value, it is one of primitive value of js
//Undefined: it means that value does nor exist in compile / scope

//value
//console.log(null===undefined)
var x1;
if(x1===undefined)
{
    console.log("x is undefined")
}
else{
    console.log("x is defined")
}



