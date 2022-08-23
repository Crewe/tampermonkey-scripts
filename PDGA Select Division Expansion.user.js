// ==UserScript==
// @name         PDGA Select Division Expansion
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Only open the divisions you are typically interested in.
// @author       Ryan Edwards-Crewe
// @match        https://www.pdga.com/tour/event/*
// @icon         Https://www.pdga.com/sites/all/themes/pdga/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var divs = document.getElementsByClassName("division");
    var expand = ['MA1','MA2']
    for (var i=0; i < divs.length; i++) {
        var d = divs[i].parentElement.parentElement;
        if (!expand.includes(divs[i].id)) {
            d.open = false;
        }
    }
})();
