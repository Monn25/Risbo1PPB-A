// JavaScript to handle form submission (basic example)
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get values from the form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic form validation
  if(name && email && message) {
      alert('Pesan Anda telah terkirim. Terima kasih!');
      // In a real application, you would send this data to a server here
      // e.g., using AJAX or a form handler (like PHP, Node.js, etc.)
  } else {
      alert('Silakan isi semua kolom.');
  }
});
