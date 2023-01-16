var users =[
    {
        "id":1,
        "name": "John",
        "age": 30,
        "married": true,
        "child":2
    },
    {
        "id":2,
        "name": "ravi",
        "age": 15,
        "married": false,
        "child":0
    }
    ,{
        "id":3,
        "name": "neha",
        "age": 45,
        "married": true,
        "child":1
    }
]

filterdArray =[]
// for(let i=0;i<users.length;i++){
//     if(users[i].age>25){
//         filterdArray.push(users[i])
//     }
// }

// filterdArray = users.filter((u)=>{
//     //jhon --> true
//     //ravi --> false
//     //neha --> true
//     return u.age>25
// })


function filterByAgeWithChild(){

    filterdArray = users.filter((u)=>{
        return u.married && u.child>=2
    })


}

function deleteUser(id){

    filterdArray = users.filter((u)=>{
        return u.id != id
    })

    
}

//deleteUser(2)
filterByAgeWithChild()
console.log(filterdArray)






