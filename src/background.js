// Copyright 2018 Juan D Frias
//
// This code is licensed under the MIT license.
// See the LICENSE file in the project root for license terms.

function bingToGoogleRedirect(request) {
  let targetUrl = request.url;
  let searchQuery = targetUrl.match("q=(.*?)(&|$)");
  if (searchQuery) {
    targetUrl = "https://google.com/search?q=" + searchQuery[1];
  }
  return {redirectUrl: targetUrl};
}

browser.webRequest.onBeforeRequest.addListener(
  bingToGoogleRedirect,
  {
    urls: ["https://www.bing.com/search*"],
    types: ["main_frame"]
  },
  ["blocking"]
);
