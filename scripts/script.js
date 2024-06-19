//Hamburger Menu for responsiveness
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('show');
  });
});

/* ************************* */
//Event Card Handling Function
document.addEventListener("DOMContentLoaded", () => {
  const eventList = document.getElementById("event-list");
  const pastEventList2023 = document.getElementById("year-2023-2024");
  const pastEventList2022 = document.getElementById("year-2022-2023");

  //Current Even Data.
  //Create new component to add new event card.
  const currentEvents = [
      {
          image: '../img/html-day.png',
          name: 'Design Workshop',
          date: 'July 15, 2024',
          location: 'New York, NY',
          url: 'https://example.com/design-workshop'
      },
  ];

  //Past Even Data.
  //Create new component to add new event card in specific year (e.g., year-2023-2024.)
  const pastEvents = {
      //Year 2023-2024
      "year-2023-2024": [
          {
              image: '../img/html-day.png',
              name: 'Past Event 1',
              date: 'March 10, 2024',
              location: 'Chicago, IL',
              url: 'https://example.com/past-event-1'
          },
          {
              image: '../img/html-day.png',
              name: 'Past Event 2',
              date: 'December 5, 2023',
              location: 'San Francisco, CA',
              url: 'https://example.com/past-event-2'
          }
      ],

      //Year 2022-2023
      "year-2022-2023": [
      {
        image: '../img/html-day.png',
        name: 'Past Event 3',
        date: 'June 20, 2023',
        location: 'Boston, MA',
        url: 'https://example.com/past-event-3'
      },
      {
        image: '../img/html-day.png',
        name: 'Past Event 3',
        date: 'June 20, 2023',
        location: 'Boston, MA',
        url: 'https://example.com/past-event-3'
      },
      {
        image: '../img/html-day.png',
        name: 'Past Event 3',
        date: 'June 20, 2023',
        location: 'Boston, MA',
        url: 'https://example.com/past-event-3'
      },
      {
        image: '../img/html-day.png',
        name: 'Past Event 3',
        date: 'June 20, 2023',
        location: 'Boston, MA',
        url: 'https://example.com/past-event-3'
      },
    ]
  };

  // Function to display events
  function displayEvents(events, container) {
      if (events.length === 0) {
          container.innerHTML = "<p>Woo, new event are soon to be announced</p>";
      } else {
          events.forEach(event => {
              const eventItem = document.createElement("div");
              eventItem.classList.add("event-item");

              eventItem.innerHTML = `
                  <a href="${event.url}" target="_blank">
                      <img src="${event.image}" alt="${event.name}">
                  </a>
                  <a href="${event.url}" target="_blank">
                      <h2>${event.name}</h2>
                  </a>
                  <p>Date: ${event.date}</p>
                  <p>Location: ${event.location}</p>
              `;

              container.appendChild(eventItem);
          });
      }
  }

  // Call to display the current events
  displayEvents(currentEvents, eventList);

  // Call to display the past events by year
  Object.keys(pastEvents).forEach(year => {
      const container = document.getElementById(year);
      displayEvents(pastEvents[year], container);
  });
});
