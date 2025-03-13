function randomCoords(location) {
    let randX = Math.floor((Math.random() * 300) + 150);
    let randY = Math.floor((Math.random() * 300) + 100);
    let randSign = Math.floor(Math.random() * (2));
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
}


function hard() {
    let hard = document.querySelector('#hard');
    id = hard.getAttribute('id');
    spawnButton(id);
}

function medium() {
    let medium = document.querySelector('#medium');
    id = medium.getAttribute('id');
    spawnButton(id);
}

function easy() {
    let easy = document.querySelector('#easy');
    id = easy.getAttribute('id');
    spawnButton(id);
}

function spawnButton(id) {
    let difficulty = document.querySelector('.difficulty');
    let btn = document.createElement('div');
    btn.classList.add('troll');

    btn.addEventListener('mouseover', troll);
    btn.addEventListener('click',spongebob);

    let text = document.createElement('p');
    text.style.margin = 'auto';
    text.innerText = 'Click me!';
    btn.append(text);

    let body = document.querySelector('body');
    console.log(body);

    let box = document.querySelector('.box');
    box.append(btn);


    if (id == 'medium') {
        body.style.cursor = 'none';
    }
    
    if (id == 'hard') {
        for (let x = 0; x < 4; x++) {

            let fakeBtn = document.createElement('div');
            fakeBtn.classList.add('trollFake');

            fakeBtn.setAttribute('id', x);

            fakeBtn.addEventListener('mouseover', trollAll);

            let text = document.createElement('p');
            text.style.margin = 'auto';
            text.innerText = 'Click me!';
            fakeBtn.append(text);

            let body = document.querySelector('body');
            console.log(body);

            realBtn = document.querySelector('.troll');
            realBtn.append(fakeBtn);

            fakeBtn.style.position = 'absolute';

            console.log(document.querySelectorAll('.trollFake'));
            
            body.style.cursor = 'none';

        }
    }

    difficulty.remove();

    btn.style.position = 'relative';
    randomCoords(fakeBtn);
    randomCoords(btn);
}

function troll() {
    console.log('mouse over');  
    let location = document.querySelector('.troll');

    randomCoords(location);

}

function trollAll() {
    let location = document.querySelectorAll('.trollFake');
    console.log(location);
    for (let x = 0; x <= location.length; x++) {
        randomCoords(location[x]);
        troll();
    }
}

let clickEasy = document.querySelector('#easy').addEventListener("click", easy);
let clickMedium = document.querySelector('#medium').addEventListener("click", medium);
let clickHard = document.querySelector('#hard').addEventListener("click", hard);

function spongebob() {
    let body = document.querySelector('div').parentElement;
    console.log('clicked');
    let img = document.createElement('img');
    img.classList.add('image');
    img.src = 'https://cdn.discordapp.com/attachments/1250821141359104161/1349394921165029417/5D7BE8C6-DA12-43C5-A090-18A4C29AA0F0_1_105_c.jpeg?ex=67d2f173&is=67d19ff3&hm=c1a4e986fe2a2ad5aed29d3847d0f13dcbfd69e4cb6510248d91df3b9ed380f9&';
    body.append(img);

    let text = document.createElement('p');
    text.classList.add('win-text');
    text.innerText = "you win.";
    body.append(text);

    let btn = document.querySelector('.troll');
    btn.remove();

}

