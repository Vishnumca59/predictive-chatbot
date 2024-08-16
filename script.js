// scripts.js

document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();
    if (userInput === '') return;

    const chatBox = document.getElementById('chat-box');

    
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    
    document.getElementById('user-input').value = '';

    
    let botResponse = generateBotResponse(userInput);

    
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message bot';
        botMessage.textContent = botResponse;
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }, 1000);
});


document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default action (e.g., newline)
        document.getElementById('send-button').click(); // Trigger click event
    }
});

function generateBotResponse(userInput) {
    // Define maintenance-related alerts
    const alerts = {
        'machine down': 'Alert: The machine is down. Please contact the maintenance team immediately!',
        'overheating': 'Warning: Equipment is overheating. Please check the cooling system.',
        'vibration': 'Alert: Excessive vibration detected. Immediate inspection is required.',
        'error code': 'Error: An error code has been detected. Please refer to the maintenance manual.',
        'is everything fine': 'YESSS!!: The machines are successfully running without any fault.'
    };

    for (let key in alerts) {
        if (userInput.includes(key)) {
            return alerts[key];
        }
    }

    
    return 'Sorry, I did not understand that. Can you please provide more details?';
}
