<script>
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault()
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
      alert('Please enter both email and password.')
    } else {
      alert('Login successful!')
      // Redirect or handle actual login here
    }
  })



  
</script>
// Smooth scroll to About Us section (if linked via anchor)
document.addEventListener("DOMContentLoaded", () => {
  const aboutLink = document.querySelector('a[href*="about.html"]');
  if (aboutLink) {
    aboutLink.addEventListener("click", (e) => {
      if (window.location.pathname.includes("index.html")) return;
      e.preventDefault();
      window.location.href = "about.html";
    });
  }
});

