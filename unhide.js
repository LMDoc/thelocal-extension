
let prem = document.getElementById('premium-container');


function unhide() {
	document.querySelector("div.tp-modal").style.display = "none";
	document.querySelector("div.tp-backdrop.tp-active").style.display = "none";
	document.querySelector("body").style.cssText = "overflow: scroll !important";
	document.querySelector("div#fade-box").style.backgroundImage = "none";
};


function unhidePrem() {
	window.stop();
}

if(prem) { unhidePrem() };

setTimeout(unhide, 4000)

