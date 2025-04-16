const form = document.getElementById("orderForm");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

function validate(input, condition) {
  const group = input.parentElement;
  group.classList.remove("valid", "invalid");
  if (condition) {
    group.classList.add("valid");
  } else {
    group.classList.add("invalid");
  }
}

if (name) {
  name.addEventListener("input", () => {
    validate(name, name.value.length >= 2);
  });
}

if (phone) {
  phone.addEventListener("input", () => {
    validate(phone, /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/.test(phone.value));
  });
}

if (email) {
  email.addEventListener("input", () => {
    validate(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));
  });
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Переход к оплате...");
    // window.location.href = 'payment.html';
  });
}
