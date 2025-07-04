
  let current = 0;
  const testimonials = document.querySelectorAll(".testimonial");

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove("active");
      if (i === index) {
        testimonial.classList.add("active");
      }
    });
  }

  function nextTestimonial() {
    current = (current + 1 ) % testimonials.length;
    showTestimonial(current);
  }

  function prevTestimonial() {
    current = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial(current);
  }

  // Auto-slide every 5 seconds
  setInterval(nextTestimonial, 5000);