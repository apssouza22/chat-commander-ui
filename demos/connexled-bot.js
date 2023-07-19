var CHATBOT_EMAIL = "apssouza22@gmail.com"
var CHATBOT_PASSWORD = "123"

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    sessionStorage.setItem('pluginMode', 'true');
    localStorage.setItem('appKey', '3261034')
    loadScript("http://localhost:3000/chat-commander-ui/js/chatbot-plugin.js");
});

function loadScript(url) {
    let script = document.createElement('script');
    script.type = 'module';
    script.src = url;
    document.head.appendChild(script);
}