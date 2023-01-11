var students =[
    {
        "name": "John",
        "age": 25,
        
    },
    {
        "name": "Sara",
        "age": 22,
    },
    {
        "name": "Bob",
        "age": 26,
    }
]



// students.forEach((s)=>{
//     console.log(s)
// })
var studentsData =[]
students.map((s)=>{

        studentsData.push(s.name.toLocaleUpperCase())
        studentsData.push(s.age*2)

})
console.log(studentsData)
