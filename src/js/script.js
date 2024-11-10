'use strict';

const cartBtn = document.getElementById('cart-btn');
const moboMenu = document.getElementById('mobo-menu');
const menuCloseBtn = document.getElementById('mobo-menu-close-btn')
const menuOpenBtn = document.getElementById('mobo-menu-open-btn')
const overlay = document.getElementById('overlay')
const thumbnails = document.querySelectorAll('#thumbnails img')
const thumbnailsL = document.querySelectorAll('#thumbnails-l img')
const nextBtn = document.getElementById('next-btn')
const nextBtnL = document.getElementById('next-btn-l')
const previousBtn = document.getElementById('previous-btn')
const previousBtnL = document.getElementById('previous-btn-l')
const heroImage = document.getElementById('hero-image')
const heroImageL = document.getElementById('hero-image-l')
const plusBtn = document.getElementById('plus-btn')
const minusBtn = document.getElementById('minus-btn')
const quantityDiv = document.getElementById('quantity')
const addToCart = document.getElementById('add-to-cart')
const lightBoxContainer = document.getElementById('dbl-screen')
const lightBoxRemover = document.getElementById('cross-l')
let quantity = 0;
let totalPrice = 0.00;
let step = 1;

let lStep = step;
menuOpenBtn.addEventListener('click', function(e){
    overlay.classList.toggle('opacity-down');
    moboMenu.classList.remove('hidden')
});
menuCloseBtn.addEventListener('click', function(e){
    overlay.classList.toggle('opacity-down')
    moboMenu.classList.add('hidden');
});

const images = {
    1 : './images/image-product-1.jpg',
    2 : './images/image-product-2.jpg',
    3 : './images/image-product-3.jpg',
    4 : './images/image-product-4.jpg'
}

nextBtn.addEventListener('click', function(e){
    if(step<4) step++;
    else step = 1;
    loadHeroImage(step)
})
nextBtnL.addEventListener('click', function(e){
    thumbnailsL.forEach((thumb) => thumb.classList.remove('thumbnail-open'));
    if(lStep<4) lStep++;
    else lStep = 1;
    thumbnailsL.forEach((thumb) => {if(thumb.getAttribute('data-plan') == lStep) thumb.classList.add('thumbnail-open')});
    loadHeroImagel(lStep)

})
previousBtn.addEventListener('click', function(e){
    if(step>2) step--;
    else step = 4;
    loadHeroImage(step)
})
previousBtnL.addEventListener('click', function(e){
    thumbnailsL.forEach((thumb) => thumb.classList.remove('thumbnail-open'));
    if(lStep>1) lStep--;
    else lStep = 4;
    thumbnailsL.forEach((thumb) => {if(thumb.getAttribute('data-plan') == lStep) thumb.classList.add('thumbnail-open')});
    loadHeroImagel(lStep)

})

function loadHeroImage(step){
    heroImage.src = images[step];
}
function loadHeroImagel(step){
    heroImageL.src = images[step];
}

loadHeroImage(step);

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', function(e){
        thumbnails.forEach((thumb) => thumb.classList.remove('thumbnail-open'));
        thumbnail.classList.add('thumbnail-open');
        step = thumbnail.getAttribute('data-plan');
        loadHeroImage(step);
    })
})


thumbnailsL.forEach((thumbnail) => {
    thumbnail.addEventListener('click', function(e){
        thumbnailsL.forEach((thumb) => thumb.classList.remove('thumbnail-open'));
        thumbnail.classList.add('thumbnail-open');
        step = thumbnail.getAttribute('data-plan');
        loadHeroImagel(step);
    })
})

plusBtn.addEventListener('click', function(e){
    e.preventDefault()
    quantity++;
    totalPrice = (125*quantity).toFixed(2);
    quantityDiv.textContent = quantity;
})
minusBtn.addEventListener('click', function(e){
    e.preventDefault()
    if(quantity > 0){
        quantity--;
        totalPrice = (125*quantity).toFixed(2);
        quantityDiv.textContent = quantity;
    }
})


const cart = document.getElementById('cart')
const ctPrice = document.getElementById('ct-price')
const cq = document.getElementById('cq')
const genMessage = document.getElementById('gen-message');
const cartContent = document.getElementById('cart-content')
const cartTopQn = document.getElementById('cart-top-qn');
addToCart.addEventListener('click', function(e){
    e.preventDefault()
    cq.textContent = quantity;
    ctPrice.innerHTML = `$${totalPrice}`;
    genMessage.classList.toggle('hidden');
    cartContent.classList.toggle('hidden');
    cartTopQn.classList.remove('hidden')
    cartTopQn.textContent = quantity;
})

cartBtn.addEventListener('click', function(e){
    e.preventDefault()
    cart.classList.toggle('hidden')
})

const cartDelete = document.getElementById('c-delete')
cartDelete.addEventListener('click', function(e){
    cartContent.classList.toggle('hidden')
    genMessage.classList.toggle('hidden');
    cartTopQn.classList.add('hidden')
})


heroImage.addEventListener('dblclick', function(e){
    if(window.innerWidth >= 768){
        lStep = step;
        overlay.classList.toggle('opacity-down')
        lightBoxContainer.classList.toggle('hidden');
        loadHeroImagel(lStep)
    }
});


lightBoxRemover.addEventListener('click', function(){
    lightBoxContainer.classList.add('hidden');
    overlay.classList.toggle('opacity-down')
})

overlay.addEventListener('click', function(){
    if(!lightBoxContainer.classList.contains('hidden')) {
        lightBoxContainer.classList.add('hidden')
        overlay.classList.toggle('opacity-down')
    }
});

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        lightBoxContainer.classList.add('hidden');
        moboMenu.classList.add('hidden')
        cart.classList.add('hidden')
        if(overlay.classList.contains('opacity-down'))
        overlay.classList.toggle('opacity-down')
    }
})