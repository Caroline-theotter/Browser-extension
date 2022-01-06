//listen to the state of the checkbox and send the response to the back

var checkbox = document.querySelector('input[type="checkbox"]')
checkbox.addEventListener('change', notifyBackgroundPage)

//send the response to the back
function notifyBackgroundPage () {
  var sending = browser.runtime.sendMessage({
    checkedState: checkbox.checked
  })
  sending.then(checkingSwitchButton, handleError)
}

function handleError (error) {
  console.log(`Error: ${error}`)
}

//checking the state of the switch button
checkbox.checked = true
function checkingSwitchButton () {
  if (checkbox.checked) {
    //checkbox.checked == false;
    browser.storage.local.set({ checked: checkbox.checked })
  } else {
    // checkbox.checked == true;
    browser.storage.local.set({ checked: checkbox.checked })
  }
}

//store the state in the browser storage
function onGet (state) {
  checkbox.checked = state.checked
}

var storageGeting = browser.storage.local.get(['checked'])
storageGeting.then(onGet)


