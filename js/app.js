
// 1 - creat list of 5 cat to display in cat gallery

// a.
let container = document.querySelector('.container');
let div = document.createElement('div');
div.className = 'cat-gallery';
container.appendChild(div);
// b.
let img = [];
let names = [];
let clickes = [0,0,0,0,0];
for (var i = 1; i <= 5; i++) {
    let imgbox = document.createElement('div');
    imgbox.className = "img-box"
    img[i] = document.createElement('img');
    img[i].setAttribute('src', `/css/cat-${i}.jpg`);
    img[i].className = 'cat-img';
    names[i] = document.createElement('h1');
    names[i].className = 'centered';
    names[i].innerText = `cat ${i}`;
    imgbox.appendChild(img[i]);
    imgbox.appendChild(names[i]);
    div.appendChild(imgbox);
}

// 2 - add eventlistener to image gallery
const selectedImg = document.createElement('img');
const selectedImgName = document.createElement('h1');
selectedImgName.className ='selectedImgName'
const selectedImgClicks = document.createElement('h1');
selectedImgClicks.className = 'selectedImgClicks'

div.addEventListener('click', (e) => {
    if (e.target.getAttribute('src')) {
        for(var i = 1; i <= 5 ; i++){
            if(img[i].getAttribute('src') === `${e.target.getAttribute('src')}`){
                selectedImgName.innerText = names[i].innerText;
            }
        }
        selectedImg.setAttribute('src', `${e.target.getAttribute('src')}`);
        selectedImg.className = 'selected-img';
        container.appendChild(selectedImg);
        container.appendChild(selectedImgName);
        container.appendChild(selectedImgClicks);
    }
});

// 4 - add eventlistener to cat area that shows num of clickes 
selectedImg.addEventListener('click' , (e) => {
    for(var i = 1; i <= 5 ; i++){
        if(img[i].getAttribute('src') === `${e.target.getAttribute('src')}`){
            clickes[i] += 1;
            selectedImgClicks.innerHTML =  clickes[i];
        }
        container.appendChild(selectedImgClicks);
    }
})