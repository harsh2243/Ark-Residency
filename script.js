const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const bookingForm = document.getElementById('bookingForm');
const bookingMessage = document.getElementById('bookingMessage');
const enquiryForm = document.getElementById('enquiryForm');
const enquiryMessage = document.getElementById('enquiryMessage');
const roomEnquiryForm = document.getElementById('roomEnquiryForm');
const roomEnquiryMessage = document.getElementById('roomEnquiryMessage');
const contactForm = document.getElementById('contactForm');
const contactMessage = document.getElementById('contactMessage');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const shouldOpen = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    menuButton.setAttribute('aria-expanded', String(shouldOpen));
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

if (bookingForm && bookingMessage) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    bookingMessage.textContent = 'Booking search submitted. A reservation team member can follow up with options.';
    bookingMessage.classList.remove('hidden');
  });
}

if (enquiryForm && enquiryMessage) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    enquiryMessage.textContent = 'Thanks. Your enquiry has been sent to the hotel team.';
    enquiryMessage.classList.remove('hidden');
  });
}

if (roomEnquiryForm && roomEnquiryMessage) {
  roomEnquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    roomEnquiryMessage.textContent = 'Your room enquiry has been submitted successfully.';
    roomEnquiryMessage.classList.remove('hidden');
  });
}

if (contactForm && contactMessage) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    contactMessage.textContent = 'Thanks. Your message has been sent to the Ark Residency team.';
    contactMessage.classList.remove('hidden');
  });
}

const roomData = {
  'tower-deluxe': {
    title: 'Tower Deluxe Room',
    label: 'Featured Room',
    price: '$120',
    rating: '4.8 Excellent',
    size: '50 sqm',
    bed: '1 King Bed',
    ideal: 'Ideal for solo travelers and couples looking for a calm, well-priced stay with a city-facing room.',
    subtitle: 'Spacious comfort with modern amenities and a clear, practical layout for short city visits.',
    hero: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=80',
    thumb1: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1200&q=80',
    thumb2: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    thumb3: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80',
  },
  'executive-suite': {
    title: 'Executive Suite',
    label: 'Popular Room',
    price: '$170',
    rating: '4.9 Superb',
    size: '55 sqm',
    bed: '1 King Bed',
    ideal: 'Ideal for business travelers who want a separate working area, more space, and a polished suite setup.',
    subtitle: 'Built for longer visits with workspace comfort, quiet interiors, and extra room to settle in.',
    hero: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80',
    thumb1: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    thumb2: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80',
    thumb3: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
  },
  'presidential-suite': {
    title: 'Presidential Suite',
    label: 'Suite',
    price: '$220',
    rating: '5.0 Outstanding',
    size: '80 sqm',
    bed: '2 Beds',
    ideal: 'Ideal for families, VIP guests, and special stays where generous space and premium service matter most.',
    subtitle: 'The most spacious option in the hotel with lounge-style comfort, premium furnishings, and a refined finish.',
    hero: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    thumb1: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    thumb2: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80',
    thumb3: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  },
};

const roomHero = document.getElementById('roomHero');
const roomThumb1 = document.getElementById('roomThumb1');
const roomThumb2 = document.getElementById('roomThumb2');
const roomThumb3 = document.getElementById('roomThumb3');
const roomLabel = document.getElementById('roomLabel');
const roomTitle = document.getElementById('roomTitle');
const roomSubtitle = document.getElementById('roomSubtitle');
const roomPrice = document.getElementById('roomPrice');
const roomRating = document.getElementById('roomRating');
const roomSize = document.getElementById('roomSize');
const roomBed = document.getElementById('roomBed');
const roomIdeal = document.getElementById('roomIdeal');

if (roomHero && roomTitle) {
  const roomKey = new URLSearchParams(window.location.search).get('room') || 'tower-deluxe';
  const room = roomData[roomKey] || roomData['tower-deluxe'];

  roomHero.style.backgroundImage = `url('${room.hero}')`;
  roomThumb1.style.backgroundImage = `url('${room.hero}')`;
  roomThumb2.style.backgroundImage = `url('${room.thumb1}')`;
  roomThumb3.style.backgroundImage = `url('${room.thumb2}')`;
  roomLabel.textContent = room.label;
  roomTitle.textContent = room.title;
  roomSubtitle.textContent = room.subtitle;
  roomPrice.textContent = room.price;
  roomRating.textContent = room.rating;
  roomSize.textContent = room.size;
  roomBed.textContent = room.bed;
  roomIdeal.textContent = room.ideal;

  document.title = `${room.title} | Ark Residency`;
}

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => observer.observe(element));