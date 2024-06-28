//Hamburger Menu for responsiveness
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const menuOverlay = document.getElementById('menu-overlay');

  menuIcon.addEventListener('click', () => {
      menuOverlay.classList.add('open');
  });

  closeIcon.addEventListener('click', () => {
      menuOverlay.classList.remove('open');
  });

  window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
          menuOverlay.classList.remove('open');
      }
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
              name: 'Pixel.Palette',
              date: 'March 22, 2024',
              location: '2nd Ave Loft, SK',
              url: 'https://example.com/past-event-1'
            },
            {
              image: '../img/html-day.png',
              name: 'Potluck & Trivia Night',
              date: 'January 19, 2024',
              location: 'THORV 110, Thorvalson Building',
              url: 'https://example.com/past-event-2'
            },
            {
            image: '../img/html-day.png',
            name: 'Connect Cafe',
            date: 'November 27, 2023',
            location: 'THORV 205A, Thorvalson Building',
            url: 'https://example.com/past-event-2'
            },
            {
                image: '../img/html-day.png',
                name: 'Halloween Party',
                date: 'October 26, 2023',
                location: 'Spinks 3rd Floor, Spinks Addition',
                url: 'https://example.com/past-event-2'
            },
            {
                image: '../img/html-day.png',
                name: 'Connect Cafe',
                date: 'November 27, 2023',
                location: 'THORV 205A, Thorvalson Building',
                url: 'https://example.com/past-event-2'
                },
            {
                image: '../img/html-day.png',
                name: 'CSISP Intern Panel',
                date: 'September 27, 2023',
                location: 'Room 18, Edwards Business School',
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
