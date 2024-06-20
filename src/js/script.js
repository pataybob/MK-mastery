document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const photoContainer = document.querySelector('.photo');
  const items = document.querySelectorAll('.slider__item');
  let currentIndex = 0;

  function updateSlider() {
      const offset = -currentIndex * 100;
      photoContainer.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener('click', function() {
      if (currentIndex > 0) {
          currentIndex--;
          updateSlider();
      }
  });

  nextButton.addEventListener('click', function() {
      if (currentIndex < items.length - 1) {
          currentIndex++;
          updateSlider();
      }
  });

  updateSlider(); 
});

document.addEventListener("DOMContentLoaded", function() {
  let accHeaders = document.getElementsByClassName("accordion-header");

  for (let i = 0; i < accHeaders.length; i++) {
    accHeaders[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      let icon = this.querySelector(".accordion-icon");

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.classList.remove("active");
        icon.classList.remove("rotate");
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.classList.add("active");
        icon.classList.add("rotate");
      }
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const products = document.querySelectorAll('.product');
  const popup = document.getElementById('popup');
  const popupDetails = document.getElementById('popup-details');
  const closePopup = document.getElementById('close-popup');

  products.forEach(product => {
      product.addEventListener('click', function() {
          const productId = this.dataset.id;
          const productDetails = document.getElementById(`product-${productId}`);

          if (productDetails) {
              popupDetails.innerHTML = productDetails.innerHTML;
              popup.classList.add('visible');
          }
      });
  });

  closePopup.addEventListener('click', function() {
      popup.classList.remove('visible');
      setTimeout(() => {
          popupDetails.innerHTML = '';
      }, 500);
  });

  window.addEventListener('click', function(event) {
      if (event.target == popup) {
          popup.classList.remove('visible');
          setTimeout(() => {
              popupDetails.innerHTML = '';
          }, 500);
      }
  });
});


