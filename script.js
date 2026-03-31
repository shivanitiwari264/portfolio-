AOS.init({ duration:1200 });

// Typed animation
var typed = new Typed('#typed', {
  strings: ["Web Developer", "AI Enthusiast", "Game Developer", "Problem Solver"],
  typeSpeed:50,
  backSpeed:40,
  loop:true
});

// Skill bar animation
window.addEventListener('load', ()=>{
  document.querySelectorAll('.skill-progress').forEach(el=>{
    el.style.width = el.getAttribute('data-value');
  });
});

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;

  const mailtoLink = `mailto:tiwarishivani264@gmail.com
    ?subject=Portfolio Contact from ${name}
    &body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

  window.location.href = mailtoLink;

  document.getElementById('successMsg').classList.remove('d-none');
  setTimeout(() => {
    document.getElementById('successMsg').classList.add('d-none');
  }, 4000);

  this.reset();
});

// Role Badge Cycling
const roles = ["Web Developer", "AI Enthusiast", "Game Developer", "Problem Solver"];
let roleIndex = 0;
const badgeText = document.getElementById('badgeText');

function cycleRole() {
  badgeText.textContent = roles[roleIndex];
  roleIndex = (roleIndex + 1) % roles.length;
}
setInterval(cycleRole, 3000); // Change every 3 seconds

// Achievement Certificate Viewer
function viewAchievement(type) {
  // Create modal or redirect to certificate
  const certificates = {
    'leader': {
      title: 'Best Leader Award',
      image: './images/certificates/leader-award.jpg',
      description: 'Awarded for outstanding leadership during NSS state-level camps'
    },
    'ai-ml': {
      title: 'AI & ML Internship',
      image: './images/certificates/ai-ml-internship.jpg',
      description: 'Completed intensive internship in Artificial Intelligence and Machine Learning'
    },
    'web-dev': {
      title: 'Web Development Bootcamp',
      image: './images/certificates/web-development.jpg',
      description: 'Successfully completed intensive web development bootcamp'
    },
    'database': {
      title: 'Database Management Fundamentals',
      image: './images/certificates/database-management.jpg',
      description: 'Completed comprehensive course on database design and management'
    }
  };

  const cert = certificates[type];
  if (cert) {
    // Option 1: Open in new tab
    window.open(cert.image, '_blank');
    
    // Option 2: Show alert (commented out, use modal instead)
    // alert(`Certificate: ${cert.title}\n\n${cert.description}\n\nImage: ${cert.image}`);
    
    // Option 3: Create a simple modal (you can enhance this)
    showCertificateModal(cert);
  }
}

// Simple Certificate Modal Function
function showCertificateModal(certificate) {
  // Create modal HTML
  const modalHtml = `
    <div class="modal fade" id="certificateModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${certificate.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal">
              <i class="fa-solid fa-times"></i>
            </button>
          </div>
          <div class="modal-body text-center">
            <img src="${certificate.image}" alt="${certificate.title}" style="max-width: 100%; border-radius: 10px; margin-bottom: 15px;">
            <p>${certificate.description}</p>
            <div class="mt-3">
              <a href="${certificate.image}" target="_blank" class="btn btn-gradient me-2">
                <i class="fa-solid fa-eye me-1"></i> View Full Size
              </a>
              <a href="${certificate.image}" download class="btn btn-outline-light">
                <i class="fa-solid fa-download me-1"></i> Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Remove existing modal if any
  const existingModal = document.getElementById('certificateModal');
  if (existingModal) {
    existingModal.remove();
  }
  
  // Add modal to body
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  
  // Show modal
  const modal = new bootstrap.Modal(document.getElementById('certificateModal'));
  modal.show();
  
  // Remove modal from DOM when hidden
  document.getElementById('certificateModal').addEventListener('hidden.bs.modal', function () {
    this.remove();
  });
}

// Optional: Click to cycle manually
document.getElementById('roleBadge').addEventListener('click', cycleRole);
// Current year
document.getElementById('year').innerText = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');

  function setActiveLink() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();
});
