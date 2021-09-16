var checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', notifyBackgroundPage);
    
     function checkingSwitchButton () {

      if (checkbox.checked) {
        checkbox.checked = false;
      }else{
        checkbox.checked = true;
      }
   }
//------------
console.log("hello 1")
  function handleError(error) {
    console.log(`Error: ${error}`);
  }
  
  function notifyBackgroundPage() {
    console.log("hello 3")
    var sending = browser.runtime.sendMessage({
      greeting: "Greeting from the content script"
    });
    console.log("hello 4")
    sending.then(checkingSwitchButton, handleError);
  }

   //popup envoie un message au background 
   //background recois le message 
   // si checkingS == true {remove et refrech}