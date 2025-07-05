const tabs_0 = document.querySelectorAll(".new-tab-card-0");
const innerTab2_0 = document.getElementsByClassName("inner-tab-2-0")[0];
const contents_0 = document.querySelectorAll(".new-tab-content-0");

tabs_0.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs_0.forEach((t) => t.classList.remove("active"));
    contents_0.forEach((c) => c.classList.add("d-none"));

    tab.classList.add("active");

    document
      .getElementById(tab.getAttribute("data-tab"))
      .classList.remove("d-none");
    if (index === 1 && innerTab2_0) {
      innerTab2_0.style.backgroundColor = "black"; // Apply black background to innerTab2
    } else if (innerTab2_0) {
      innerTab2_0.style.backgroundColor = ""; // Reset background color for other tabs
    }
  });
});

const tabs = document.querySelectorAll(".new-tab-card");
const innerTab2 = document.getElementsByClassName("inner-tab-2")[0];
const contents = document.querySelectorAll(".new-tab-content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.add("d-none"));

    tab.classList.add("active");

    document
      .getElementById(tab.getAttribute("data-tab"))
      .classList.remove("d-none");
    if (index === 1 && innerTab2) {
      innerTab2.style.backgroundColor = "black"; // Apply black background to innerTab2
    } else if (innerTab2) {
      innerTab2.style.backgroundColor = ""; // Reset background color for other tabs
    }
  });
});

//Projects Swiper
$(document).ready(function () {
  const industrySwiper = new Swiper(".projects-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".projects-swiper .swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1660: { slidesPerView: 4 },
    },
  });

  // Professionals swiper arrows now use standard CSS positioning like all other swipers

  // Professionals Swiper
  const professionalsSwiper = new Swiper(".professionals-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".professionals-swiper .swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".professionals-custom-next",
      prevEl: ".professionals-custom-prev",
    },
    on: {
      slideChange: function () {
        // Get the active slide index (0-based)
        const activeIndex = this.realIndex;
        const blueContainer = document.querySelector('.certified-professionals-section');
        
        if (blueContainer) {
          // Disable transitions completely for instant change
          blueContainer.style.transition = 'none';
          
          // Get screen width for responsive behavior
          const screenWidth = window.innerWidth;
          
          // Apply sizes immediately based on slide and screen size
          if (activeIndex === 2) { // Slide 3 - Innovation Certification
            if (screenWidth <= 768) {
              // Mobile
              blueContainer.style.width = '100%';
              blueContainer.style.height = 'auto';
              blueContainer.style.minHeight = '2000px';
              blueContainer.style.maxHeight = 'none';
            } else if (screenWidth <= 1024) {
              // Tablet
              blueContainer.style.width = '95%';
              blueContainer.style.height = '580px';
              blueContainer.style.minHeight = '580px';
              blueContainer.style.maxHeight = '580px';
            } else if (screenWidth <= 1440) {
              // Large tablet/small desktop
              blueContainer.style.width = '1400px';
              blueContainer.style.height = '580px';
              blueContainer.style.minHeight = '580px';
              blueContainer.style.maxHeight = '580px';
            } else {
              // Desktop
              blueContainer.style.width = '1600px';
              blueContainer.style.height = '580px';
              blueContainer.style.minHeight = '580px';
              blueContainer.style.maxHeight = '580px';
            }
          } else if (activeIndex === 3) { // Slide 4 - Grassroot Innovators
            if (screenWidth <= 768) {
              // Mobile
              blueContainer.style.width = '100%';
              blueContainer.style.height = 'auto';
              blueContainer.style.minHeight = '2000px';
              blueContainer.style.maxHeight = 'none';
            } else if (screenWidth <= 1024) {
              // Tablet
              blueContainer.style.width = '95%';
              blueContainer.style.height = '580px';
              blueContainer.style.minHeight = '580px';
              blueContainer.style.maxHeight = '580px';
            } else if (screenWidth <= 1440) {
              // Large tablet/small desktop
              blueContainer.style.width = '1400px';
              blueContainer.style.height = '580px';
              blueContainer.style.minHeight = '580px';
              blueContainer.style.maxHeight = '580px';
            } else {
              // Desktop
              blueContainer.style.width = '1600px';
              blueContainer.style.height = '580px';
              blueContainer.style.minHeight = '580px';
              blueContainer.style.maxHeight = '580px';
            }
          } else { // Slides 1 & 2 - Uniform size with other slides
            if (screenWidth <= 768) {
              // Mobile
              blueContainer.style.width = '100%';
              blueContainer.style.height = 'auto';
              blueContainer.style.minHeight = '2000px';
              blueContainer.style.maxHeight = 'none';
            } else if (screenWidth <= 1024) {
              // Tablet
              blueContainer.style.width = '95%';
              blueContainer.style.height = '580px';
              blueContainer.style.minHeight = '580px';
              blueContainer.style.maxHeight = '580px';
            } else if (screenWidth <= 1440) {
              // Large tablet/small desktop
              blueContainer.style.width = '1400px';
              blueContainer.style.height = '580px';
              blueContainer.style.minHeight = '580px';
              blueContainer.style.maxHeight = '580px';
            } else {
              // Desktop
              blueContainer.style.width = '1600px';
              blueContainer.style.height = '580px';
              blueContainer.style.minHeight = '580px';
              blueContainer.style.maxHeight = '580px';
            }
          }
          
          // Arrows now use standard CSS positioning like other swipers
        }
      },
      init: function () {
        // Set initial size for first slide with responsive behavior
        const blueContainer = document.querySelector('.certified-professionals-section');
        if (blueContainer) {
          blueContainer.style.transition = 'none';
          const screenWidth = window.innerWidth;
          
          if (screenWidth <= 768) {
            // Mobile
            blueContainer.style.width = '100%';
            blueContainer.style.height = 'auto';
            blueContainer.style.minHeight = '2000px';
            blueContainer.style.maxHeight = 'none';
          } else if (screenWidth <= 1024) {
            // Tablet
            blueContainer.style.width = '95%';
            blueContainer.style.height = '580px';
            blueContainer.style.minHeight = '580px';
            blueContainer.style.maxHeight = '580px';
          } else if (screenWidth <= 1440) {
            // Large tablet/small desktop
            blueContainer.style.width = '1400px';
            blueContainer.style.height = '580px';
            blueContainer.style.minHeight = '580px';
            blueContainer.style.maxHeight = '580px';
          } else {
            // Desktop
            blueContainer.style.width = '1600px';
            blueContainer.style.height = '580px';
            blueContainer.style.minHeight = '580px';
            blueContainer.style.maxHeight = '580px';
          }
          
          // Arrows use standard CSS positioning like other swipers
        }
      }
    }
  });
  
  // Professionals swiper arrows use standard CSS positioning - no dynamic positioning needed
  
});

    // Tables are hidden on mobile via CSS - no JavaScript needed

