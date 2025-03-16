
let currentImageIndex = 0;
        const images = document.querySelectorAll('.image-container img');

        function nextImage() {
            images[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].classList.add('active');
        }
        
let currentImageIndexTrain = 0;
let currentImageIndexTea = 0;

function nextImage(type) {
    let images;
    if (type === 'train') {
        images = document.querySelectorAll('.image-container img');
        images[currentImageIndexTrain].classList.remove('active');
        currentImageIndexTrain = (currentImageIndexTrain + 1) % images.length;
        images[currentImageIndexTrain].classList.add('active');
    } else if (type === 'tea') {
        images = document.querySelectorAll('.image-container-tea img');
        images[currentImageIndexTea].classList.remove('active');
        currentImageIndexTea = (currentImageIndexTea + 1) % images.length;
        images[currentImageIndexTea].classList.add('active');
    }
}

// Automatically change tea images every 1 second
setInterval(() => {
    nextImage('tea');
}, 1800);