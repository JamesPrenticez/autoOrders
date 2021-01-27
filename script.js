let arr1 = ["Pre Difined List", "030.csv", "070.csv", "080.csv"];
let arr2 = [];

// ---------- createArr2  ---------- 
let a = document.querySelectorAll("a"), i;

function createArr2(){
  for (i = 0; i < a.length; i++){
    arr2.push(a[i].innerHTML)
  }
  console.log(arr1)
  console.log(arr2)
  return arr2
 }

// ---------- Compare Arrays  ---------- 
function compareArrays() {
  createArr2()
  let found = arr1.some((r) => arr2.indexOf(r) >= 0);
  if (found === true) {
    console.log("working");
  } else console.log("not working")
}



