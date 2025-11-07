const html = document.documentElement;
const btn = document.getElementById("toggleDark");

btn.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

// نحافظ على الوضع بعد التحديث
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
}
