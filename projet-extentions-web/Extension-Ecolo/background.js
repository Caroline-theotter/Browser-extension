function cancel(requestDetails) {
  "Canceling: " + requestDetails.url;
  return {cancel: true};
}

var initState = browser.webRequest.onBeforeRequest.addListener(cancel,{urls: ["<all_urls>"], types: ["image"]},["blocking"]);

console.log("hello")
const stoppingExtension = (message) => {
  console.log('hello i am in the stopingExtension');
  message.checkedState
  if(message.checkedState == true){
  var refresh = "document.location.reload()"
  browser.webRequest.onBeforeRequest.removeListener(cancel);
  browser.tabs.executeScript({code : refresh})
  console.log('hello c est encore moi')
  }else{
  refresh = "document.location.reload()"
  browser.webRequest.onBeforeRequest.addListener(cancel,{urls: ["<all_urls>"], types: ["image"]},["blocking"]);
  browser.tabs.executeScript({code : refresh})
  }
}

browser.runtime.onMessage.addListener(stoppingExtension);
console.log("hello5")
