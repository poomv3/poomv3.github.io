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

let trollClick = document.querySelector('.troll');

function spongebob() {
    let body = document.querySelector('div').parentElement;
    console.log('clicked');
    let img = document.createElement('img');
    img.classList.add('image');
    img.src = 'https://cdn.discordapp.com/attachments/1250821141359104161/1349394921165029417/5D7BE8C6-DA12-43C5-A090-18A4C29AA0F0_1_105_c.jpeg?ex=67d2f173&is=67d19ff3&hm=c1a4e986fe2a2ad5aed29d3847d0f13dcbfd69e4cb6510248d91df3b9ed380f9&';
    body.append(img);

}

trollClick.addEventListener("click", spongebob);
// trollHover.addEventListener("onmouseover", spongebob);