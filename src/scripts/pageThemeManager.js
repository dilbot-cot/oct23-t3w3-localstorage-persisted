const themes = {
    light: {
        "50":"#f7fbff",
        "100":"#f0f6ff",
        "200":"#e0eeff",
        "300":"#d1e5ff",
        "400":"#c2dcff",
        "500":"#b3d4ff",
        "600":"#6babff",
        "700":"#2483ff",
        "800":"#005fdb",
        "900":"#004094",
        "950":"#003170"
    },
    dark: {
        "50":"#f7fbff",
        "100":"#dbe9fc",
        "200":"#000000",
        "300":"#000000",
        "400":"#000000",
        "500":"#000000",
        "600":"#000000",
        "700":"#000000",
        "800":"#000000",
        "900":"#000000",
        "950":"#000000"
    }
}


// Update #pageThemeHeading text
function updatePageThemeHeading() {
    let headingToUpdate = document.getElementById('pageThemeHeading')
    headingToUpdate.textContent = getStoredPageTheme();
}

// Update #pageThemeButton text
function updatePageThemeButtonText() {
    let buttonToUpdate = document.getElementById('pageThemeButton')

    let textToShow = "";
    if (getStoredPageTheme() == "dark") {
        textToShow = "Toggle to Light Mode"
    } else {
        textToShow = "Toggle to Dark Mode"
    }
    buttonToUpdate.textContent = textToShow;

}

// Add onclick to #pageThemeButton
function togglePageTheme(){
    if (getStoredPageTheme() == "dark"){
        pageTheme = "light";
    } else {
        pageTheme = "dark";
    }
    setPageThemeToStorage();

    applySavedTheme();
}

// Apply theme from local storage
function applySavedTheme(){
    updatePageThemeButtonText();
    updatePageThemeHeading();
    updateCssVariables()
}

// Update CSS variables based on current theme 
function updateCssVariables(){
    let themeName = getStoredPageTheme();
    // for every CSS variable in themes["light"]
    for (const variable in themes[themeName]){
        document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable]);
        console.log("Updated CSS variable --" + variable);
    }
}

let pageThemeToggleButton = document.getElementById("pageThemeButton")
pageThemeToggleButton.addEventListener("click", togglePageTheme);

applySavedTheme();