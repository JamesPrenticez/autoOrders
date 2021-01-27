let arr1 = ["030.csv", "070.csv", "080.csv"];
let arr2 = [];

let arr3 = document.querySelectorAll("a");
//console.log(arr3)

let found = arr1.some((r) => arr2.indexOf(r) >= 0);

function test() {
  if (found) {
    console.log("working");
  }
}

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

//console.log(found);
//console.log(foundtest);

//console.log(arr1, arr2, arr3, arr4)
// console.clear()