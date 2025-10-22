const form = document.querySelector('[data-testid="test-contact-form"]');
const submitBtn = form.querySelector('[data-testid="test-contact-submit"]');
const successEl = form.querySelector('[data-testid="test-contact-success-message"]');

form.addEventListener("submit", (e) => {
  // stop instant submit
  e.preventDefault(); 

  const fields = [
    { name: "name", label: "Full name" },
    { name: "email", label: "Email" },
    { name: "subject", label: "Subject" },
    { name: "message", label: "Message", isTextarea: true },
  ];

  let valid = true;

  fields.forEach(field => {
    const input = field.isTextarea
      ? form.querySelector('[data-testid="test-contact-textarea"]')
      : form.querySelector(`[data-testid="test-contact-${field.name}"]`);

    const errorEl = form.querySelector(
      `[data-testid="test-contact-error-${field.name}"]`
    );

    errorEl.textContent = ""; // reset

    if (!input.value.trim()) {
      errorEl.textContent = `${field.label} is required`;
      errorEl.classList.add('error-msg');
      valid = false;
    } 
    // Email format check
    else if (field.name === "email" && !/\S+@\S+\.\S+/.test(input.value)) {
      errorEl.textContent = "Please enter a valid email address";
      errorEl.classList.add('error-msg');
      valid = false;
    }
    // Message length check
    else if (field.name === "message" && input.value.trim().length < 10) {
      errorEl.textContent = "Message cannot be less than 10 characters";
      errorEl.classList.add('error-msg');
      valid = false;
    } 
    else {
      errorEl.textContent = "";
    }
  });

  if (!valid) return; // stop if any error exists

  // Simulate submitting
  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";
  successEl.textContent = "";

  setTimeout(() => {
    // Simulate successful submission
    successEl.textContent = "Successful! Thank you for contacting me";
    successEl.classList.add('success-msg');
    submitBtn.textContent = "Submit";

    // After showing success briefly, refresh page
    setTimeout(() => {
      location.reload();
    }, 1500);
  }, 2000); // 2s delay to simulate network
});
