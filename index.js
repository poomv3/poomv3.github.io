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
    let tog = document.querySelector("body");
    let para = document.querySelectorAll("p");
    tog.classList.toggle("light");
    for (let x = 0; x < para.length; x++) {
        para[x].classList.toggle("light");
    }
    console.log(tog.className)
    if (tog.className == "light") {
        let sun = document.querySelector(".mode");
        sun.id = "sun";
        sun.src = "sun (1).svg";
        console.log(1);
    } else {
        document.querySelector("body").style.transition = "all 0.3s"
        let moon = document.querySelector(".mode");
        moon.id = "moon";
        moon.src = "moon (2).svg";
        console.log(2);
    }

    
}

let mode = document.querySelector(".mode");
mode.addEventListener("click", lightMode);




