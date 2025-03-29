$(document).ready(function () {
  $(".hero-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
  });
  $(".brands-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 2 } /* 2 logos per slide on mobile */,
      600: { items: 3 } /* 3 logos per slide on tablets */,
      1000: { items: 5 } /* 5 logos per slide on desktops */,
    },
    navText: [
      "<span class='owl-prev'>&#10094;</span>",
      "<span class='owl-next'>&#10095;</span>",
    ],
  });
  $(".brands-carousel-2").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 2 } /* 2 logos per slide on mobile */,
      600: { items: 3 } /* 3 logos per slide on tablets */,
      1000: { items: 5 } /* 5 logos per slide on desktops */,
    },
    navText: [
      "<span class='owl-prev'>&#10094;</span>",
      "<span class='owl-next'>&#10095;</span>",
    ],
  });
  // Initialize Testimonials Carousel
  $(".testimonials-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
    },
  });

  $(document).ready(function () {
    $(".testimonial-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });
  });
});

// Form
document.querySelectorAll(".service-select").forEach(function (selectElement) {
  selectElement.addEventListener("change", function () {
    let form = this.closest("form"); // Find the closest form related to this dropdown
    let adServices = form.querySelector(".ad-service"); // Find solar fields within the same form

    if (this.value === "ad-services") {
      adServices.style.display = "block"; // Show additional fields
    } else {
      adServices.style.display = "none"; // Hide additional fields
    }
  });
});

const counters = document.querySelectorAll(".counter");
const speed = 100;

const startCounters = () => {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCount = () => {
      const increment = target / speed;

      if (count < target) {
        count += Math.ceil(increment);
        counter.innerText = count;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
};

// Start counter animation when section is in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounters();
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(document.querySelector("#stats-section"));
