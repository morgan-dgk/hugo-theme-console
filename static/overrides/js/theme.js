"use strict";

const getThemePreference = ({ userPreference, sysPreferenceDark }) => {
  if (userPreference) return userPreference;
  if (sysPreferenceDark) return "dark";
  else return "light";
};

const setUserThemePreference = (userThemePreference) => {
  try {
    localStorage.setItem("theme", userThemePreference);
  } catch (err) {
    console.warn("Failed to set user preference!");
    return;
  }
};

const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
};

const sysPreferenceDark = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;

const userPreference = localStorage.getItem("theme");
let currentTheme = getThemePreference({ userPreference, sysPreferenceDark });

setTheme(currentTheme);

addEventListener("load", (event) => {
  const buttonToggleTheme = document.querySelector("#btn-toggle-theme");
  buttonToggleTheme.addEventListener("click", (event) => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setUserThemePreference(newTheme);
    setTheme(newTheme);
    currentTheme = newTheme;
  });
});
