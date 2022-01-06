var checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', notifyBackgroundPage);
checkbox.checked = true;
     function checkingSwitchButton () {
      if (checkbox.checked) {
        //checkbox.checked == false;
        browser.storage.local.set({checked : checkbox.checked});
      }else {
       // checkbox.checked == true;
        browser.storage.local.set({checked : checkbox.checked});
      }
   }

//------------
  function handleError(error) {
    console.log(`Error: ${error}`);
  }
  
  function notifyBackgroundPage() {
    var sending = browser.runtime.sendMessage({
      checkedState : checkbox.checked
    });
    sending.then(checkingSwitchButton, handleError);
  }

  function onGet(state){
    checkbox.checked = state.checked;
  }
  var storageGeting = browser.storage.local.get(["checked"])
  storageGeting.then(onGet)

   //popup envoie un message au background 
   //background recois le message 
   // si checkingS == true {remove et refrech}