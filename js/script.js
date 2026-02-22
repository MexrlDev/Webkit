// js/script.js

// Edit this array to add or remove buttons – no CSS changes needed
const buttonsData = [
    { label: "1.76 Playground", url: "scripts/1.76-playground/index.html" }
    // Add more buttons below as needed, for example:
    // { label: "Another Button", url: "scripts/another/index.html" }
];

// Container where buttons will be inserted
const container = document.getElementById('button-container');

// Generate buttons from the array
buttonsData.forEach(button => {
    const link = document.createElement('a');
    link.href = button.url;
    link.className = 'ps4-button';
    link.textContent = button.label;
    container.appendChild(link);
});
