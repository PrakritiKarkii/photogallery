// Array of image data
const galleryImages = [
    {
        src: "images/flowers-pink-large.jpg",
        thumbnail: "images/flowers-pink-small.jpg",
        alt: "Pink Flowers",
        caption: "Pink Flowers - A beautiful view of pink flowers."
    },
    {
        src: "images/flowers-red-large.jpg",
        thumbnail: "images/flowers-red-small.jpg",
        alt: "Red Flowers",
        caption: "Red Flowers - Stunning red blossoms in full bloom."
    },
    {
        src: "images/flowers-white-large.jpg",
        thumbnail: "images/flowers-white-small.jpg",
        alt: "White Flowers",
        caption: "White Flowers - Elegant and serene white flowers."
    },
    {
        src: "images/flowers-purple-large.jpg",
        thumbnail: "images/flowers-purple-small.jpg",
        alt: "Purple Flowers",
        caption: "Purple Flowers - Beautiful purple flowers in the garden."
    },
    {
        src: "images/flowers-yellow-large.jpg",
        thumbnail: "images/flowers-yellow-small.jpg",
        alt: "Yellow Flowers",
        caption: "Yellow Flowers - Bright yellow flowers shining in the sun."
    }
];

// Elements
const highlightedImage = document.getElementById("highlighted");
const photoDescription = document.getElementById("photoDescription");
const thumbnailList = document.getElementById("thumbnailList");
const goBackButton = document.getElementById("goBack");
const goForwardButton = document.getElementById("goForward");

// Current image index
let currentImageIndex = 0;

// Initialize gallery
function initializeGallery() {
    // Populate thumbnails
    galleryImages.forEach((image, index) => {
        const listItem = document.createElement("li");
        const thumbnailImg = document.createElement("img");
        thumbnailImg.src = image.thumbnail;
        thumbnailImg.alt = image.alt;
        thumbnailImg.dataset.index = index;
        if (index === 0) thumbnailImg.classList.add("active-thumbnail");
        listItem.appendChild(thumbnailImg);
        thumbnailList.appendChild(listItem);
    });

    // Display the first image
    showImage(currentImageIndex);

    // Add event listeners for thumbnails
    document.querySelectorAll("#thumbnailList img").forEach(thumbnail => {
        thumbnail.addEventListener("click", (e) => {
            currentImageIndex = parseInt(e.target.dataset.index);
            showImage(currentImageIndex);
        });
    });

    // Add event listeners for navigation
    goBackButton.addEventListener("click", () => {
        navigateImages(-1);
    });

    goForwardButton.addEventListener("click", () => {
        navigateImages(1);
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") navigateImages(-1);
        if (e.key === "ArrowRight") navigateImages(1);
    });
}

// Display image based on index
function showImage(index) {
    const image = galleryImages[index];
    highlightedImage.src = image.src;
    highlightedImage.alt = image.alt;
    photoDescription.textContent = image.caption;
    document.querySelectorAll("#thumbnailList img").forEach(thumbnail => {
        thumbnail.classList.remove("active-thumbnail");
    });
    document.querySelector(`#thumbnailList img[data-index="${index}"]`).classList.add("active-thumbnail");
}

// Navigate images
function navigateImages(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = galleryImages.length - 1;
    if (currentImageIndex >= galleryImages.length) currentImageIndex = 0;
    showImage(currentImageIndex);
}

// Initialize gallery on page load
document.addEventListener("DOMContentLoaded", initializeGallery);
