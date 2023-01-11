var arr = ["raj", "parth", "meet", "neha"];
//arr[0] = "raj"
console.log(arr.length); // 4

arr.push("vishal"); // add element at last
console.log(arr); // [ 'raj', 'parth', 'meet', 'neha', 'vishal' ]
console.log(arr.pop()); // remove element from last
console.log(arr);
arr.shift();
arr.unshift("abc");
console.log(arr);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

//arr[i]
arr.forEach((i, index) => {
  if (i.length>3){
    console.log("....",i);
  }
});


var x = arr.map((i, index) => {
  return i.toUpperCase();
});

console.log(x);

var filtereddata = arr.filter((x)=>{


        ///true x[0] false --> file push
        //x[1] 5 true ->x[1] .push
        
        return x.length>3


})
console.log(filtereddata)


