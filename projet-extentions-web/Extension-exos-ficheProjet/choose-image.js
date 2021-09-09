document.getElementById('image-select').addEventListener('change', selectImage)
function selectImage (event) {
  // var selectedValueOfTheSelector = event.target.value;
  var varUrl = null
  switch (event.target.value) {
    case 'plage':
      varUrl = browser.runtime.getURL('Nature/Photo-Plage-1.jpg')
      break;
    case 'plage2':
      varUrl = browser.runtime.getURL('Nature/Photo-Plage-2.jpg')
      break;
    case 'sahara':
      varUrl = browser.runtime.getURL('Nature/92.jpg')
      break;
    case 'foret':
      varUrl = browser.runtime.getURL('Nature/Photo-foret-1.jpg')
      break;
    case 'montagne':
      varUrl = browser.runtime.getURL('Nature/Photo-Montagne-1.png')
      break;
  }

  function sendMessageToTabs (tabs) {
    for (let tab of tabs) {
      browser.tabs.sendMessage(tab.id, { url: varUrl }).then(response => {
      })
    }
  }
    browser.tabs.query({currentWindow: true, active: true})
      .then(sendMessageToTabs)
}

