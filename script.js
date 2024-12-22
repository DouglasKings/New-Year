// Selecting the HTML elements were the countdown values will be displayed
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Defining the target date for the countdown
const newYears = "January 1 2025";

// Function to format time values to always display in two digits
function formatTime(time) {
    return time < 10 ? `0${time}` : time; // if time is less than 10, prepend a '0' 
}

// Countdown function that calculates the time remaining until the target date
function countdown() {
    const newYearsDate = new Date(newYears); // Converts the target date string to a date object
    const currentDate = new Date(); // Get the current date and time

    // Calculate the difference in seconds between the target date and current date
    const seconds = (newYearsDate - currentDate) / 1000;

    // Calculate the ramaining days, hours, minutes and seconds
    const days = Math.floor(seconds / 3600 / 24); // Total days remaining
    const hours = Math.floor(seconds / 3600 % 24); // Remaining hours in the current day
    const mins = Math.floor(seconds / 60) % 60; // Remaining minutes in the current hour
    const secondsLeft = Math.floor(seconds) % 60; // Remaining seconds in the current minute

    // Updating the inner HTML of the elements with the calculated values
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(secondsLeft);

    // Check if the countdown has reached zero
    if (seconds <= 0) {
        clearInterval(interval); // Stop the countdown
        document.getElementById("blast-off-message").innerHTML = "Happy New Year!";

        // Add the celebration image
        const imageElement = document.createElement('img');
        imageElement.src = 'F:\Douglas Kings\Software Development\GitHub\Javascript\Projects\Count Down Blast Off New Years\assets\img\New Year.jpg'; 
        imageElement.alt = 'New Year Celebration';
        imageElement.style.width = '300px'; // Set the width as needed
        imageElement.style.height = 'auto'; // Maintain aspect ratio
        document.getElementById("celebration-image").appendChild(imageElement);
    }
}

// Initial call to display the countdown immediately when the page loads
countdown();

// Set an interval to update the countdown every second (1000 milliseconds)
const interval = setInterval(countdown, 1000);

