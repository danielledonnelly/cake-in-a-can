document.addEventListener("DOMContentLoaded", function() {
  // Function to handle smooth scrolling to sections
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const offset = section.offsetTop - 100; // Adjusted offset to accommodate header height
    
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  }

  // Get all navbar links and attach click event listener
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      
      const sectionId = this.getAttribute("href").slice(1); // Get section ID from href attribute
      scrollToSection(sectionId); // Scroll to section
    });
  });
});
