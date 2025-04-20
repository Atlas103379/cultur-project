document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  // Smooth scrolling
  links.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default anchor behavior

          const targetId = this.getAttribute("href").substring(1); // Get section ID
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop - 50, // Adjust for fixed header
                  behavior: "smooth"
              });
          }
      });
  });

  // Fade-in effect when scrolling
  function handleScroll() {
      sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (sectionTop < windowHeight - 100) {
              section.style.opacity = "1";
              section.style.transform = "translateY(0)";
          }
      });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Run once to show sections already in view

  // Highlight active navigation link
  function highlightNav() {
      let scrollY = window.scrollY + 100; // Offset to detect section in view

      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute("id");

          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
              links.forEach(link => link.classList.remove("active"));
              document.querySelector(`nav a[href="#${sectionId}"]`).classList.add("active");
          }
      });
  }

  window.addEventListener("scroll", highlightNav);
});
