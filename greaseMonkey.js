// ==UserScript==
// @name          Hello World
// @namespace     http://diveintogreasemonkey.org/download/
// @description   example script to alert "Hello world!" on every page
// @exclude       http://diveintogreasemonkey.org/*
// @exclude       http://www.diveintogreasemonkey.org/*
// @include       http://203.97.77.77/IBPMWeb/AcordeProcessForms/po/default.asp
// @include       http://203.97.77.77/IBPMWeb/AcordeProcessForms/po/default.asp

// ==/UserScript==
 //---------------------------------------------------------------------------------------
 let myTimer = setTimeout(waitandConfirm, 6000)
 let counter = -1
 //---------------------------------------------------------------------------------------
 function waitandConfirm() {
  //---------------------------------------------------------------------------------------
     let outterFrame = document.querySelectorAll("frame")
     let number = outterFrame[1].contentWindow.document.querySelectorAll("frame").length //checks if outter frame exsists
     let innerFrame = outterFrame[1].contentWindow.document.querySelectorAll("frame")
     let up = innerFrame[1].contentWindow.document.querySelectorAll("input#upload") //upload button
 //---------------------------------------------------------------------------------------
     if(number === 2){
         up[0].addEventListener('click', function (event) {
         console.log("upload button")
             setInterval(function(){
                     let a = innerFrame[1].contentWindow.document.querySelectorAll("a"), i;
                     let sub = innerFrame[0].contentWindow.document.querySelectorAll("button#submitButton")
                     let con = innerFrame[0].contentWindow.document.querySelectorAll("button") //Confirm Submit to Workflow
                     let tracker = innerFrame[0].contentWindow.document.querySelectorAll("button#submitButton").length
 
                     var filtered = Array.prototype.filter.call(a, function(item){
                         return /csv/gi.exec(item.innerHTML)
                     })
 
                     if (tracker === 0){
                             console.log(filtered[0])
                             filtered[0].click()
                         } else if (tracker === 1) {
                             console.log(sub)
                             sub[0].click()
 
                             if (con.length > 7){ //When Node list is more then 7 the confirm button is always index 0
                             console.log(con[0])
                             con[0].click()
                             }
                     }
 
             }, 2000);
         });
 
     } else if (number != 2) console.log("too slow retry...")
     return
 }