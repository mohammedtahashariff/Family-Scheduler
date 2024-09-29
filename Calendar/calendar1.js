// calendar.js

// Check if the browser supports notifications
if ("Notification" in window) {
    // Request permission from the user
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
      }
    });
  }
  
  // Function to schedule notifications
  function scheduleNotification(eventDate) {
    const today = new Date();
    const eventDay = new Date(eventDate);
    
    // Calculate the difference in milliseconds
    const msInDay = 24 * 60 * 60 * 1000;
    const diffInMs = eventDay - today;
  
    // Notify 10 days before the event
    const notify10DaysBefore = diffInMs - 10 * msInDay;
    if (notify10DaysBefore > 0) {
      setTimeout(() => {
        showNotification("Upcoming Event!", "Your event is 10 days away!");
      }, notify10DaysBefore);
    }
  
    // Notify 2 days before the event
    const notify2DaysBefore = diffInMs - 2 * msInDay;
    if (notify2DaysBefore > 0) {
      setTimeout(() => {
        showNotification("Upcoming Event!", "Your event is 2 days away!");
      }, notify2DaysBefore);
    }
  }
  
  // Function to show the notification
  function showNotification(title, message) {
    if (Notification.permission === "granted") {
      const notification = new Notification(title, {
        body: message,
        icon: "calendar-icon.png", // Add an icon if needed
      });
    }
  }
  
  // Sample usage: Add an event and mark a date
  document.getElementById("calendar").addEventListener("click", function() {
    // Example: Date of the event (change this to dynamic user input)
    const eventDate = "2024-10-10"; // Format: YYYY-MM-DD
    
    // Schedule notifications
    scheduleNotification(eventDate);
  });
  