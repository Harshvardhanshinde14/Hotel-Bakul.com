// Define your image data here
const images = [
    { src: '/Gallary/images/hotel.jpg', alt: 'Image 1', text: 'Hotel Bakul' },
    { src: '/Gallary/images/waiting.jpg', alt: 'Image 2', text: 'Waiting Room' },
    { src: '/Gallary/images/acroom.jpg', alt: 'Image 3', text: 'AC Room' },
    { src: '/Gallary/images/nonac.jpg', alt: 'Image 4', text: 'AC Room' },
    { src: '/Gallary/images/waiting1.jpg', alt: 'Image 5', text: 'Waiting Room' },
    { src: '/Gallary/images/acbunkerroom.jpg', alt: 'Image 6', text: 'AC Bunker Room' },
    { src: '/Gallary/images/mahaluxmi.jpg', alt: 'Image 7', text: ' Mahaluxmi Temple' },
    { src: '/Gallary/images/rankala.jpg', alt: 'Image 8', text: 'Rankala' },
  
    // Add more images as needed
  ];
  
  // Function to render gallery images
  function renderGallery(images) {
    const galleryContainer = document.getElementById('galleryImages');
    galleryContainer.innerHTML = ''; // Clear previous content
    
    images.forEach(image => {
      const imageDiv = document.createElement('div');
      imageDiv.className = 'col-lg-4 col-md-6 col-sm-6 col-xs-12';
      imageDiv.innerHTML = `
        <div class="image-gallery">
          <img src="${image.src}" alt="${image.alt}" height="221" width="320">
        </div>
        <h5>${image.text}</h5>
      `;
      galleryContainer.appendChild(imageDiv);
    });
  }
  
  // Function to filter gallery images based on search input
  function searchGallery() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredImages = images.filter(image => image.text.toLowerCase().includes(searchTerm));
    renderGallery(filteredImages);
  }
  
  // Initial gallery rendering
  renderGallery(images);
  









//file to read xml data
  
document.addEventListener('DOMContentLoaded', function() {
  fetch('gallary.xml')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'text/xml');
      
      const keys = xmlDoc.querySelectorAll('key');
      
      keys.forEach(key => {
        const name = key.getAttribute('name');
        const value = key.querySelector('value').textContent;

        switch(name) {
          
          
          case 'about_title_head':
            document.querySelector('.big-title h2').textContent = value;
            break;
            case 'gallary_section_title':
            document.querySelector('.container h1').textContent = value;
            break;
           case 'feature_section_parking':
            document.querySelector('#freeparking p').textContent = value;
            break;
            case 'feature_section_wifi':
            document.querySelector('#wifi p').textContent = value;
            break;
            case 'feature_section_home':
            document.querySelector('#home p').textContent = value;
            break;
            case 'feature_section_room':
            document.querySelector('#room p').textContent = value;
            break;
         // Add more cases for other key-value pairs as needed
        }
      });
    })
    .catch(error => {
      console.error('Error fetching the XML file:', error);
      });
});