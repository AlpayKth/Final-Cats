const meowButton = document.getElementById('meowBtn');

if (meowButton) {
    meowButton.addEventListener('click', () => {
        const originalText = meowButton.innerText;
        
        meowButton.innerText = "Meow! ";
        
        alert("Welcome to the Cat Care Project! Check out the Care page for tips.");
        
        setTimeout(() => {
            meowButton.innerText = originalText;
        }, 2000);
    });
}
