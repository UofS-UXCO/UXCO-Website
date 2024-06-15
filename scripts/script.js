document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.hamburger-menu');
  var mobileMenu = document.querySelector('.mobile-menu');

  hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });
});

//Current event display function
document.addEventListener("DOMContentLoaded", () => {
  const eventList = document.getElementById("event-list");

  // Sample data for events
  const events = [
      {
          image: '../img/html-day.png',
          name: 'HTML Day',
          date: 'July 13, 2024',
          location: 'Presidental Murray Park'
      },
      {
        image: '../img/html-day.png',
        name: 'HTML Day',
        date: 'July 13, 2024',
        location: 'Presidental Murray Park'
      },
      {
        image: '../img/html-day.png',
        name: 'HTML Day',
        date: 'July 13, 2024',
        location: 'Presidental Murray Park'
      },
  ];

  // Function to display events
  function displayEvents(events) {
      if (events.length === 0) {
          eventList.innerHTML = "<p>Woo, new event are soon to be announced</p>";
      } else {
          events.forEach(event => {
              const eventItem = document.createElement("div");
              eventItem.classList.add("event-item");

              eventItem.innerHTML = `
                  <img src="${event.image}" alt="${event.name}">
                  <h2>${event.name}</h2>
                  <p>Date: ${event.date}</p>
                  <p>Location: ${event.location}</p>
              `;

              eventList.appendChild(eventItem);
          });
      }
  }

  // Display the events
  displayEvents(events);
});
