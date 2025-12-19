let dark = true;

// function lightMode() {
//     let sun = document.querySelector(".mode");
//     sun.id = "sun";
//     sun.src = "sun (1).svg";
//     document.querySelector("body").style.animation = "dark-light 1s";
//     document.querySelector("body").style.backgroundColor = "white";

//     let para = document.querySelectorAll("p");
//     for (let x = 0; x < para.length; x++) {
//         para[x].style.background = "url(obsidian.jpg) no-repeat";
//         para[x].style.backgroundClip = "text";

//     }

//     console.log(sun.id)
//     dark = false;
// }

function lightMode() {
    let tog = document.body;
    let para = document.querySelectorAll("p");

    tog.classList.toggle("light");
    for (let x = 0; x < para.length; x++) {
        para[x].classList.toggle("light");
    }

    if (tog.className == "light") {
        let sun = document.querySelector(".mode");
        tog.id = "sun";
        sun.src = "sun (1).svg";
    } else {
        let moon = document.querySelector(".mode")
        moon.id = "moon";
        sun.src = "moon (2).svg";
    }

    
}

// function darkMode() {
//     let moon = document.querySelector(".mode")
//     moon.id = "moon";
//     sun.src = "moon (2).svg";
//     document.querySelector("body").style.animation = "light-dark 1s";
//     document.querySelector("body").style.backgroundColor = "rgb(17, 17, 17);";

//     let para = document.querySelectorAll("p");
//     for (let x = 0; x < para.length; x++) {
//         para[x].style.background = "url(wood.jpg) no-repeat";
//         para[x].style.backgroundClip = "text";
//     }

//     dark = true;
// }

let mode = document.querySelector(".mode");
console.log(mode.id);
mode.addEventListener("click", lightMode);




