
const login = async (email, password) => {
    const resp = await makeRequest("https://api.chatdocux.com/api/v1/admin/user/login", {
        method: "POST",
        body: {
            "email": email,
            "password": password,

        }
    })

    if (resp.status !== 200 || resp.data?.access_token == null) {
        alert("Login failed")
        return
    }
    localStorage.setItem("token", resp.data.access_token);
};

async function makeRequest(url, options) {
    const result = {}
    try {
        let params = {
            method: options.method || "GET",
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
            body: JSON.stringify(options.body),
        };
        if (params.method === "GET") {
            delete params.body;
        }
        const response = await fetch(`${url}`, params);

        result.data = await response.json();
        result.status = response.status;

        if (!response.ok) {
            result.error = {
                status: response.status,
                statusText: response.statusText
            }
            return result;
        }
        return result;
    } catch (err) {
        console.log("error", err)
        result.error = {
            status: 500,
            statusText: err.message || "An error occurred"
        }
        return result;
    }
}

function addChatbotButton() {
    // Create a button element
    const button = document.createElement('button');
    button.id = 'btn-chatbot-open';
    button.textContent = 'Open Chatbot';

    // Style the button
    button.style.position = 'fixed';
    button.style.left = '20px';
    button.style.bottom = '15px';
    button.style.zIndex = '100000';
    button.style.display = 'block';

    // Add an event listener to show the chatbot
    button.addEventListener('click', function () {
        const chatbotC = document.querySelector('#chatbot-iframe-container');
        if (chatbotC.style.display === 'flex') {
            chatbotC.style.display = 'none';
            return;
        }
        chatbotC.style.display = 'flex';
    });
    document.body.appendChild(button);
}

function createChat() {
    const chatbotContainer = document.createElement("iframe");
    chatbotContainer.id = "chatbot-iframe-container";
    chatbotContainer.src = "https://apssouza22.github.io/chat-commander-ui/#/chatbot";
    document.body.appendChild(chatbotContainer);
}

function addStyle() {
    const style = document.createElement('style');

// Set the CSS rules for the <style> element
    const css = `
    
#chatbot-iframe-container {
    display: none;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #444;
    width: 40%;
    height: 80%;
    border: 1px solid #ccc;
    border-radius: 25px;
    overflow: hidden;
    flex-direction: column;
    position: fixed;
    bottom: 10px;
    right: 5px;
    background: white;
    z-index: 1000;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;
}

@media screen and (max-width: 768px) {
  #chatbot-iframe-container {
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
    border-radius: 0;
  }
  #btn-chatbot-open {
    display: none;
  }
}
`;

    style.textContent = css;
    document.head.appendChild(style);
}

(function () {
    console.log("Run chatbot plugin");
    addChatbotButton();
    createChat();
    addStyle();
    login(CHATBOT_EMAIL, CHATBOT_PASSWORD)
}());
