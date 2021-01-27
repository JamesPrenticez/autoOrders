function subLog (){
    let logBox = document.getElementById("logBox")
    let subMessage = document.createTextNode("You Clicked The submitButton")
    logBox.appendChild(subMessage)
}

function hrefLog (innerHTML){
    let logBox = document.getElementById("logBox")
    let hrefMessage = document.createTextNode("You Clicked" + innerHTML)
    logBox.appendChild(hrefMessage)
}