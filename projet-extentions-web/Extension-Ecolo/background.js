function cancel(requestDetails) {
  console.log("Canceling: " + requestDetails.url);
  return {cancel: true};
}

browser.webRequest.onBeforeRequest.addListener(cancel,{urls: ["<all_urls>"], types: ["image"]},["blocking"]);
