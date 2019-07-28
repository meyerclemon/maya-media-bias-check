var contextMenuItem = {
  id: "checkMediaBias",
  title: "CheckMediaBias",
  contexts: ["selection"]
};
chrome.contextMenus.create(contextMenuItem);

function fixedEncodeURI(str) {
  return encodeURI(str)
    .replace(/%5B/g, "[")
    .replace(/%5D/g, "]");
}

chrome.contextMenus.onClicked.addListener(function(clickData) {
  if (clickData.menuItemId == "checkMediaBias" && clickData.selectionText) {
    var moreInfo = "contextMenu/infoBox.html";
    // + fixedEncodeURI(clickData.selectionText);
    var createData = {
      url: moreInfo,
      type: "popup",
      top: 5,
      left: 5,
      width: parseInt(screen.availWidth / 4),
      height: parseInt(screen.availHeight / 4)
    };
    chrome.windows.create(createData, function() {});
  }
});
