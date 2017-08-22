// ==UserScript==
// @name        Offline Website Testing
// @namespace   jeremyredhead
// @description Fixes and redirects file urls for easier testing of static html files (eg. neocities) offline.
// @include     file:///C:/Users/JohnDoe/Documents/site-folder/*
// @version     1.4.4
// ==/UserScript==

if (/\/[^\.]*$/.test(location.pathname)) location.pathname += '/index.html';

var fix = /^.*(?=\/)/.exec(GM_info.script.includes[0]);
const fixList = {'a': 'href', 'link': 'href', 'img': 'src', 'script': 'src'};

for (let tag in fixList) {
	for (let elem of document.getElementsByTagName(tag)) {
		var attr = elem.getAttribute(fixList[tag]);
		if (attr === null || attr[0] != '/') continue;
		attr[1] == '/'
			? elem.setAttribute(fixList[tag], 'http:' + attr)
			: elem.setAttribute(fixList[tag], fix + attr);
	}
}
