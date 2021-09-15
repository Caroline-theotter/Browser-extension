document.querySelector('input[type="checkbox"]').addEventListener('change', notifyBackgroundPage)

     function checkingSwitchButton (message) {
      if (checkbox.checked) {
        console.log("the button is checked:" + message.response);
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