let settingBtn = document.getElementById("setting-btn");
let closeBtn = document.getElementById("close-setting-btn");
let settingMenu = document.getElementById("setting-menu");

let lightModeBtn = document.getElementById("light-mode-btn");
let sepiaModeBtn = document.getElementById("sepia-mode-btn");
let darkModeBtn = document.getElementById("dark-mode-btn");

settingBtn.onclick = ()=>{
    settingMenu.classList.add("open");
};
closeBtn.onclick = ()=>{
    settingMenu.classList.remove("open");
};

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
});

let selectOptions = document.getElementById("select");
let surahName = document.getElementById("surah-name");
let verses = document.getElementById("verses");

fetch("https://api.alquran.cloud/v1/quran")
.then(res=>res.json())
.then((quran)=>{
    let options = "";
    for(let i = 0 ; i < quran.data.surahs.length; i++){
        options += `
        <option value="${quran.data.surahs[i].name}">${quran.data.surahs[i].number} - ${quran.data.surahs[i].name}</option>
        `
    }
    selectOptions.innerHTML += options;

    selectOptions.onchange =()=>{
        if(selectOptions.value === "اسم السُورَةُ" ){
            document.getElementById("surah").style.display="none";
        }else{
            document.getElementById("surah").style.display="block";
            let surahVerses = "";
            for(let j = 0 ; j < quran.data.surahs.length; j++){
            if(selectOptions.value === quran.data.surahs[j].name){
                if(quran.data.surahs[j].name === "سُورَةُ التَّوۡبَةِ"){
                    document.querySelector("#basmala-image").style.display = "none";
                }else{
                    document.querySelector("#basmala-image").style.display = "block";
            }
                for(let k = 0 ; k < quran.data.surahs[j].ayahs.length; k++){
                    // if(quran.data.surahs[j].ayahs[0].text.includes("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ")){
                    //     quran.data.surahs[j].ayahs[0].text.slice(40);
                    // }
                    surahVerses +=`${quran.data.surahs[j].ayahs[k].text}(${quran.data.surahs[j].ayahs[k].numberInSurah})&nbsp;&nbsp;`;
                }
            }
    }
        surahName.style.display="block"
        surahName.innerHTML = selectOptions.value;
        verses.innerHTML = surahVerses;
    }
}
})

