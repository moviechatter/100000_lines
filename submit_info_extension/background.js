const domains = ['target.com', 'amazon.com', '88rising.com'];

// // In case something breaks later, you can always use this to make just the new tabs work :)
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    // setTimeout(() => {  console.log("working at all?"); }, 3000);
  if (changeInfo.url) {
    if (domains.some(domain => changeInfo.url.includes(domain))) {
      chrome.action.setPopup({ popup: 'index_state.html', tabId: tab.id });
    } else {
      chrome.action.setPopup({ popup: 'sleep_state.html', tabId: tab.id });
    }
  }
});

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    let currentUrl = tabs[0].url;
    chrome.action.setPopup({ popup: `popup.html?currentUrl=${currentUrl}` });
});

chrome.tabs.onActivated.addListener(async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab && domains.some(domain => tab.url.includes(domain))) {
      chrome.action.setPopup({ popup: 'index_state.html' });
    } else {
      chrome.action.setPopup({ popup: 'sleep_state.html' });
    }
  });
  
  // Update popup when the extension is installed or updated
  chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setPopup({ popup: 'sleep_state.html' });
  });

// Apparently it is running background.js
// setTimeout(() => {  console.log("working at all?"); }, 3000);