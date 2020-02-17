
// image 1 event 
// let image1 = document.querySelector(".cat-img-1");
// let numOfClickes1 = 0; 
// let counter1 = document.querySelector(".counter-1");
// counter1.innerHTML = numOfClickes1
// image1.addEventListener('click' , () => {
//     console.log('image was clicked');
//     numOfClickes1 += 1;
//     counter1.innerHTML = numOfClickes1
// })


// 1 - creat list of 5 cat to display in cat gallery

// a.
let container = document.querySelector('.container');
let div = document.createElement('div');
div.className = 'cat-gallery';
container.appendChild(div);
// b.
let img = [];
for (var i = 1; i <= 5; i++) {
    img[i] = document.createElement('img');
    img[i].setAttribute('src', `/css/cat-${i}.jpg`);
    img[i].className = 'cat-img';
    div.appendChild(img[i]);
}

// 2 - add eventlistener to image gallery

div.addEventListener('click', (e) => {
    if (e.target.getAttribute('src')) {
        let selectedImg = document.createElement('img');
        selectedImg.setAttribute('src', `${e.target.getAttribute('src')}`);
        selectedImg.className = 'selected-img';
        container.appendChild(selectedImg);
    }
});

// 3 - display the clicked cat in cat area 
// 4 - add eventlistener to cat area that shows num of clickes 
