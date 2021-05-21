const indicator = document.getElementById("indicator");
let theme = localStorage.getItem("theme");

const changeTheme = (themeNumber) => {
  let indicatorStyle = indicator.style;
  let rootElement = document.documentElement;
  if (themeNumber === "theme-one") {
    indicatorStyle.left = "3px";
    indicatorStyle.transform = "translateX(0%)";
    rootElement.classList.remove("theme-two", "theme-three");
    localStorage.setItem("theme", "theme-one");
  } else if (themeNumber === "theme-two") {
    indicatorStyle.left = "50%";
    indicatorStyle.transform = "translateX(-50%)";
    rootElement.classList.remove("theme-three");
    rootElement.classList.add("theme-two");
    localStorage.setItem("theme", "theme-two");
  } else {
    indicatorStyle.right = "3px";
    indicatorStyle.left = "auto";
    indicatorStyle.transform = "translateX(0%)";
    rootElement.classList.remove("theme-two");
    rootElement.classList.add("theme-three");
    localStorage.setItem("theme", "theme-one");
  }
};

changeTheme(theme);
