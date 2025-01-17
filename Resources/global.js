document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const codeElement = document.getElementById(targetId);

        
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = codeElement.innerText; 
        document.body.appendChild(tempTextArea);

        tempTextArea.select();
        document.execCommand('copy'); 
        document.body.removeChild(tempTextArea);

        
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
});