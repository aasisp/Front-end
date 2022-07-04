// Side bar Navigation menu ELements
// Navigation DOM elements
let navButton = document.getElementById("nav-btn");
let sideBarNav = document.getElementById("side-nav");
let navBarOvelay = document.getElementById("overlay");
let closeButton = document.getElementById("close-nav");
let navWrapper = document.getElementById("site-nav");
let navWrapperlis = navWrapper.getElementsByTagName("li");
let header = document.querySelector("body");
let screenSize = screen.width;


// Floating Nav menu
let navMenu = document.querySelector("nav");
let flaotingDate = document.querySelector(".floating-date");
let stickyLogo = document.querySelector(".sticky-logo");

/* Event listenin for page scroll on page scroll more than
   128 then add floating header and remove hide from floating date
   and vice versa on page scroll less than 128
*/
window.addEventListener("scroll", e => {

    let pageScroll = window.scrollY;

    if (pageScroll > 128) {
        navMenu.classList.add("floating-header");
        flaotingDate.classList.remove("hide");
        stickyLogo.classList.remove("hide");
    }
    
    if (pageScroll < 128) {
        navMenu.classList.remove("floating-header");
        flaotingDate.classList.add("hide");
        stickyLogo.classList.add("hide");
    }
    
});

// Event to open and close side bar navigation menu
navButton.addEventListener("click", e => {

    sideBarNav.classList.remove("hide");
    navBarOvelay.classList.remove("hide");
    closeButton.classList.remove("hide");
    header.style.overflow = "hidden";

    if(screenSize > 764 ) {
        header.classList.add("ml-308");
    } else {
        header.classList.remove("ml-308");
    }
});

closeButton.addEventListener("click", e => {

    sideBarNav.classList.add("hide");
    navBarOvelay.classList.add("hide");
    closeButton.classList.add("hide");
    header.classList.remove("ml-308");
    header.style.overflow = "auto";
});

// Event to give active state to site navigation menu
let pagePath = window.location.pathname;

if(pagePath !== "/") {

    navWrapperlis[0].classList.remove("active");

}
else {

    navWrapperlis[0].classList.add("active");
}

// Event to list site navigation active state
for(let x = 0; x < navWrapperlis.length; x++ ) {

    navWrapperlis[x].addEventListener("click", e => {

        navWrapperlis[x].classList.add("active");
        console.log(navWrapperlis[x]);
        localStorage.setItem("activTab", navWrapperlis);
        console.log(localStorage.activeTab);

    });  
}


// right side menu button events
// search box widget 
let searchButton = document.getElementById("search-btn");
let searchBox = document.getElementById("search-wdg");
let closeSearchButton = document.getElementById("close-search");

let clickCounter = 0;
// search form
searchButton.addEventListener("click", e => {

    searchBox.classList.remove("hide");
    updateWidget.classList.add("hide");
    trendingWidget.classList.add("hide");

    clickCounter++;

    if(clickCounter%2 == 0) {

        searchBox.classList.add('hide');

    }
});

closeSearchButton.addEventListener("click", e => {

        searchBox.classList.add('hide');

});

// latest news update 
let updateButton = document.getElementById("update-btn");
let updateWidget = document.getElementById("update-widget");
let closeUpdateWidget = document.getElementById("close-up");

// Events to open and close latest news update widget
let click = 0;
updateButton.addEventListener("click", e => {

    updateWidget.classList.remove("hide");
    searchBox.classList.add('hide');
    trendingWidget.classList.add("hide");

    click++;

    if(click%2 == 0) {

        updateWidget.classList.add("hide");

    }
});

closeUpdateWidget.addEventListener("click", e => {

    updateWidget.classList.add("hide");

});

// Event to open and close Trending widget
let trendingButton = document.getElementById("trending-btn");
let trendingWidget = document.getElementById("trending-widget");
let closeTrendingButton = document.getElementById("close-tw");

let trendingClicks = 0;
trendingButton.addEventListener("click", e => {

    trendingWidget.classList.remove("hide");
    updateWidget.classList.add("hide");
    searchBox.classList.add('hide');

    trendingClicks++;

    if(trendingClicks % 2 === 0) {

        trendingWidget.classList.add("hide");

    }
}); 

closeTrendingButton.addEventListener("click", e => {

    trendingWidget.classList.add("hide");

});

// Adding Styles to element
// Adding bakground color to all img container
const imgBackground = document.getElementsByClassName("img-c");

for(let x = 0; x < imgBackground.length; x++) {

    imgBackground[x].classList.add("img-bg");

}
// Post rihgt box-shadow using js beacuse Sass is not accepting box-shadow value.
const postRight = document.querySelector(".post-right")
postRight.style.boxShadow = "rgb(0 0 0 / 10%) 0 0 18px";

// Open pc-ad in new window 
let adFramePc = document.getElementsByClassName("pc-ad");
let adFrameMobile = document.getElementsByClassName("m-ad");

for(let i = 0; i < adFramePc.length; i++) {

    let pcAd = adFramePc[i].getElementsByTagName("a");

    for(let x = 0; x < pcAd.length; x++) {

        pcAd[x].setAttribute("target", "_blank");
        //mobileAd[x].setAttribute("target", "_blank");
    }
}

// Mobile Advertisement to open in new window
for(let i = 0; i < adFrameMobile.length; i++) {

    let mobileAd = adFrameMobile[i].getElementsByTagName("a");

    for(let x = 0; x < mobileAd.length; x++) {

        mobileAd[x].setAttribute("target", "_blank");  

    }
}