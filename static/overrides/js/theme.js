"use strict";

/**
 *  Retrieve user-set theme preference, if any, from localStorage. This overrides the prefers-color-scheme media feature if set.
 *  @returns {string}
 **/

const detectThemePreference = () => {
  const sysPreferenceDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  const userPreferenceDark = localStorage.getItem("theme") === "dark";

  if (sysPreferenceDark || userPreferenceDark) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
};

detectThemePreference();
