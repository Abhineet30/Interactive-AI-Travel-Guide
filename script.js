document.getElementById('travel-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const country = document.getElementById('country').value;
  const interests = Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(el => el.value);

  if (!country) {
    alert('Please select a country.');
    return;
  }
  if (interests.length === 0) {
    alert('Please select at least one interest.');
    return;
  }

  // For demonstration, we mock the AI response for the Japan food and nature 5-day itinerary
  if (country === 'Japan' && interests.includes('food') && interests.includes('nature') && interests.length === 2) {
    displayItinerary(mockJapanItinerary());
  } else {
    displayItinerary(generateMockItinerary(country, interests));
  }
});

function displayItinerary(itinerary) {
  const container = document.getElementById('itinerary-content');
  container.innerHTML = '';

  itinerary.forEach(day => {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('itinerary-day');

    const dayTitle = document.createElement('h3');
    dayTitle.textContent = day.title;
    dayDiv.appendChild(dayTitle);

    const dayDesc = document.createElement('p');
    dayDesc.textContent = day.description;
    dayDiv.appendChild(dayDesc);

    if (day.photo) {
      const photo = document.createElement('img');
      photo.src = day.photo;
      photo.alt = day.title + ' photo';
      photo.classList.add('itinerary-photo');
      dayDiv.appendChild(photo);
    }

    if (day.mapEmbed) {
      const iframe = document.createElement('iframe');
      iframe.src = day.mapEmbed;
      iframe.classList.add('map-embed');
      iframe.loading = 'lazy';
      dayDiv.appendChild(iframe);
    }

    container.appendChild(dayDiv);
  });
}

function mockJapanItinerary() {
  return [
    {
      title: 'Day 1: Tokyo - Food Exploration',
      description: 'Explore Tsukiji Outer Market and try fresh sushi. Visit Asakusa and Senso-ji Temple.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Tsukiji_Fish_Market_2010.jpg',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.123456789!2d139.7700!3d35.6655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b0b0b0b0b0b%3A0x123456789abcdef!2sTsukiji%20Outer%20Market!5e0!3m2!1sen!2sjp!4v1610000000000!5m2!1sen!2sjp'
    },
    {
      title: 'Day 2: Tokyo - Nature and Parks',
      description: 'Visit Shinjuku Gyoen National Garden and Meiji Shrine surrounded by forest.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Shinjuku_Gyoen_01.jpg',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.123456789!2d139.7100!3d35.6855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b0b0b0b0b0b%3A0xabcdef123456789!2sShinjuku%20Gyoen%20National%20Garden!5e0!3m2!1sen!2sjp!4v1610000000000!5m2!1sen!2sjp'
    },
    {
      title: 'Day 3: Hakone - Nature and Hot Springs',
      description: 'Travel to Hakone for scenic views of Mount Fuji and relax in an onsen.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Hakone_Temple.jpg',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.123456789!2d139.0200!3d35.2323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b0b0b0b0b0b%3A0xabcdefabcdef1234!2sHakone!5e0!3m2!1sen!2sjp!4v1610000000000!5m2!1sen!2sjp'
    },
    {
      title: 'Day 4: Kyoto - Food and Culture',
      description: 'Visit Nishiki Market for local food and explore historic temples like Kinkaku-ji.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Kinkaku-ji_in_Kyoto.jpg',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.123456789!2d135.7292!3d35.0394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108c0c0c0c0c0%3A0xabcdefabcdefabcd!2sKinkaku-ji!5e0!3m2!1sen!2sjp!4v1610000000000!5m2!1sen!2sjp'
    },
    {
      title: 'Day 5: Kyoto - Nature Walks',
      description: 'Walk through Arashiyama Bamboo Grove and visit the scenic Togetsukyo Bridge.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Arashiyama_Bamboo_Grove_2016.jpg',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.123456789!2d135.6700!3d35.0094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108c0c0c0c0c0%3A0xabcdefabcdefabcd!2sArashiyama%20Bamboo%20Grove!5e0!3m2!1sen!2sjp!4v1610000000000!5m2!1sen!2sjp'
    }
  ];
}

function generateMockItinerary(country, interests) {
  // Simple mock for other countries/interests
  return [
    {
      title: `Day 1: Explore ${country}`,
      description: `Enjoy your first day exploring the best spots related to your interests: ${interests.join(', ')}.`,
      photo: '',
      mapEmbed: ''
    },
    {
      title: `Day 2: Continue your adventure in ${country}`,
      description: `Discover more places that match your interests: ${interests.join(', ')}.`,
      photo: '',
      mapEmbed: ''
    },
    {
      title: `Day 3: Relax and enjoy ${country}`,
      description: `Take it easy and enjoy the local culture and scenery.`,
      photo: '',
      mapEmbed: ''
    }
  ];
}
