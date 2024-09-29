document.getElementById('chatForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const memberName = document.getElementById('memberName').value.trim();
    const messageInput = document.getElementById('messageInput').value.trim();
    
    if (memberName === '' || messageInput === '') return;

    const chatBox = document.getElementById('chatBox');
    
    // Add member message to chat
    const memberMessage = document.createElement('div');
    memberMessage.classList.add('member-message');
    memberMessage.textContent = `${memberName}: ${messageInput}`;
    chatBox.appendChild(memberMessage);
    
    // Clear input field
    document.getElementById('messageInput').value = '';

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate a response after a short delay
   
});
