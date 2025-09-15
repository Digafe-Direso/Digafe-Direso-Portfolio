// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

  // Animate when page loads
    const skills = document.querySelectorAll('.progress');
    const percents = document.querySelectorAll('.percent');

    function animateSkills() {
      skills.forEach((bar, i) => {
        const target = bar.getAttribute('data-percent');
        bar.style.width = target + '%';

        let count = 0;
        const interval = setInterval(() => {
          if (count >= target) {
            clearInterval(interval);
          } else {
            count++;
            percents[i].innerText = count + '%';
          }
        }, 20); // speed of counting
      });
    }

    window.addEventListener('load', animateSkills);

    // recent-work certeficate
    const slides = document.querySelectorAll('.slides img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  let currentIndex = 0;

  // Automatic sliding with fade
  function showNextSlide() {
    const current = slides[currentIndex];
    current.classList.remove('active');
    current.classList.add('prev');

    currentIndex = (currentIndex + 1) % slides.length;
    const next = slides[currentIndex];
    next.classList.add('active');

    setTimeout(() => {
      current.classList.remove('prev');
    }, 1000);
  }

  setInterval(showNextSlide, 3000);

  // Click to open lightbox
  slides.forEach(slide => {
    slide.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = slide.src;
    });
  });

  // Close lightbox on click
  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });