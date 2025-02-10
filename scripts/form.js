// Get the current year for the copyright
const currentYear = new Date().getFullYear();
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = currentYear; // Update the year dynamically

// Get the last modified date of the document
const lastModified = document.lastModified;
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last modified: ${lastModified}`; // Update the last modified date

// Product array 

const products = [
    { id: 'p1', name: 'Smartphone' },
    { id: 'p2', name: 'Laptop' },
    { id: 'p3', name: 'Headphones' },
    { id: 'p4', name: 'Smartwatch' },
    { id: 'p5', name: 'Gaming Console' }
];

// Populate Product Dropdown

const productSelect = document.getElementById('product');
products.forEach(product => {
    let option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Review Counter using Local Storage

window.onload = function () {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    document.getElementById('reviewCounter').textContent = `Reviews Submitted: ${reviewCount}`;
};

// Increment Counter on Form Submission

document.querySelector('form').addEventListener('submit', function () {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
});