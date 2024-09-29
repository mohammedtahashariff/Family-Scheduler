const monthYearElement = document.getElementById('month-year');
const daysElement = document.getElementById('days');
const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');
const dateDisplay = document.getElementById('date-display'); // Display today's date

let currentDate = new Date();
let events = [];

// Function to render the calendar                                                                                                          
function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date(); // Get today's date
    
    // Display the month and year
    monthYearElement.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

    daysElement.innerHTML = '';
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Add empty days for the previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
        daysElement.innerHTML += '<div></div>';
    }

    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;

        // Check if this day is today
        if (
            year === today.getFullYear() &&
            month === today.getMonth() &&
            day === today.getDate()
        ) {
            dayElement.classList.add('today'); // Add 'today' class
        }

        daysElement.appendChild(dayElement);
    }

    // Display today's full date
    dateDisplay.textContent = `Today's date: ${today.toDateString()}`;
}

// Function to handle event form submission
eventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;

    events.push({ name: eventName, date: eventDate });
    updateEventList();
    eventForm.reset();
});

// Function to update the event list
function updateEventList() {
    eventList.innerHTML = '';
    events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.textContent = `${event.name} - ${new Date(event.date).toLocaleDateString()}`;
        eventList.appendChild(listItem);
    });
}

// Navigation buttons
document.getElementById('prev').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById('next').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Initial render
renderCalendar();
