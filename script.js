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

// ---------- Click Submit Button  ---------- 
let sub = document.querySelectorAll("#submitButton");

function clickSubmit(){
  sub.forEach(btn => btn.click())
}

// ---------- Click csv in Arr2 if found----------
function clickStuff() {
  createArr2()
  let found = arr1.some((r) => arr2.indexOf(r) >= 0);
    if (found === true) {
      a.forEach(btn => btn.click())
    } else console.log("not working")
}





