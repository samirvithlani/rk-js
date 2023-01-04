//2 type of function pre udf
///4 type of function

var data = 250;
let data1 = 450;

function add(){
    console.log("add function")
}
function mul(a){

    return a * a
}
function sub(){
    data = 150;
    data1 = 250;
    let x = 10, y = 20

    return x - y
}

console.log("data = ",data)
console.log("data1 = ",data1)

add()
var ans = mul(50)
console.log("ans = ",ans)
console.log(mul(5))
console.log(sub())
console.log("data = ",data)
console.log("data1 = ",data1)



var addData = () =>{
    console.log("addData function")
}
addData()

var display= (a,b)=>{
    return a + b
}

console.log(display(10,20))
//console.log(p)










