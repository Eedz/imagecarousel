// function that creates a div containing:
// button
// div with menu items (links?)
import "./styles.css";

let dropdowns = document.querySelectorAll(".dropdown");


dropdowns.forEach((item)=>{
    const btn = item.querySelector('button');

    btn.addEventListener('click', (event) => {
        event.stopPropagation();
        const menulist = item.querySelector('div');
        dropDown(menulist)
    });
})

// document.addEventListener('click', ()=>{
//    const menuDiv = document.getElementById("dd1");
//    menuDiv.classList.remove('visible');
//    menuDiv.classList.add('invisible');
// });

// const menuButton = document.getElementById("menu");
// menuButton.addEventListener('click', () => {
//     event.stopPropagation();
//     dropDown(menuButton)});

function dropDown (button){
    //const button = document.getElementById("dd1");
    button.classList.toggle('visible');
    button.classList.toggle('invisible');
}

