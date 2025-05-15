// Initialize Bootstrap tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const targetId = this.getAttribute('href')
    if (targetId === '#') return
    
    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Account for fixed navbar
        behavior: 'smooth'
      })
      
      // Close mobile menu when clicking a link
      const navbarCollapse = document.querySelector('.navbar-collapse')
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).toggle()
      }
    }
  })
})

// Form validation for contact form
const contactForm = document.getElementById('contactForm')
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault()
    
    // Simple validation - you would expand this in a real project
    const name = this.querySelector('#name')
    const email = this.querySelector('#email')
    const message = this.querySelector('#message')
    
    if (!name.value || !email.value || !message.value) {
      alert('Please fill in all required fields')
      return
    }
    
    // In a real project, you would send this data to a server
    alert('Thank you for your message! We will get back to you soon.')
    this.reset()
  })
}

// Class booking functionality
document.querySelectorAll('.book-class-btn').forEach(button => {
  button.addEventListener('click', function() {
    const className = this.getAttribute('data-class')
    const classTime = this.getAttribute('data-time')
    
    // In a real application, this would open a booking modal
    alert(`Booking ${className} at ${classTime}\nThis would open a booking form in a real application.`)
  })
})

// Initialize carousels with custom settings
const heroCarousel = document.getElementById('heroCarousel')
if (heroCarousel) {
  new bootstrap.Carousel(heroCarousel, {
    interval: 5000,
    pause: 'hover',
    wrap: true
  })
}

const testimonialCarousel = document.getElementById('testimonialCarousel')
if (testimonialCarousel) {
  new bootstrap.Carousel(testimonialCarousel, {
    interval: 7000,
    pause: 'hover',
    wrap: true
  })
}

// Animate elements when they come into view
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll')
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top
    const screenPosition = window.innerHeight / 1.3
    
    if (elementPosition < screenPosition) {
      element.classList.add('animated')
    }
  })
}

window.addEventListener('scroll', animateOnScroll)
window.addEventListener('load', animateOnScroll)

// Back to top button
const backToTopButton = document.createElement('button')
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>'
backToTopButton.className = 'btn btn-primary btn-lg back-to-top'
backToTopButton.style.position = 'fixed'
backToTopButton.style.bottom = '20px'
backToTopButton.style.right = '20px'
backToTopButton.style.display = 'none'
backToTopButton.style.zIndex = '99'
document.body.appendChild(backToTopButton)

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = 'block'
  } else {
    backToTopButton.style.display = 'none'
  }
})

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})