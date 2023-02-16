function driver(){


    return new Promise((resolve,reject)=>{
        
        //0    resolve("driver found")
        setTimeout(()=>{
        resolve("driver not found")
        },5000)
        
    })

}

async function getDrive(){

    var x  = await driver()
    console.log(x)
}
getDrive()
