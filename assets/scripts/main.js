let settingBtn = document.getElementById("setting-btn");
let closeBtn = document.getElementById("close-setting-btn");
let settingMenu = document.getElementById("setting-menu");

let lightModeBtn = document.getElementById("light-mode-btn");
let sepiaModeBtn = document.getElementById("sepia-mode-btn");
let darkModeBtn = document.getElementById("dark-mode-btn");

let smallFontBtn = document.getElementById("small-font-btn");
let mediumFontBtn = document.getElementById("medium-font-btn");
let bigFontBtn = document.getElementById("big-font-btn");

let verses = document.getElementById("verses")

settingBtn.addEventListener("click",(e)=>{
    settingMenu.classList.add("open");
});
closeBtn.addEventListener("click",(e)=>{
    settingMenu.classList.remove("open");
});

let theme = localStorage.getItem("theme");

function lightMode(){
    document.body.className= "light"
    lightModeBtn.classList.add("active-mode");
    sepiaModeBtn.classList.remove("active-mode");
    darkModeBtn.classList.remove("active-mode");
    document.querySelector("#basmala-image").src = "assets/images/Basmala.webp";
    document.querySelector(".setting-icon img").src = "assets/icons/setting-light-mode.webp";
    document.getElementById("close-setting-btn").src = "assets/icons/close-light-mode.webp"
    localStorage.setItem("theme","lightMode");
}
function sepiaMode(){
    document.body.className= "sepia";
    sepiaModeBtn.classList.add("active-mode");
    lightModeBtn.classList.remove("active-mode");
    darkModeBtn.classList.remove("active-mode");
    document.querySelector("#basmala-image").src = "assets/images/Basmala.webp";
    document.querySelector(".setting-icon img").src = "assets/icons/setting-light-mode.webp";
    document.getElementById("close-setting-btn").src = "assets/icons/close-light-mode.webp"
    localStorage.setItem("theme","sepiaMode");
}
function darkMode(){
    document.body.className = "dark";
    darkModeBtn.classList.add("active-mode");
    lightModeBtn.classList.remove("active-mode");
    sepiaModeBtn.classList.remove("active-mode");
    document.querySelector("#basmala-image").src = "assets/images/Basmala-white.webp";
    document.querySelector(".setting-icon img").src = "assets/icons/setting-dark-mode.webp";
    document.getElementById("close-setting-btn").src = "assets/icons/close-dark-mode.webp";
    localStorage.setItem("theme","darkMode");
}

if(theme == "darkMode"){
    darkMode();
}else if(theme == "sepiaMode"){
    sepiaMode();
}else{
    lightMode();
}

lightModeBtn.onclick = ()=>{
        lightMode();
}
sepiaModeBtn.onclick = ()=>{
        sepiaMode()
}
darkModeBtn.onclick = ()=>{
        darkMode()
}

let btns = document.querySelectorAll(".font-options button");

btns.forEach(function(element){
    element.addEventListener("click",function(e){
        btns.forEach(function(ele){
            ele.classList.remove("active-font");
        })
        if(e.target.classList.contains("small-font-btn")){
            verses.style.fontSize = "var(--fs-24px)";
        }else if(e.target.classList.contains("medium-font-btn")){
            verses.style.fontSize = "var(--fs-30px)";
        }else{
            verses.style.fontSize = "var(--fs-40px)";
        }
        this.classList.add("active-font");        
    })
})