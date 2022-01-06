//replace all the no loaded images by a message

var imgclass = document.getElementsByTagName("img")

console.log("hello caroline")
for(let i = 0; i<imgclass.length; i++){
    imgclass[i].alt = 'image not loaded'
}