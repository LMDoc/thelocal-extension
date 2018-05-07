
function unhide() {
	console.log('This is working')
	
	document.querySelector("div.tp-modal").style.display = "none";
	document.querySelector("div.tp-backdrop.tp-active").style.display = "none";
	document.querySelector("body").style.cssText = "overflow: scroll !important";
	document.querySelector("div#fade-box").style.backgroundImage = "none";
};


setTimeout(unhide, 4000)