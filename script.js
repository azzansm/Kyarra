// let currentImageIndex = 0;
// const images = [
//     { src: './img/gallery1.jpg', caption: 'Caption for the img' },
//     { src: './img/gallery2.jpg', caption: 'Caption for the img' },
//     { src: './img/gallery3.jpg', caption: 'Caption for the img' },
//     { src: './img/gallery4.jpg', caption: 'Caption for the img' },
//     { src: './img/gallery5.jpg', caption: 'Caption for the img' },
//     // Add more images and captions as needed
// ];

// function showImage(imageSrc, caption) {
//     currentImageIndex = images.findIndex(img => img.src === imageSrc);
//     const modal = document.getElementById('image-modal');
//     const fullImage = document.getElementById('full-image');
//     const imageCaption = document.getElementById('image-caption');
    
//     fullImage.src = imageSrc;
//     imageCaption.innerText = caption;
//     modal.style.display = "block";
// }

// function closeModal() {
//     const modal = document.getElementById('image-modal');
//     modal.style.display = "none";
// }

// function changeImage(direction) {
//     currentImageIndex += direction;

//     // Loop back to start or end of the array
//     if (currentImageIndex < 0) {
//         currentImageIndex = images.length - 1; // Go to last image
//     } else if (currentImageIndex >= images.length) {
//         currentImageIndex = 0; // Go back to first image
//     }

//     const { src, caption } = images[currentImageIndex];
//     const fullImage = document.getElementById('full-image');
//     const imageCaption = document.getElementById('image-caption');

//     fullImage.src = src;
//     imageCaption.innerText = caption;
// }

function showImage(imageSrc, caption) {
    const modal = document.getElementById('image-modal');
    const fullImage = document.getElementById('full-image');
    const imageCaption = document.getElementById('image-caption');
    
    fullImage.src = imageSrc;
    imageCaption.innerText = caption;
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = "none";
}
