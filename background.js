// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.webNavigation.onDOMContentLoaded.addListener(function(details) {
	chrome.tabs.getAllInWindow(null, function(tabs){
		var tabExecute = [];
		for (var i = 0; i < tabs.length; i++) {

	    	/*
	    	// Se a aba ja não foi usada e se a url for diferente de chrome (para não tentar injetar o script em páginas do navegador)
	    	if( !tabExecute[tabs[i].id] && tabs[i].url.substring(0, 6) != "chrome" ){
	    		chrome.tabs.executeScript(tabs[i].id, { file: "execute.js" });
	    	}*/

	    	if(
	    		tabs[i].url.substring(0, 32) == "http://www.animakai.me/redir.php" || 
	    		tabs[i].url.substring(0, 34) == "http://www.otakai.com.br/redir.php"
	    		){
				chrome.tabs.executeScript(tabs[i].id, { file: "execute.js" });
			}

			tabExecute.push(tabs[i].id);
		}
	});
});