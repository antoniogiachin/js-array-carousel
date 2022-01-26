// Creo 3 array
const items = ['img/01.jpg' ,'img/02.jpg' , 'img/03.jpg' , 'img/04.jpg' , 'img/05.jpg' , ];

const title = ['Svezia' , 'Svizzera' , 'Gran Bretagna' , 'Germania' , 'Paradise']; 

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// Inizializzo variabile div main img
let mainImg = '';

let thumbImg = '';

//ciclo elementi array for
for (let i = 0; i < items.length; i++){
    mainImg += `<div class="img-big"> <img src="${items[i]}" > <div class ="description"> <span class = "country">${title[i]}</span> <p class="country-text">${text[i]}</p> </div> </div>`;

    thumbImg += `<div class= "col-right"> <img class="img-thumb" src="${items[i]}"> </div>`;
}

//inserisco i DIV creati con il ciclo all'interno del contenitore .col-70 & .col-30

//col-70
let colBig = document.querySelector(".col-70");
colBig.innerHTML = mainImg;

//col-30
let colLittle = document.querySelector(".thumbs-container");
colLittle.innerHTML=thumbImg;

// Provo a impostare bottone
let imgBigCounter = 0;

let imgThumbCounter = 0;

// let imgBigEraser = -1;

let imgBig = document.getElementsByClassName('img-big');

imgBig[imgBigCounter].classList.add('active');

let imgThumb = document.getElementsByClassName('img-thumb');
imgThumb[imgThumbCounter].classList.add('active');

// const down = document.querySelector('.down');
// down.addEventListener('click',

//     function(){

//         imgBigCounter += 6 - 5;
//         imgBigEraser += 1
//         console.log(imgBigCounter);

//         imgBig[imgBigCounter].classList.add('active')
//         imgBig[imgBigEraser].classList.remove('active')

//     }


// );


// for (let i = 0 ; i < imgBig.length ; i++){
//     let imgBigAlternate = imgBig[i];
//     console.log(imgBigAlternate);
// }

