/********variables************/
const btn = document.querySelector('.share-btn');
const parent = document.querySelector('.info-wrap');

btn.addEventListener('click', function (){
    parent.classList.toggle('clicked');
});