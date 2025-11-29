// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const bookingForm = document.querySelector('form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        const formValues = {};
        formData.forEach((value, key) => {
            formValues[key] = value;
        });
        
        // In a real app, you would send this to your server
        console.log('Form submitted:', formValues);
        
        // Show success message
        alert('Thank you for your booking request! We will contact you shortly to confirm.');
        this.reset();
    });
}

// Mobile menu toggle (handled in navbar component)
// Class filter functionality could be added here
// Maybe initialize a calendar widget for booking