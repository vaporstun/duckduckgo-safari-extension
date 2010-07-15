document.addEventListener("contextmenu", ddgHandler, false);

function ddgHandler(ddgEvent) {
    var sel = '';
    sel = window.parent.getSelection()+'';
    sel = sel.replace(/^\s+|\s+$/g,"");
    safari.self.tab.setContextMenuEventUserInfo(ddgEvent, sel);
}

window.addEventListener('keydown', checkKeyDown, false);
window.addEventListener('keyup', checkKeyUp, false);

var isCtrl = false;

function checkKeyDown(e) {
    if (e.which == 17) isCtrl=true;
    if (e.which == 68 && isCtrl == true) {
	safari.self.tab.dispatchMessage('ddgFocus');
	isCtrl = false;
    }
}

function checkKeyUp(e) {
    if (e.which == 17) isCtrl = false;
}