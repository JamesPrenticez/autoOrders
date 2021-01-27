function subLog (){
    var node = document.createElement("li");   
    let logBox = document.getElementById("logBox")
    let subMessage = document.createTextNode("You Clicked The submitButton")
    node.appendChild(subMessage)
    logBox.appendChild(node)
}

function hrefLog (innerHTML){
    var node = document.createElement("li");   
    let logBox = document.getElementById("logBox")
    let hrefMessage = document.createTextNode("You Clicked" + innerHTML)
    node.appendChild(hrefMessage)
    logBox.appendChild(node)
}