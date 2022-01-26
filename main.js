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

//Foto
let mainImg;

//Description
let mainDesc;


// Ciclo immagini
for (let i = 0; i < items.length; i++){
    mainImg = `<div class="img-big"> <img src="${items[i]}"> </div>`
    console.log(mainImg)
    mainDesc = `<div class="description"> <span>${title[i]}</span> <p> ${text[i]} </p></div>`
    console.log(mainDesc)
}