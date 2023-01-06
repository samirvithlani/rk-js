// var name = "jonathan";
// var email = "jonathan@gmail.com";
// var age = 20;
// var isMarried = false;
//java script object notation

var user = {
    name: "jonathan",
    email: "jonathan@gmail.com",
    age: 20,
    isMarried: false,
    address :{
        city: "pune",
        state: "maharashtra",
        country: "india",
        street:{
            name: "abc",
            number: 123,
            pincode: 123456
        }

    }
}
//console.log(user.address.street.pincode);

//employees = ["jay","raj","amit","parth",true,15]
console.log(employees)




var employees = [
    {
        name: "jay",
        email: "jay@gmail.com",
        "age": 32,
        isMarried: true,
        hobbies:["cricket","football","chess"],
        child:[
            {
                name: "jay1",
                age:5
            },
            {
                name: "jay2",
                age:3
            }
        ]
    },
    {
        name: "raj",
        email: "raj@gmail.com",
        "age": 25,
        isMarried: true,
        hobbies:["cricket","football","dance"],
        child:[
            {
                name: "jay1",
                age:3
            },
            {
                name: "jay1",
                age:3
            }
        ]
    },
    {
        name: "meet",
        email: "meet@gmail.com",
        "age": 28,
        isMarried: false,
        hobbies:["cricket","singing","chess"],
        child:[]
    },
]

//console.log(employees[1].hobbies[1])

// for(var i = 0;i<employees.length;i++)
// {
    

//     for(var j=0;j<employees[i].hobbies.length;j++)
//     {
//         if(employees[i].hobbies[j] == "cricket" && employees[i].isMarried ==true){
//             console.log(employees[i].name)    
//             console.log(employees[i].hobbies[j])
//         }
        
//     }
//     console.log("\n")
// }

for(var i = 0;i<employees.length;i++){

    if(employees[i].child.length == 1){
        console.log(employees[i].name)
    }

}