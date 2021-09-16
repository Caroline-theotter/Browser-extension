var imgclass = document.getElementsByTagName("img")

console.log("hello caroline")
for(let i = 0; i<imgclass.length; i++){
    imgclass[i].alt = 'ceci est une image non chargée'
}