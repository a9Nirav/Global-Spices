(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);
  };
  spinner();


  // Initiate the wowjs
  new WOW().init();


  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.sticky-top').addClass('shadow-sm').css('top', '0px');
    } else {
      $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
    }
  });





  // Get all links inside the navbar
  const navbarLinks = document.querySelectorAll("#navbarCollapse .nav-link");
  const navbarCollapse = document.getElementById("navbarCollapse");

  // Add click event to each link
  navbarLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Check if the navbar is open
      if (navbarCollapse.classList.contains("show")) {
        const collapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: true,
        });
        collapse.hide(); // Close the navbar
      }
    });
  });



  (function ($) {
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();

        // Smooth scroll animation
        $("html, body").animate(
          {
            scrollTop: $(this.hash).offset().top - 70,  // Adjust for sticky navbar height
          },
          1000, // Duration of the animation in milliseconds
          "easeInOutExpo" // Easing function (make sure to include easing library if not native)
        );

        // Update the active class in navbar
        $(".navbar-nav .active").removeClass("active");
        $(this).addClass("active");
      }
    });




    // Highlight navbar links on scroll
    $(window).on("scroll", function () {
      const scrollPosition = $(this).scrollTop() + 80; // Adjust for sticky navbar height
      $(".navbar-nav a").each(function () {
        const section = $(this.hash);
        if (
          section.length &&
          section.offset().top <= scrollPosition &&
          section.offset().top + section.outerHeight() > scrollPosition
        ) {
          $(".navbar-nav .active").removeClass("active");
          $(this).addClass("active");
        }
      });
    });
  })(jQuery);





  // Back to top button
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 300) {
  //     $('.back-to-top').fadeIn('slow');
  //   } else {
  //     $('.back-to-top').fadeOut('slow');
  //   }
  // });
  // $('.back-to-top').click(function () {
  //   $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
  //   return false;
  // });


  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
  });


  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>'
    ]
  });


})(jQuery);




// for logo swip

document.addEventListener("DOMContentLoaded", function () {
  const sliderTrack = document.querySelector(".slide-track");
  const slides = Array.from(document.querySelectorAll(".slide1"));
  const totalSlides = slides.length;
  const slideWidth = slides[0].offsetWidth;

  // Duplicate slides
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    sliderTrack.appendChild(clone);
  });

  let position = 0;

  function startScroll() {
    position -= 1; // Adjust speed by changing this value
    if (position <= -slideWidth * totalSlides) {
      position = 0; // Reset position when the first set ends
    }
    sliderTrack.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(startScroll);
  }

  // Start the infinite scroll
  startScroll();
});



// document.addEventListener("DOMContentLoaded", function() {
//     const sliderTrack = document.querySelector(".slide-track");
//     const slides = Array.from(document.querySelectorAll(".slide1"));
//     const totalSlides = slides.length;
//     const slideWidth = slides[0].offsetWidth; // Each slide's width (250px)

//     let position = 0;

//     function startScroll() {
//         position -= 1; // Controls the scroll speed (increase or decrease this value to control speed)

//         // If we reach the end of the slides, instantly reset position to the start
//         if (position <= -(slideWidth * totalSlides)) {
//             position = 0;
//         }

//         // Apply the transformation to the slider track
//         sliderTrack.style.transform = `translateX(${position}px)`;

//         // Request the next animation frame to continuously scroll
//         requestAnimationFrame(startScroll);
//     }

//     // Start the scrolling effect
//     startScroll();
// });




// topbar type write
// const text = "INTERNATIONAL PRIVATE LABEL AND CONTRACT MANUFACTURING EXPO";
// let index = 0;

// function typeWriter() {
//     if (index < text.length) {
//         document.getElementById("typewriter-text").innerHTML += text.charAt(index);
//         index++;
//         setTimeout(typeWriter, 100); // Adjust delay for typing speed
//     }
// }

// typeWriter();








// text animation 
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.ml1 .letter',
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i + 1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



//   mouse animation 
// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
// });

// document.addEventListener('click', e => {
//     cursor.classList.add("expand");
//     setTimeout(() => {
//         cursor.classList.remove("expand");
//     }, 500);
// });
















document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-item.nav-link");

  // Add click event listener to each nav link
  navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      // Remove active class from all links
      navLinks.forEach(nav => nav.classList.remove("active"));

      // Add active class to the clicked link
      this.classList.add("active");
    });
  });

  // Update active link on scroll
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute("href"));
      if (
        section &&
        section.offsetTop - 70 <= scrollPosition && // Adjust offset for fixed navbar
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        // Remove active class from all links
        navLinks.forEach(nav => nav.classList.remove("active"));

        // Add active class to the link corresponding to the current section
        link.classList.add("active");
      }
    });
  });
});











// Form validation script
// document.getElementById("myForm").addEventListener("submit", function (e) {
//     e.preventDefault();

//     // Get form values
//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const phone = document.getElementById("phone").value.trim();

//     // Error message elements
//     const nameError = document.getElementById("nameError");
//     const emailError = document.getElementById("emailError");
//     const phoneError = document.getElementById("phoneError");

//     // Regex patterns
//     const nameRegex = /^[a-zA-Z\s]{3,50}$/; // Only letters and spaces, 3-50 characters
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format
//     const phoneRegex = /^[0-9]{10}$/; // Exactly 10 digits

//     let isValid = true;

//     // Validate Name
//     if (!nameRegex.test(name)) {
//         isValid = false;
//         document.getElementById("name").classList.add("error-border");
//         nameError.textContent = "Name must be 3-50 characters long and contain only letters and spaces.";
//     } else {
//         document.getElementById("name").classList.remove("error-border");
//         nameError.textContent = "";
//     }

//     // Validate Email
//     if (!emailRegex.test(email)) {
//         isValid = false;
//         document.getElementById("email").classList.add("error-border");
//         emailError.textContent = "Please enter a valid email address.";
//     } else {
//         document.getElementById("email").classList.remove("error-border");
//         emailError.textContent = "";
//     }

//     // Validate Phone
//     if (!phoneRegex.test(phone)) {
//         isValid = false;
//         document.getElementById("phone").classList.add("error-border");
//         phoneError.textContent = "Phone number must be exactly 10 digits.";
//     } else {
//         document.getElementById("phone").classList.remove("error-border");
//         phoneError.textContent = "";
//     }

//     // Submit form if valid
//     if (isValid) {
//         alert("Form submitted successfully!");
//         // You can now handle the form data (e.g., send it to the server)
//     }
// });













