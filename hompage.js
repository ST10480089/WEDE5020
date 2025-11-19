/* -----------------------------
   1. ACCORDION
------------------------------ */
document.querySelectorAll(".acc-btn").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});


/* -----------------------------
   2. LIGHTBOX GALLERY
------------------------------ */
const thumbs = document.querySelectorAll(".thumb");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

if (thumbs) {
  thumbs.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}


/* -----------------------------
   3. SEARCH FILTER
------------------------------ */
const search = document.getElementById("search");
const items = document.querySelectorAll("#items li");

if (search) {
  search.addEventListener("keyup", function () {
    const value = search.value.toLowerCase();

    items.forEach(item => {
      item.style.display = item.textContent.toLowerCase().includes(value)
        ? ""
        : "none";
    });
  });
}


/* -----------------------------
   4. FORM VALIDATION (ENQUIRY FORM)
------------------------------ */
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;

    if (name === "" || email === "") {
      alert("Please fill in all required fields.");
      return;
    }

    document.getElementById("response").textContent =
    "thank you for your enquiry!"}  ) 
}


/* -----------------------------
   5. CONTACT FORM VALIDATION
------------------------------ */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    const name = document.getElementById("cname").value.trim();
    const email = document.getElementById("cemail").value.trim();
    const message = document.getElementById("cmessage").value.trim();

    if (name === "" || email === "" || message.length < 5) {
      alert("Please complete all fields. Message must be at least 5 characters.");
      e.preventDefault();
    }
  });
}


/* -----------------------------
   6. SMOOTH SCROLL (for nav links)
------------------------------ */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


/* -------



/* -----------------------------
   8. MOBILE MENU TOGGLE
------------------------------ */
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "block" ? "none" : "block";
  });
}
        

// ----------------------
// GENERAL FADE-IN FUNCTION FOR ALL TYPES
// ----------------------

const fadeItems = document.querySelectorAll('.fade-in, .fade-left, .fade-right, .fade-stagger');

function runFadeIns() {
    fadeItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            item.classList.add('show');
        }
    });
}

window.addEventListener('scroll', runFadeIns);
window.addEventListener('load', runFadeIns);

const form = document.getElementById('enquiry-form');
const responseDiv = document.getElementById('form-response');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual page reload

  // Get form values (optional)
  const name = document.getElementById('name').value;

  // Show a response message
  responseDiv.textContent = "Thank you, ${name}! Your enquiry has been sent. We will get back to you soon.";

  // Reset the form
  form.reset();
});