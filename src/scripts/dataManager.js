// Declare JS data that we want to store
let cssThemes = [

];

let pageTheme = "dark"

// Read localstorage
// Read CSS themes

/**
 * Retrieve, assign, and return the latest stored css theme list from the browser localstorage
 *
 * @returns {*} Array of objects
 */
function getStoredCssThemes(){
    // Update the cssTheme array
    let rawJsonStringCssThemes = localStorage.getItem("cssThemes");
    cssThemes = JSON.parse(rawJsonStringCssThemes);
    //Return the updated data
    return cssThemes
}


/**
 * Retrieve, assign, and return the latest stored page theme from the browser localstorage
 *
 * @returns {string} (Should be "light" or "dark")
 */
function getStoredPageTheme() {
    pageTheme = localStorage.getItem("pageTheme");
    return pageTheme
}

// Create / Update localstorage


/**
 * Description placeholder
 */
function setCssThemesToStorage() {
    let dataAsJsonString = JSON.stringify(cssThemes);
    localStorage.setItem("cssThemes", dataAsJsonString);
}

function setPageThemeToStorage() {
    localStorage.setItem("pageTheme", pageTheme);
}



//Check if data exists,
//if it does, retrieve it,
//else, set default variable to localstorage

if (localStorage.getItem("pageTheme") && localStorage.getItem("cssThemes").length > 0) {
    getStoredCssThemes();
    getStoredPageTheme();
} else {
    setCssThemesToStorage();
    setPageThemeToStorage();
}







// Delete localstorage