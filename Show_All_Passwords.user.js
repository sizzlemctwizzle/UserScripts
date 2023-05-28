// ==UserScript==
// @name          Show All Passwords
// @namespace     sizzlemctwizzle
// @description   Show all passwords as plain-text. Use at your own risk!
// @license       MIT
// @version       1.4
// @match         https://*
// @match         http://*
// @match         https://*/*
// @match         http://*/*
// @run-at        document-start
// ==/UserScript==

const showPasswords = () => document.querySelectorAll('input[type=password]')
  .forEach(input => input.type = 'text');

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === 'childList'
        || mutation.type === "attributes") {
      showPasswords();
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(document, { attributes: true, childList: true, subtree: true });
window.addEventListener('DOMContentLoaded', event => showPasswords());
