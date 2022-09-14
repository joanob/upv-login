const main = document.getElementById("main");
const settings = document.getElementById("settings");

document.getElementById("login").onclick = () => {
    const dni = localStorage.getItem("dni")
    const pin = localStorage.getItem("pin")

    chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		chrome.tabs.sendMessage(
			tab[0].id, {dni, pin}
		);
	});
    window.close()
}


document.getElementById("settingsButton").onclick = () => {
    main.style.display = "none"
    settings.style.display = "block"
}

document.getElementById("saveSettings").onclick = () => {
    localStorage.setItem("dni", document.getElementById("dni").value)
    localStorage.setItem("pin", document.getElementById("pin").value)
    main.style.display = "block"
    settings.style.display = "none"
}