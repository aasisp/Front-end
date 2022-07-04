let dropDowns = document.getElementsByClassName("dropdown"),
    megaMenu = document.getElementsByClassName("mega-menu"),
    megaMenuOverlay = document.querySelector(".mega-MO"),
    dropDownBars = document.getElementsByClassName("bar"),
    header = document.querySelector(".bg-img"),
    leftContainer = document.querySelector(".left-cont"),
    logo = document.querySelector(".logo"),
    nav = document.querySelector(".nav-bar"),
    dropDownText = document.querySelectorAll(".text"),
    dropDownArrow = document.querySelectorAll(".arrow"),
    translator = document.querySelector(".translator"),
    navIcon = document.querySelector(".ham-bg"),
    navBar = document.querySelector(".site-nav"),
    navBgOverlay = document.querySelector(".nav-bg"),
    body = document.querySelector("body"),
    navCloseBtn = document.querySelector(".close-nav"),
    loginBtn = document.querySelector(".login"),
    loginPopup = document.querySelector(".login-popup"),
    closeBtn = document.querySelector(".close-btn"),
    fbLive = document.querySelector(".facebook-live"),
    fbVideo = document.querySelector(".fb-video"),
    closeFB = document.querySelector(".close-fb");

    console.log(fbVideo);

for(let x = 0; x < dropDowns.length; x++) {
    let dropDownEvent = dropDowns[x];
    
        dropDownEvent.addEventListener("mouseover", e => {
            megaMenu[x].classList.remove("hide");
            megaMenuOverlay.id = "dblock";
            dropDownBars[x+1].classList.add("a-active");
        });

        dropDownEvent.addEventListener("mouseleave", e => {
            megaMenu[x].classList.add("hide");
            megaMenuOverlay.removeAttribute('id');
            dropDownBars[x+1].classList.remove("a-active");
        });

        window.addEventListener("scroll", e => {
            var userScroll = window.scrollY;
            if(userScroll > 100) {
                megaMenu[x].classList.add("sticky");
                header.classList.add("floating-header");
                header.classList.remove("bg-img");
                leftContainer.classList.add("floating-left-cont");
                logo.classList.add("floating-logo");
                nav.classList.add("floating-nav");                    
                dropDownText[x].classList.add("text-black");
                dropDownText[7].classList.add("text-black");
                megaMenu[x].classList.add("text-active");
                dropDownArrow[x].classList.add("on-scroll-arrow");
                translator.classList.add("floating-translator");
                dropDownBars[x].classList.add("yellow-border");
                dropDownBars[7].classList.add("yellow-border");
            }

            if(userScroll <= 100) {
                megaMenu[x].classList.remove("sticky");
                header.classList.remove("floating-header");
                header.classList.add("bg-img");
                leftContainer.classList.remove("floating-left-cont");
                logo.classList.remove("floating-logo");
                nav.classList.remove("floating-nav");
                dropDownText[x].classList.remove("text-black");
                dropDownText[7].classList.remove("text-black");
                dropDownArrow[x].classList.remove("on-scroll-arrow");
                translator.classList.remove("floating-translator");
                dropDownBars[x].classList.remove("yellow-border");
                dropDownBars[7].classList.remove("yellow-border");
            }
        });
        
        megaMenu[x].addEventListener("mouseover", e => {
            var userScroll = window.scrollY; 
            if(userScroll > 100) {
            dropDownText[x+1].classList.add("text-active");
            }
        });

        var userScroll = window.scrollY; 
        megaMenu[x].addEventListener("mouseleave", e => { 
            if(userScroll < 100) {
            dropDownText[x+1].classList.remove("text-active");
            }
        });   
}

navIcon.addEventListener("click", e => {
    navBar.classList.remove("hide");
    navBgOverlay.classList.remove("hide");
    body.style.overflow = "hidden";
});

navCloseBtn.addEventListener("click", e => {
    navBar.classList.add("hide");
    navBgOverlay.classList.add("hide");
    body.style.overflow = "auto";
});

loginBtn.addEventListener("click", e => {
    loginPopup.classList.remove("hide");
    navBgOverlay.classList.remove("hide");
    navBgOverlay.style.opacity = "0.8";
    closeBtn.classList.remove("hide");
    body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", e => {
    loginPopup.classList.add("hide");
    navBgOverlay.classList.add("hide");
    closeBtn.classList.add("hide");
    navBgOverlay.style.opacity = "0.3";
    body.style.overflow = "auto";
});

var clickCounter = 0;
fbLive.addEventListener("click", e => {
    fbVideo.classList.remove("hide");
    clickCounter++;
    if(clickCounter % 2 == 0) {
        fbVideo.classList.add("hide");
    }
});