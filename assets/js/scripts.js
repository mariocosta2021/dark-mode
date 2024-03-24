const changeThemeBtn = window.document.querySelector("input#change-theme");

// Toogle dark mode
function toggleDarkMode(){
    window.document.body.classList.toggle("dark");
}

//Load light or dark mode
function loadTheme(){
    const darkMode = localStorage.getItem("dark");
    if(darkMode){
        toggleDarkMode();
    }
}

loadTheme()

changeThemeBtn.addEventListener("change", function(){
    toggleDarkMode();

    //Save or remove dark mode
    localStorage.removeItem("dark");
    
    if(window.document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1);
    }
    

});