const themeRadios = document.querySelectorAll(".theme-radio");
const themeLabels = document.querySelectorAll(".theme-label");
const themeIndicator = document.querySelector(".theme-indicator");
let element = document.body;

let currentSelected = window.matchMedia("(prefers-color-scheme:dark)").matches
  ? 1
  : 2;
themeRadios.forEach((radio, index) => {
  if (index + 1 === currentSelected) radio.checked = true;
});
element.classList = `theme-${currentSelected}`;
const handleThemeSwap = () => {
  themeRadios.forEach((radio, index) => {
    if (radio.checked && index + 1 == currentSelected) radio.checked = false;
  });

  currentSelected++;
  if (currentSelected === 4) currentSelected = 1;
  themeRadios.forEach((radio, index) => {
    if (index + 1 === currentSelected) {
      radio.checked = true;
    }
  });
  currentTheme = `theme-${currentSelected}`;
  document.body.classList = currentTheme;
};
themeIndicator.addEventListener("click", handleThemeSwap);
