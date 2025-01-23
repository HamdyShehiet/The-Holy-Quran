let settingBtn = document.getElementById("setting-btn");
let closeBtn = document.getElementById("close-setting-btn");
let settingMenu = document.getElementById("setting-menu");

let lightModeBtn = document.getElementById("light-mode-btn");
let sepiaModeBtn = document.getElementById("sepia-mode-btn");
let darkModeBtn = document.getElementById("dark-mode-btn");

let smallFontBtn = document.getElementById("small-font-btn");
let mediumFontBtn = document.getElementById("medium-font-btn");
let bigFontBtn = document.getElementById("big-font-btn");

settingBtn.addEventListener("click",(e)=>{
    settingMenu.classList.add("open");
});
closeBtn.addEventListener("click",(e)=>{
    settingMenu.classList.remove("open");
});