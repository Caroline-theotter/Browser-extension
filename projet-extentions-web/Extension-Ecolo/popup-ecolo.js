var checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', notifyBackgroundPage);
    
     function checkingSwitchButton () {

      if (checkbox.checked) {
       // checkbox.checked = true;
        browser.storage.local.set({checked : checkbox.checked});
      }else {
       // checkbox.checked = false;
        browser.storage.local.set({checked : checkbox.checked});
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
      
    });
    console.log("hello 4")
    sending.then(checkingSwitchButton, handleError);
  }

  function onGet(state){
    console.log(state.checked)
    checkbox.checked = state.checked;
  }
  var storageGeting = browser.storage.local.get(["checked"])
  storageGeting.then(onGet)

   //popup envoie un message au background 
   //background recois le message 
   // si checkingS == true {remove et refrech}