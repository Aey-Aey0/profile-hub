const themeToggle = document.querySelector("#theme-toggle");
const themeStatus = document.querySelector(".mode-switch__status");
const savedTheme = localStorage.getItem("theme");

function setTheme(isDark) {
	document.documentElement.classList.toggle("dark-mode", isDark);
	themeToggle.checked = isDark;
	themeStatus.textContent = isDark ? "On" : "Off";
	themeToggle.setAttribute("aria-label", `Dark mode ${isDark ? "on" : "off"}`);
	localStorage.setItem("theme", isDark ? "dark" : "light");
}

setTheme(savedTheme === "dark");

themeToggle.addEventListener("change", () => {
	setTheme(themeToggle.checked);
});
