<script>
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(30, 144, 255, 0.9)'; // darker semi-transparent blue
      navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    } else {
      navbar.style.backgroundColor = 'rgba(30, 144, 255, 0.5)'; // default semi-transparent blue
      navbar.style.boxShadow = 'none';
    }
  });
});
</script>