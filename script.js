let imgBox = document.querySelector('.img-box');
let img = document.querySelector('#ed-img');
let upload = document.querySelector('#upload');

let saturation = document.querySelector('#saturation');
let contrast = document.querySelector('#contrast');
let brightness = document.querySelector('#brightness');
let sepia = document.querySelector('#sepia');
let grayScale = document.querySelector('#grayscale');
let blur = document.querySelector('#blur');
let hueRotate = document.querySelector('#hue-rotate');

let download = document.querySelector('#download');
let reset = document.querySelector('#reset');

function resetValues(){
    img.style.filter = 'none';
    saturation.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayScale.value = '0';
    blur.value = '0';
    hueRotate.value = '0';
}

window.onload = function(){
    imgBox.style.display = 'none';
    download.style.display = 'none';
    reset.style.display = 'none';
}

upload.onchange = function(){
    resetValues();
    imgBox.style.display = 'block';
    download.style.display = 'block';
    reset.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
        img.src = file.result;
    }
    
}

let filters = document.querySelectorAll('ul li input');

filters.forEach(filter =>{ 
    filter.addEventListener('input', function(){
        img.style.filter = `
            saturate(${saturation.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayScale.value})
            blur(${blur.value}px)
            hue-rotate(${hueRotate.value}deg)
        `
    })
}   )

reset.onclick =function(){
    resetValues();
}