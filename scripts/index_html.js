///////////////////////////////////////////////////////
/* 
    == Water drops effect using AnimeJS ==
    June 1st, 2019

    Was looking through PixiJS when it struck me
    that it was too powerful of a tool to create a
    simple backdrop effect, when I came accross AnimeJS.

    Wanted to create a really simple effect with pure
    JS so this seemed like the easiest way to achieve this.

    AnimeJS is made by Julian Garnier: https://juliangarnier.com/
*/
window.addEventListener('load', fn, false);
function randomizePosition(){
    let orbs = document.getElementsByClassName("orb");
    let minX = 0.0;
    let maxX = 100.0;
    let minY = 0.0;
    let maxY = 100.0;
    Array.from(orbs).forEach(function(element, index, arr){
        let rx = Math.random();
        let ry = Math.random();
        let random_x = minX + (maxX - minX) * rx;
        let random_y = minY + (maxY - minY) * ry;

        element.style.left = `${random_x}vw`;
        element.style.top = `${random_y}vh`;
    });
}
function fn(){
    const ao = anime({
        targets: '.orb',
        duration: 4000,
        loopBegin: randomizePosition,
        delay: function(et, i, t){
            return i * 500 + (1000 * Math.random());
        },
        scale: function(el, i, t){
            let minScale = 100.0;
            let maxScale = 400.0;
            let random = Math.random();
            return minScale + (maxScale - minScale) * random;
        },
        opacity: 0,
        loop: true,
        easing: 'cubicBezier(.0, .05, .05, .32)'
    });
}
///////////////////////////////////////////////////////