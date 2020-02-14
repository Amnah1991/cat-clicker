
// image 1 event 
let image1 = document.querySelector(".cat-img-1");
let numOfClickes1 = 0; 
let counter1 = document.querySelector(".counter-1");
counter1.innerHTML = numOfClickes1
image1.addEventListener('click' , () => {
    console.log('image was clicked');
    numOfClickes1 += 1;
    counter1.innerHTML = numOfClickes1
})


// image 2 event

let image2 = document.querySelector(".cat-img-2");
let numOfClickes2 = 0; 
let counter2 = document.querySelector(".counter-2");
counter2.innerHTML = numOfClickes2
image2.addEventListener('click' , () => {
    console.log('image was clicked');
    numOfClickes2 += 1;
    counter2.innerHTML = numOfClickes2
})