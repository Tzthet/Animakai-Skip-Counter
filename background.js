// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.webNavigation.onDOMContentLoaded.addListener(function(details) {
	chrome.tabs.getAllInWindow(null, function(tabs){
		var tabExecute = [],
			tabsCount = tabs.length;

		for (var i = tabsCount; i--;) {
	    	if(
	    		( tabs[i].url.indexOf('comicon') != -1 || tabs[i].url.indexOf('animakai') != -1 )  && 
	    		( tabs[i].url.indexOf('/prot.php') != -1 || tabs[i].url.indexOf('/redir.php') != -1 ) &&
	    		tabExecute.indexOf(tabs[i]) == -1
	    	){
				chrome.tabs.executeScript(tabs[i].id, { file: 'execute.js' });
				tabExecute.push(tabs[i].id);
			}
		}
	});
});