var menuItem = {
	"id": "wikiMe",
	"title": "WikiMe",
	"contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

function fixedEncodeURI(str) {
	return encodeURI (str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
	if(clickData.menuItemId == 'wikiMe' && clickData.selectionText){
		var wikiURL = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
		var createData = {
			"url": wikiURL,
			"type": "popup",
			"top":55,
			"left": 85,
			"width": screen.availWidth/2,
			"height": screen.availHeight/2
		};
		chrome.windows.create(createData, function(){});
	}
});