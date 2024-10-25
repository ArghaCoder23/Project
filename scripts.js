// Function to smoothly scroll to sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Contact form submission (simple validation)
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent successfully!');
  });
  