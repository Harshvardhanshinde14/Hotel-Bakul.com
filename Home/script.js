 document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const slides = document.querySelectorAll('.slider-image');
    let slideIndex = 0;

    function showSlide(index) {
        
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        
        slides[index].style.display = 'block';
    }

    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0; // Wrap around to the first slide
        }
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.length - 1; // Wrap around to the last slide
        }
        showSlide(slideIndex);
    }

    // Show the initial slide
    showSlide(slideIndex);

    // Add event listeners for prev and next buttons
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
});






document.addEventListener('DOMContentLoaded', function() {
  fetch('Home/index.xml')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'text/xml');
      
      const keys = xmlDoc.querySelectorAll('key');
      
      keys.forEach(key => {
        const name = key.getAttribute('name');
        const value = key.querySelector('value').textContent;

        switch(name) {
            case 'heading_address':
            document.querySelector('.head_address').textContent = value;
            break;
            
            case 'home_section_title':
            document.querySelector('.sec1 h2').textContent = value;
            break;
            case 'hotel_bakul_information':
              document.querySelector('.sec2 p').textContent = value;
              break;
              case 'service_section_title':
              document.querySelector('.service_heading h2').textContent = value;
              break;
              case 'service1_title':
              document.querySelector('#content1 h3').textContent = value;
              break;
              case 'service1_description':
              document.querySelector('#content1 p').textContent = value;
              break;
              case 'service2_title':
              document.querySelector('#content2 h3').textContent = value;
              break;
              case 'service2_description':
              document.querySelector('#content2 p').textContent = value;
              break;
              case 'service3_title':
                document.querySelector('#content3 h3').textContent = value;
                break;
                case 'service3_description':
              document.querySelector('#content3 p').textContent = value;
              break;
              case 'rooms_section_title':
              document.querySelector('.sec3 h1').textContent = value;
              break;
              case 'room1_title':
              document.querySelector('#room1 h3').textContent = value;
              break;
              case 'room1_description':
              document.querySelector('#value1 ').textContent = value;
              break;
              
              case 'room2_title':
              document.querySelector('#room2 h3').textContent = value;
              break;
              case 'room2_description':
              document.querySelector('#value2 ').textContent = value;
              break;
              case 'room3_title':
              document.querySelector('#room3 h3').textContent = value;
              break;
              case 'room3_description':
              document.querySelector('#value3 ').textContent = value;
              break;
              case 'room4_title':
              document.querySelector('#room4 h3').textContent = value;
              break;
              case 'room4_description':
              document.querySelector('#value4 ').textContent = value;
              break;
              case 'contact_section_title':
              document.querySelector('.contact h3').textContent = value;
              break;
              case 'contact_address':
              document.querySelector('.contact p').textContent = value;
              break;
              case 'contact_address1':
              document.querySelector('#address h3').textContent = value;
              break;
              case 'contact_address2':
              document.querySelector('#address p').textContent = value;
              break;
              case 'contact_phone1':
              document.querySelector('#phone h3').textContent = value;
              break;
              case 'contact_phone2':
              document.querySelector('#phone p').textContent = value;
              break;
              case 'contact_email1':
              document.querySelector('#mail h3').textContent = value;
              break;
              case 'contact_email2':
              document.querySelector('#mail p').textContent = value;
              break;
              case 'contact_hours1':
              document.querySelector('#time h3').textContent = value;
              break;
              case 'contact_hours2':
              document.querySelector('#time p').textContent = value;
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






 





