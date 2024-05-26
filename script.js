document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#navbar a");

  // Function to determine which section is currently in view
  function highlightNavLink() {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      // Check if the top of the section is in the viewport
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.id;
      }
    });

    // Remove 'active' class from all navigation links
    navLinks.forEach(link => {
      link.classList.remove("active");
    });

    // Add 'active' class to the corresponding navigation link
    const activeNavLink = document.querySelector(`#navbar a[href="#${currentSection}"]`);
    if (activeNavLink) {
      activeNavLink.classList.add("active");
    }
  }

  // Call the function initially to set the active state based on the scroll position
  highlightNavLink();

  // Listen for scroll events and update the active navigation link
  window.addEventListener("scroll", highlightNavLink);
});


document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkModeToggle');

  darkModeToggle.addEventListener('change', function() {
    if (darkModeToggle.checked) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  });
});



        document.addEventListener("DOMContentLoaded", function() {
            const progressBars = document.querySelectorAll('.progress-bar');
          
            // Intersection Observer options
            const observerOptions = {
              threshold: 0.5 // Trigger when 50% of the target is in viewport
            };
          
            // Create Intersection Observer instance
            const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  const progressBar = entry.target;
                  const progressText = progressBar.querySelector('.prog-text');
                  const progressSpan = progressBar.querySelector('.progress span');
                  const targetWidth = parseInt(progressText.textContent); // Get target width from progress text
          
                  animateProgressBar(progressSpan, targetWidth);
                } else {
                  const progressBar = entry.target;
                  const progressSpan = progressBar.querySelector('.progress span');
          
                  // Reset progress to 0% width when scrolling out of viewport
                  animateProgressBar(progressSpan, 0);
                }
              });
            }, observerOptions);
          
            // Observe each progress bar
            progressBars.forEach(progressBar => {
              observer.observe(progressBar);
            });
          
            function animateProgressBar(progressSpan, targetWidth) {
              let currentWidth = parseFloat(progressSpan.style.width) || 0;
              const animationDuration = 1000; // Animation duration in milliseconds
          
              const startTime = performance.now();
          
              function updateProgress(timestamp) {
                const elapsedTime = timestamp - startTime;
          
                if (targetWidth === 0) {
                  // Reverse animation (shrink back to 0%)
                  currentWidth = (1 - elapsedTime / animationDuration) * currentWidth;
                } else {
                  // Forward animation (expand to target width)
                  currentWidth = (elapsedTime / animationDuration) * targetWidth;
                }
          
                // Update the width of the progress span
                progressSpan.style.width = Math.min(currentWidth, targetWidth) + '%';
          
                // Continue animation until target width is reached or progress shrinks to 0%
                if ((targetWidth > 0 && currentWidth < targetWidth) || (targetWidth === 0 && currentWidth > 0)) {
                  requestAnimationFrame(updateProgress);
                }
              }
          
              // Start the animation loop
              requestAnimationFrame(updateProgress);
            }
          });


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_f4fxwyg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


//back to the top

document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById('backToTopBtn');

  // When the user scrolls down 20px from the top, show the button
  window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          button.style.display = "block";
      } else {
          button.style.display = "none";
      }
  };

  // Smooth scroll to top when button is clicked
  button.addEventListener("click", function() {
      scrollToTop();
  });

  function scrollToTop() {
      // Scroll to top smoothly
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  }
});
