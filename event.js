const contextMenuItem = { id: "preview", title: "Knowledge Classic", contexts: ["link"], documentUrlPatterns: ["https://supportforce.lightning.force.com/*"] };
function onClickHandler(e) {
    let n = replaceUrl(getKnowledgeId(e));
    chrome.windows.create({ url: n });
}
function getKnowledgeId(e) {
    let n = e.lastIndexOf("/", e.lastIndexOf("/") - 1),
        t = e.lastIndexOf("/"),
        o = [];
    for (i = n + 1; i <= t - 1; i++) o.push(e[i]);
    return (id = o.join(""));
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
