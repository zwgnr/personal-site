const handleThemeSwitch = () => {
  let setTheme;
  let currentTheme =
    document.documentElement.attributes.getNamedItem("data-theme")?.value; // 'light' | 'dark'
  currentTheme === "light" ? (setTheme = "dark") : (setTheme = "light");
  document.dispatchEvent(new CustomEvent("set-theme", { detail: setTheme })); // or pass `null` to clear the saved setting}
};
