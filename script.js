// Getting the values
const counterElement = document.getElementById('counter');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

// Setting initial count value
let count = 0;

// Creating and appending  the free shipping message
function createFreeShippingMessage() {
    const shippingMessage = document.createElement('div');
    shippingMessage.id = 'shippingMessage';
    shippingMessage.className = 'message';
    shippingMessage.textContent = 'You have free shipping';
    document.querySelector('.inner-container').insertBefore(shippingMessage, document.querySelector('.buttons'));
}

// Updating the counter value
function updateCounter() {
    counterElement.textContent = count;

// Showing or hiding the free shipping message based on the count
const shippingMessage = document.getElementById('shippingMessage');
    if (count >= 10 && count <= 19) {
        if (!shippingMessage) {
            createFreeShippingMessage();
        } else {
            shippingMessage.style.display = 'block';
        }
    } else {
        if (shippingMessage) {
            shippingMessage.style.display = 'none';
        }
    }

// Showing or hiding the out of stock message based on the count
const outOfStockMessage = document.getElementById('outOfStock');
    if (count >= 20) {
        plusButton.style.backgroundColor = 'red';
        if (!outOfStockMessage) {
            createOutOfStockMessage();
        } else {
            outOfStockMessage.style.display = 'block';
        }
    } else {
        plusButton.style.backgroundColor = ''; // Reset background color
        if (outOfStockMessage) {
            outOfStockMessage.style.display = 'none';
        }
    }

// Hiding the minus button when count is 0
    if (count === 0) {
        minusButton.style.display = 'none';
    } else {
        minusButton.style.display = 'inline-block';
    }
}

// Creating and appending the out of stock message
function createOutOfStockMessage() {
    const outOfStockMessage = document.createElement('div');
    outOfStockMessage.id = 'outOfStock';
    outOfStockMessage.className = 'message';
    outOfStockMessage.textContent = 'Out of stock';
    document.querySelector('.inner-container').insertBefore(outOfStockMessage, document.querySelector('.buttons'));
}

// Handling button clicks
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
