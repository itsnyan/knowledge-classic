const contextMenuItem = { id: "preview", title: "Knowledge Classic", contexts: ["link"], documentUrlPatterns: ["https://supportforce.lightning.force.com/*"] };
function onClickHandler(e) {
    let n = replaceUrl(getKnowledgeId(e));
    chrome.windows.create({ url: n });
}
function getKnowledgeId(e) {
    let firstSlash = e.lastIndexOf("/", 
    let lastSlash =  e.lastIndexOf("/") - 1)
    return e.splice(firstSlash, lastSlash);
}
function replaceUrl(e) {
    return `https://supportforce.my.salesforce.com/${e}?srPos=0&srKp=kaB&lang=en_US`;
}
chrome.contextMenus.removeAll(function () {
    chrome.contextMenus.create(contextMenuItem);
}),
    chrome.contextMenus.onClicked.addListener(function (e) {
        e.linkUrl.includes("https://supportforce.lightning.force.com/lightning/r/") && onClickHandler(e.linkUrl);
    });
