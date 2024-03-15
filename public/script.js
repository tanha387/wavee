document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const navbar = document.getElementById("navbar-default");
  
    toggleButton.addEventListener("click", function() {
      navbar.classList.toggle("hidden"); // Assuming "hidden" is the CSS class that hides the navigation menu
    });
  });



  document.addEventListener('DOMContentLoaded', function() {
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    
    accordionBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const targetId = this.getAttribute('aria-controls');
        const targetContent = document.getElementById(targetId);
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        // Toggle aria-expanded attribute
        this.setAttribute('aria-expanded', !isExpanded);
        
        // Toggle hidden class on accordion content
        targetContent.classList.toggle('hidden');
      });
    });
  });

