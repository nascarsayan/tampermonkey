// ==UserScript==
// @name         Kissanime Beta2 Server
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       nascarsayn@gmail.com
// @match        https://kissanime.ru/Special/AreYouHuman*%3ddefault
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
  'use strict';
  // Your code here...
var oldHost = location.toString();
var newHost = oldHost.replace(/default$/gi, "beta2");
location.replace(newHost);
})();
