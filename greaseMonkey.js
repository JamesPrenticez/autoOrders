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
window.setInterval(function() {
    let outterFrame = document.querySelectorAll("frame")
    console.log(outterFrame)

    let number = outterFrame[1].contentWindow.document.querySelectorAll("frame").length
    console.log(number)

    if (number === 2){
            console.log(outterFrame)
            console.log(number)

            let innerFrame = outterFrame[1].contentWindow.document.querySelectorAll("frame")
            let up = innerFrame[1].contentWindow.document.querySelectorAll("input#upload")
            console.log(innerFrame[1])
            console.log(up)
        } else {
            setTimeout(function() {
                    console.log("retry...element does not exsist yet")//retry
            }, 2000)
        }

     //         if (iframe[0].name === "uploadPO"){
     //         let uploadPOFrame = document.getElementById("uploadPO")
     //         let up = uploadPOFrame.contentWindow.document.querySelectorAll("button#upload")
     //         console.log(up)
     //         //up[0].click()
     //     } else console.log("No")
     return
 }, 6000);


//          up.addEventListener('click', function (event) {
//          alert('Element clicked through function!');
//          });

// ---------- Identify Submit has pressed ----------
// window.setTimeout(function() {
//     let iframe = document.getElementsByName('addPO')
//     iframe[0].setAttribute("id", "addPO")
//     console.log(iframe)
//     if (iframe[0].name === "addPO"){
//         let addPOFrame = document.getElementById("addPO")
//         let sub = addPOFrame.contentWindow.document.querySelectorAll("button#submitButton")
//         console.log(sub)
//         //sub[0].click()
//     } else console.log("No")
//     return
// }, 3000);

// ---------- Identify <a href> ----------
// let myArr = [];

// let a = document.querySelectorAll("a"), i;

// window.setTimeout(function() {
//   for (i = 0; i < a.length; i++){
//     myArr.push(a[i].innerHTML)
//   }
//   return myArr
// }, 60);

//  console.log(myArr)
//  console.log("run through")


// ---------- Compare dynamic list with fixed list ----------
// window.setTimeout(function() {
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
// }, 60);


