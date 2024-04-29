document.addEventListener('DOMContentLoaded', function() {
    fetch('room.xml')
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