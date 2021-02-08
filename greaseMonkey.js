// ==UserScript==
// @name          Hello World
// @namespace     http://diveintogreasemonkey.org/download/
// @description   example script to alert "Hello world!" on every page
// @exclude       http://diveintogreasemonkey.org/*
// @exclude       http://www.diveintogreasemonkey.org/*
// @include       http://203.97.77.77/IBPMWeb/AcordeProcessForms/po/default.asp
// @include       http://203.97.77.77/IBPMWeb/AcordeProcessForms/po/default.asp

// ==/UserScript==

// ---------- Welcome Message ----------
// window.setTimeout(function() { alert('Hello world!') }, 6000);


// ---------- Identify Upload has occured ----------
// This is a multi layered iframe situation the outter iframe we are interested in is addPO. Inside the outter frame is TWO inner frames.
// We are interested in the uploadpo iframe
// We are checking to see that outterframe contains TWO inner frames
// If it does we then want to check if the upload button has been clicked
let myArry= ["240 csv", "070 csv", "089_1 csv"]

let myTimer = setTimeout(waitandConfirm, 6000)

function waitandConfirm() {
 //---------------------------------------------------------------------------------------
    let outterFrame = document.querySelectorAll("frame")
    let number = outterFrame[1].contentWindow.document.querySelectorAll("frame").length //checks if outter frame exsists
    let innerFrame = outterFrame[1].contentWindow.document.querySelectorAll("frame")
    let up = innerFrame[1].contentWindow.document.querySelectorAll("input#upload") //upload button

    console.log(innerFrame[1].contentWindow.document.querySelectorAll("a"))

    //innerFrame[0] === addPOFrame
    //innerFrame[1] === uploadpo
//---------------------------------------------------------------------------------------
    if(number === 2){
        up[0].addEventListener('click', function (event) {
            setInterval(function(){
                setTimeout(function(){
                    let a = innerFrame[1].contentWindow.document.querySelectorAll("a"), i;

                    var filtered = Array.prototype.filter.call(a, function(item){
                        return /csv/gi.exec(item.innerHTML)
                    })
                    for (let i = 0; i < filtered.length; i++){
                        console.log(filtered[i])
                    }
                }, 2000);
                     let sub = innerFrame[0].contentWindow.document.querySelectorAll("button#submitButton")
                    console.log(sub)
            }, 2000);
        });

    } else if (number != 2) console.log("retry...element does not exsist yet " + "number value = " + number)
    return
}
//---------------------------------------------------------------------------------------
// function beginClicking() {
//     if(isClicked === 0){ //|| number < 0
//         var isClickedVar = setInterval(function(){
//             console.log("isClicked value = " + isClicked)
//     }, 2000);
//     } else if (isClicked === 1) {
//         clearInterval(isClickedVar)
//         console.log("element is now avaliable " + innerFrame[1])
//         console.log("begin clicking proceedure")


//     } else {
//         console.log("Somthing is broken")
//     }
//  //---------------------------------------------------------------------------------------
//     return
// }

// ---------- Identify <a href> ----------
// function Clicker() {
//     console.log("Spam Clicker commence")
//     let outterFrame = document.querySelectorAll("frame")
//     let innerFrame = outterFrame[1].contentWindow.document.querySelectorAll("frame")

//     let a = innerFrame[1].contentWindow.document.querySelectorAll("a"), i;
//     let counter = a.length

//     console.log(a)
//     console.log(counter)

//     if(counter > 0){
//         for(let i = 0; i < a.length; i++){
//             a[i].click()
//             console.log("You Clicked " + a[i].innerHTML)
//             //delay
// //             setTimeout(function() { clickSubmit() }, 5000);
//             //delay
//         }
//     }
//   return
// }


//     let myArr = [];

//     for (i = 0; i < a.length; i++){
//         myArr.push(a[i].innerHTML)
//     }

// ---------- Compare dynamic list with fixed list ----------

// function compear() {
//     const regex = /csv$/gi
//     let matchedArr = []
//     for (i = 0; i < myArr.length; i++){
//             let match = myArr[i].match(regex)
//             if (match != null) {
//                 matchedArr.push(match[0])
//                 console.log(matchedArr)
//             }
//     }
//     return
// }

// ---------- Identify Submit has pressed ----------
// function clickSubmit() {
//     let iframe = document.getElementsByName('addPO')
//     iframe[0].setAttribute("id", "addPO")
//     console.log(iframe)
//     if (iframe[0].name === "addPO"){
//         let addPOFrame = document.getElementById("addPO")
//         let sub = addPOFrame.contentWindow.document.querySelectorAll("button#submitButton")
//         console.log(sub)
//         sub[0].click()
//     } else console.log("No")
//     return
// }