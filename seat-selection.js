document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat.available');
    const selectedSeats = document.getElementById('selected-seats');
    const totalCost = document.getElementById('total-cost');
    let selectedSeatNumbers = [];
    let totalPrice = 0;

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            const seatNumber = seat.getAttribute('data-seat');
            const seatPrice = 50; // Example price, you can adjust based on seat type

            if (selectedSeatNumbers.includes(seatNumber)) {
                selectedSeatNumbers = selectedSeatNumbers.filter(num => num !== seatNumber);
                totalPrice -= seatPrice;
                seat.classList.remove('selected');
            } else {
                selectedSeatNumbers.push(seatNumber);
                totalPrice += seatPrice;
                seat.classList.add('selected');
            }

            selectedSeats.textContent = selectedSeatNumbers.join(', ') || 'None';
            totalCost.textContent = `$${totalPrice}`;
        });
    });

    document.getElementById('next-button').addEventListener('click', () => {
        // Proceed to passenger details page
        window.location.href = 'passenger-details.html';
    });
});
