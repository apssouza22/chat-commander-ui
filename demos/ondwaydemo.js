var CHATBOT_EMAIL = "apssouza22@gmail.com"
var APP_KEY ='26996931'
var APP_COLOR="black"
var APP_URL = "https://apssouza22.github.io/chat-commander-ui/"

function loadChatScript(url) {
    let script = document.createElement('script');
    script.type = 'module';
    script.src = url;
    document.head.appendChild(script);
}
window.addEventListener("load", (event) => {
    loadChatScript("/chat-commander-ui/js/chatbot-plugin.js");
});