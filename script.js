document.addEventListener('DOMContentLoaded', function() {
    var images = [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg',
      '9.jpg',
      '10.jpg',
      '11.jpg',
      '12.jpg',
      '13.jpg',
      '14.jpg',
      '15.jpg',
      '16.jpg',
      '17.jpg',
      '18.jpg',
      '19.jpg',
      '20.jpg',
      '21.jpg',
      '22.jpg',
      '23.jpg',
      '24.jpg',
      '25.jpg',
      '26.jpg',
      '27.jpg',
      '28.jpg',
      '29.jpg',
      '30.jpg',
      '31.jpg',
      '32.jpg',
      '33.jpg',
      '34.jpg',
      '35.jpg',
      '36.jpg',
      '37.jpg',
      '38.jpg',
      '39.jpg',
      '40.jpg',

      // Add paths to your images here
    ];
  
    var imageElement = document.getElementById('randomImage');
  
    function getRandomImage() {
      var randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    }
  
    function switchImage() {
      var randomImage = getRandomImage();
      imageElement.src = randomImage;
    }
  
    switchImage(); // Initially switch the image
  
    setInterval(switchImage, 300); // Switch image every second
  });


  document.addEventListener('DOMContentLoaded', function() {
    // Triggering the animation by adding a class
    document.querySelector('.container').classList.add('fade-in');
    document.querySelectorAll('.header, .image-container').forEach(function(element) {
      element.classList.add('fade-in-delayed');
    });
  });

  
  