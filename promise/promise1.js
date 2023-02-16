//api data slow -->  var data = api -->
// data.length ->undefine....
//asynco
///3 stage of promise
//1. pending
//2. resolve --> data
//3. reject  --> error
//then ,catch
//resolve / fullfill  --> then
//reject --> catch

function test(){

    //create an object of promise
    var promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            //reject("error....")
            resolve({
                name:"Ravi",
                age:23
            })
        },3000)
    })
    console.log(promise)
    promise.then((data)=>{
        console.log("Promise resolved",data)
    })
    promise.catch((err)=>{
        console.log("Promise rejected",err)
    })
    
    
}
//test()

var x

function driver(){


        return new Promise((resolve,reject)=>{
            
            //0    resolve("driver found")
            reject("driver not found")
            
        })

}

driver().then((data)=>{
    console.log("data.",data)
    x = data
}).catch((err)=>{
    console.log(err)
})
console.log(x)







