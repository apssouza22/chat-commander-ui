var CHATBOT_EMAIL = "apssouza22@gmail.com"
var CHATBOT_PASSWORD = "123"


function loadChatScript(url) {
    let script = document.createElement('script');
    script.type = 'module';
    script.src = url;
    document.head.appendChild(script);
}
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    sessionStorage.setItem('pluginMode', 'true');
    localStorage.setItem('app_key', '19428139')
    loadChatScript("https://apssouza22.github.io/chat-commander-ui/js/chatbot-plugin.js");
});
