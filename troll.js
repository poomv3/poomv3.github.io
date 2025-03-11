function troll() {
    let location = document.querySelector('.troll');
    let randX = Math.floor(Math.random() * (100));
    let randY = Math.floor(Math.random() * (100));
    let randSign = Math.floor(Math.random() * (2));
    let rect = location.getBoundingClientRect() // Y
    switch (randSign) {
        case 0:
            randX *= -1;
            break;
        case 1:
            randY *= -1;
            break;
        default:
            console.log("Error");
            break;
    }
    location.style.transform = "translateY(" + randY + "px)" + "translateX(" + randX + "px)";
    console.log("RandY = "+randY);
    console.log("RandX = "+randX);
    let visibleOnX = rect.x >= 0 && rect.right <= window.innerWidth;
    let visibleOnY = rect.top >= 0 && rect.bottom <= window.innerHeight;
    console.log(visibleOnX && visibleOnY);
    if (visibleOnX && visibleOnY == true) {
        console.log("true");
    }
}