// Counter Animation Function
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const range = target - start;
  const startTime = performance.now();
  const suffix = element.getAttribute('data-suffix') || '';
  
  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease out animation
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = start + (range * easeOut);
    
    // Format number based on target
    let displayValue;
    if (target < 1) {
      displayValue = current.toFixed(1);
    } else if (target >= 1000) {
      displayValue = Math.floor(current).toLocaleString();
    } else {
      displayValue = Math.floor(current);
    }
    
    element.textContent = displayValue + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      // Format the final value as well
      let finalValue;
      if (target < 1) {
        finalValue = target.toFixed(1);
      } else if (target >= 1000) {
        finalValue = Math.floor(target).toLocaleString();
      } else {
        finalValue = Math.floor(target);
      }
      element.textContent = finalValue + suffix;
    }
  }
  
  requestAnimationFrame(step);
}

// Initialize counter animations when sections come into view on scroll
function initCounterAnimations() {
  const observerOptions = {
    threshold: 0.3, // Trigger when 30% of section is visible
    rootMargin: '0px 0px -50px 0px' // Start animation when approaching section
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.new-stat-number[data-target], .stat-number[data-target]');
        
        counters.forEach(counter => {
          // Reset counter to 0 and start animation
          counter.textContent = '0';
          const target = parseFloat(counter.getAttribute('data-target'));
          animateCounter(counter, target);
        });
      }
    });
  }, observerOptions);

  // Wait for DOM to be fully loaded
  setTimeout(() => {
    // Observe both performance sections
    const newPerformanceSection = document.querySelector('.new-performance-section');
    const oldPerformanceSection = document.querySelector('.performance-section-container-old');
    
    if (newPerformanceSection) {
      observer.observe(newPerformanceSection);
    }
    if (oldPerformanceSection) {
      observer.observe(oldPerformanceSection);
    }

    // Also look for the main performance section container
    const performanceSection = document.querySelector('.performance-section-container');
    if (performanceSection) {
      observer.observe(performanceSection);
    }
  }, 100);
}

// Fallback scroll listener for more reliable animation triggering
function checkScrollPosition() {
  const sections = [
    document.querySelector('.new-performance-section'),
    document.querySelector('.performance-section-container-old'),
    document.querySelector('.performance-section-container')
  ];

  sections.forEach(section => {
    if (section) {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is in viewport (with some buffer)
      if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
        const counters = section.querySelectorAll('.new-stat-number[data-target], .stat-number[data-target]');
        
        counters.forEach(counter => {
          // Reset counter to 0 and start animation
          counter.textContent = '0';
          const target = parseFloat(counter.getAttribute('data-target'));
          animateCounter(counter, target);
        });
      }
    }
  });
}

// Initialize animations when DOM is loaded and also on window load
document.addEventListener('DOMContentLoaded', initCounterAnimations);
window.addEventListener('load', initCounterAnimations);

// Add throttled scroll listener as backup
let scrollTimeout;
window.addEventListener('scroll', () => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  scrollTimeout = setTimeout(checkScrollPosition, 100);
});

// Also check on page load in case section is already visible
window.addEventListener('load', checkScrollPosition);

// Product Innovations Swiper - 4 at a time, grouped carousel effect
const productInnovationsSwiper = new Swiper('.product-innovations-swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  speed: 600, 
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
  navigation: false,
  pagination: false,
  effect: 'slide', 
});


// const innovationLabsSwiper = new Swiper('.innovation-labs-swiper', {
//   slidesPerView: 4,
//   slidesPerGroup: 4,
//   loop: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   allowTouchMove: false,
//   navigation: false,
//   pagination: false,
//   effect: 'slide',
// });
