// scripts.js

// Bus selection form handler
document.getElementById('search-button').addEventListener('click', function () {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const busType = document.querySelector('input[name="busType"]:checked').value;
    const busCategory = document.querySelector('input[name="busCategory"]:checked').value;

    if (origin && destination && date && busType && busCategory) {
        // Simulate searching for buses and show seat selection form
        document.getElementById('seat-selection-form').style.display = 'block';
        alert(`Searching buses from ${origin} to ${destination} on ${date} with ${busType} ${busCategory}`);
    } else {
        alert('Please fill all the fields in the bus selection form.');
    }
});

// Seat selection handler
const seats = document.querySelectorAll('.seat.available');
let selectedSeats = [];
let totalCost = 0;

seats.forEach(seat => {
    seat.addEventListener('click', function () {
        const seatNumber = this.getAttribute('data-seat');
        if (selectedSeats.includes(seatNumber)) {
            selectedSeats = selectedSeats.filter(s => s !== seatNumber);
            this.classList.remove('selected');
        } else {
            selectedSeats.push(seatNumber);
            this.classList.add('selected');
        }

        updateSummary();
    });
});

function updateSummary() {
    const selectedSeatsElement = document.getElementById('selected-seats');
    const totalCostElement = document.getElementById('total-cost');

    selectedSeatsElement.textContent = selectedSeats.length ? selectedSeats.join(', ') : 'None';
    totalCost = selectedSeats.length * 10; // Assume each seat costs $10
    totalCostElement.textContent = `$${totalCost}`;
}

// Login form handler
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Simulate login
        alert(`Logged in as ${username}`);
        // Redirect to dashboard or another page
        window.location.href = 'dashboard.html';
    } else {
        alert('Please enter both username and password.');
    }
});
