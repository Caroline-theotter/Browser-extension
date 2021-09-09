
var h1class = document.getElementsByTagName("h1")
for(let i = 0; i<h1class.length; i++){
    h1class[i].style.color = '#FFA500'
}

var imgclass = document.getElementsByTagName("img")
for(let i = 0; i<imgclass.length; i++){
    imgclass[i].style.border = '5px solid red'
}

// var h1class = document.getElementsByTagName("p")
// for(let i = 0; i<h1class.length; i++){
//     h1class[i].style.fontSize = "50px"
// }

document.body.style.fontSize = "30px";

var imgclass = document.getElementsByTagName("img")
browser.runtime.onMessage.addListener(changingImage);
function changingImage(message){
    for(let i = 0; i<imgclass.length; i++){
        imgclass[i].src = `${message.url}`
    }
}




