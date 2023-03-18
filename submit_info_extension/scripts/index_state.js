// const domains = self.domains;
// import { domains } from 'constants.js';
const domains = ['target.com', 'amazon.com', '88rising.com'];

document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      const currentUrl = tabs[0].url;
      const truncatedUrlElement = document.getElementById('truncated-url');
      const siteIndexElement = document.getElementById('index-number');

      truncatedUrl = new URL(currentUrl).hostname.replace(/^www\./, '');
      truncatedUrlElement.textContent = truncatedUrl;
      
      siteIndex = domains.indexOf(truncatedUrl) + 1;
      siteIndexElement.textContent = siteIndex.toString();
    });
  });