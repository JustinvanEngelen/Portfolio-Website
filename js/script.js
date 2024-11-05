// Dark/Light Mode Toggle
const toggleThemeBtn = document.getElementById('toggle-theme');

toggleThemeBtn.addEventListener('click', () => {
    // Toggle 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');
    
    // Toggle button text based on the mode
    toggleThemeBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    
    // Save the preference in localStorage
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check and apply the saved theme preference on load
document.addEventListener('DOMContentLoaded', () => {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        toggleThemeBtn.textContent = 'Light Mode';
    }
});
