function cancel(requestDetails) {
  "Canceling: " + requestDetails.url;
  return {cancel: true};
}

browser.webRequest.onBeforeRequest.addListener(cancel,{urls: ["<all_urls>"], types: ["image"]},["blocking"]);

console.log("hello")
const stoppingExtension = () => {
  console.log('hello i am in the stopingExtension');
  browser.webRequest.onBeforeRequest.removeListener(cancel);
  console.log('hello c est encore moi')
}

browser.runtime.onMessage.addListener(stoppingExtension);
console.log("hello5")