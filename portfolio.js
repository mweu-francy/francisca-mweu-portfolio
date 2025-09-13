let menu =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList,remove('active');

}
const typed = new Typed('.multiple-text', {
      strings: ['Front-End Developer', ' UI/UX Designer, &amp; Embedded Developer.'],
      typeSpeed: 80,
      backspeed:80,
      backDelay:1200,
      loop:true,
    });


document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent reload

  let isValid = true;

  // Get form values
  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  // Reset errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.querySelectorAll("input, textarea").forEach(el => el.classList.remove("error-border"));

  // Validate Full Name
  if (fullname.value.trim() === "") {
    setError(fullname, "Full name required");
    isValid = false;
  }

  // Validate Email
  if (email.value.trim() === "") {
    setError(email, "Email required");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    setError(email, "Enter a valid email");
    isValid = false;
  }

  // Validate Phone
  if (phone.value.trim() === "") {
    setError(phone, "Phone number required");
    isValid = false;
  } else if (!/^\d{7,15}$/.test(phone.value)) {
    setError(phone, "Enter a valid phone number");
    isValid = false;
  }

  // Validate Subject
  if (subject.value.trim() === "") {
    setError(subject, "Subject required");
    isValid = false;
  }

  // Validate Message
  if (message.value.trim() === "") {
    setError(message, "Message required");
    isValid = false;
  }

  // If all good
  if (isValid) {
    console.log("Contact form submitted!");
    console.log({
      fullname: fullname.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      message: message.value
    });

    alert("Message sent successfully!");
    this.reset();
  }
});

// Helper for errors
function setError(input, message) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error");
  error.textContent = message;
  input.classList.add("error-border");
}

// Tracking changes in input fields
["fullname", "email", "phone", "subject", "message"].forEach(id => {
  document.getElementById(id).addEventListener("input", function() {
    console.log(`${id}:`, this.value);
  });
});
