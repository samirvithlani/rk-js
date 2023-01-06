function demo(x){

        console.log("this is demo function",x)

}
function demo1(){

    console.log("this is demo1 function")

}
function demo3(x = 10){
    
        console.log("this is demo3 function",x)
    
}
//you can pass anything
function test(cb,cb1){

        cb(150)
        cb1()

        
}
test(demo,demo1)
demo3(15)