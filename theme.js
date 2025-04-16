document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-theme");
  const root = document.documentElement;

  toggleBtn.addEventListener("click", () => {
    const currentTheme = root.className;
    const newTheme = currentTheme === "light" ? "dark" : "light";
    root.className = newTheme;
    localStorage.setItem("theme", newTheme);
  });
});
