function load4399Script(type, url) {
    var element = document.createElement("script");
    element.setAttribute(type, url);
    document.getElementsByTagName("head")[0].appendChild(element)
}
window.h5api = {
    initGame: function() {},
    progress: function() {}
};
load4399Script("src", "js/api.js")