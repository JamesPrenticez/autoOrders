let arr1 = ["030.csv", "070.csv", "080.csv"];
let arr2 = ["derp"];
let arr3 = []

// ---------- createArr2  ---------- 
let a = document.querySelectorAll("a"), i;

function createArr3(){
  for (i = 0; i < a.length; i++){
    arr3.push(a[i].innerHTML)
  }
  console.log(arr3)
  return arr3
 }

console.log(arr3)
// ---------- Compare Arrays  ---------- 
let found = arr1.some((r) => arr2.indexOf(r) >= 0);

function compareArrays() {
  if (found === true) {
    console.log("working");
  } else console.log("not working")
}



