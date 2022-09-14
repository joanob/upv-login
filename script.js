chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    document.getElementsByName("dni")[0].value = request.dni
    document.getElementsByName("clau")[0].value = request.pin 
    document.getElementsByClassName("upv_btsubmit")[0].click()
})