// ==UserScript==
// @name          Show All Passwords
// @namespace     sizzlemctwizzle
// @description   Show all passwords as plain-text. Use at your own risk!
// @copyright     2023, sizzle (https://openuserjs.org/users/sizzle)
// @license       MIT
// @version       1.1
// @updateURL     https://openuserjs.org/meta/sizzle/Show_All_Passwords.meta.js
// @downloadURL   https://openuserjs.org/install/sizzle/Show_All_Passwords.user.js
// @match         https://*
// @match         http://*
// @match         https://*/*
// @match         http://*/*
// @run-at        document-start
// ==/UserScript==

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      document.querySelectorAll('input[type=password]')
        .forEach(input => { input.type='text'; });
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(document, { attributes: false, childList: true, subtree: true });
