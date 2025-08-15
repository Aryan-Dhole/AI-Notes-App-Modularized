// utils.js

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': "&amp;",
        '<': "&lt;",
        '>': "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Typewriter animation for text
function typeWriterEffect(element, text, speed = 20) {
    let i = 0;
    element.textContent = "";
    const timer = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i > text.length) clearInterval(timer);
    }, speed);
}
