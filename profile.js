const form = document.getElementById("profileForm");
const themeSelector = document.getElementById("themeSelector");
const body = document.body;

// Загрузка сохранённой темы
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.className = savedTheme + "-theme";
  themeSelector.value = savedTheme;
}

// Смена темы
themeSelector.addEventListener("change", () => {
  const theme = themeSelector.value;
  body.className = theme + "-theme";
  localStorage.setItem("theme", theme);
});

// Сохранение данных профиля (локально)
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = {
    username: form.username.value,
    email: form.email.value,
    phone: form.phone.value
  };
  localStorage.setItem("profileData", JSON.stringify(data));
  alert("Профиль обновлён!");
});

// Загрузка сохранённых данных профиля
const savedProfile = localStorage.getItem("profileData");
if (savedProfile) {
  const data = JSON.parse(savedProfile);
  form.username.value = data.username;
  form.email.value = data.email;
  form.phone.value = data.phone;
}
