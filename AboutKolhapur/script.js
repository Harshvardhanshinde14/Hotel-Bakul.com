
document.addEventListener('DOMContentLoaded', function() {
    fetch('aboutkolhapur.xml')
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
              case 'about_kolhapur_section_title':
              document.querySelector('.sec-title h2').textContent = value;
              break;
              case 'image_name_1':
              document.querySelector('#image1 h3 a').textContent = value;
              break;
              case 'image_name_2':
              document.querySelector('#image2 h3').textContent = value;
              break;
              case 'image_name_3':
              document.querySelector('#image3 h3').textContent = value;
              break;
              case 'image_name_4':
              document.querySelector('#image4 h3').textContent = value;
              break;
              case 'image_name_5':
              document.querySelector('#image5 h3').textContent = value;
              break;
              case 'image_name_6':
              document.querySelector('#image6 h3').textContent = value;
              break;
              case 'image_name_7':
              document.querySelector('#image7 h3').textContent = value;
              break;
              case 'image_name_8':
              document.querySelector('#image8 h3').textContent = value;
              break;
              case 'image_name_9':
              document.querySelector('#image9 h3').textContent = value;
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