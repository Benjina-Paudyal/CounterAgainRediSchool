// Getting the values
const counterElement = document.getElementById('counter');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');
const freeShippingSpan = document.getElementById('freeShipping');
const outOfStockSpan = document.getElementById('outOfStock');

// Setting initial count value
let count = 0;

// Function to update the counter value
function updateCounter() {
    counterElement.textContent = count;

// Hiding the minus button when count is 0
if (count === 0) {
    minusButton.style.display = 'none';
} else {
    minusButton.style.display = 'inline-block'; 
}


// Showing the free shipping span if count is between 10 and 19
if (count >= 10 && count <= 19) {
    freeShippingSpan.style.display = 'block';
} else {
    freeShippingSpan.style.display = 'none';
}


 // Changing plus button background to red and showing out of stock span if count is 20 or above
 if (count >= 20) {
    plusButton.style.backgroundColor = 'red';
    outOfStockSpan.style.display = 'block';
} else {
    plusButton.style.backgroundColor = ''; // Reset background color
    outOfStockSpan.style.display = 'none';
}
}


// Function to handle button clicks
function handleButtonClick(action) {
    if (action === 'increment') {
        count++;
    } else if (action === 'decrement' && count > 0) {
        count--;
    } else if (action === 'reset') {
        count = 0;
    }
    updateCounter();
}

// Adding event listeners to the buttons
plusButton.addEventListener('click', () => handleButtonClick('increment'));
minusButton.addEventListener('click', () => handleButtonClick('decrement'));
resetButton.addEventListener('click', () => handleButtonClick('reset'));

// Initializing the counter
updateCounter();

