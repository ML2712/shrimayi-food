const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const nav6 = document.querySelector("#nav-6");
const nav7 = document.querySelector("#nav-7");
const nav8 = document.querySelector("#nav-8");
const navItems = [nav1, nav2, nav3, nav4, nav5, nav6, nav7, nav8];

// Control Navigation Animation
function navAnimation(val1, val2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
    });
}

function toggleNav() {
    // Toggle: Hamburger Open/Close
    hamburgerMenu.classList.toggle("active");

    //   Toggle: Menu Active
    overlay.classList.toggle("overlay-active");

    if (overlay.classList.contains("overlay-active")) {
        // Animate In - Overlay
        overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

        // Animate In - Nav Items
        navAnimation("out", "in");
    } else {
        // Animate Out - Overlay
        overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

        // Animate Out - Nav Items
        navAnimation("in", "out");
    }
}

// Events Listeners
hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener("click", toggleNav);
});


$(window).scroll(function () {
    if (this.scrollY > 20) {
        $(".logo").addClass("sticky");
        // $(".goTop").fadeIn();
    }
    else {
        $(".logo").removeClass("sticky");
        // $(".goTop").fadeOut();
    }
});

// Initialize AOS

function splitWords() {
    let quote = document.querySelector("blockquote q");
    quote.innerText.replace(/(<([^>]+)>)/ig, "");
    quotewords = quote.innerText.split(" "),
        wordCount = quotewords.length;
    quote.innerHTML = "";
    for (let i = 0; i < wordCount; i++) {
        quote.innerHTML += "<span>" + quotewords[i] + "</span>";
        if (i < quotewords.length - 1) {
            quote.innerHTML += " ";
        }
    }
    quotewords = document.querySelectorAll("blockquote q span");
    fadeWords(quotewords);
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function fadeWords(quotewords) {
    Array.prototype.forEach.call(quotewords, function (word) {
        let animate = word.animate([{
            opacity: 0,
            filter: "blur(" + getRandom(2, 5) + "px)"
        }, {
            opacity: 1,
            filter: "blur(0px)"
        }],
            {
                duration: 1000,
                delay: getRandom(500, 3300),
                fill: 'forwards'
            }
        )
    })
}


splitWords();