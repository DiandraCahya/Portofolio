document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent default form submission
    
    // You can customize this code to send form data via email using your preferred method (e.g., AJAX)
    // Here's a basic example using EmailJS
    emailjs.sendForm('service_kf4dqxs', "template_1kqtpsp", this)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         alert('Form has been submitted successfully!');
         $('#popupForm').modal('hide'); // Hide the form after submission
      }, function(error) {
         console.log('FAILED...', error);
         alert('Failed to submit form. Please try again later.');
      });
  });
  
  $(document).ready(function(){
    $('.showPopup').click(function(){
      $('#popupForm').modal('show');
    });
  });