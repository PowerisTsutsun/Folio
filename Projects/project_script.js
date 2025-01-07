// Get elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// Add click event to all images with the 'zoomable' class
document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src; // Set the clicked image's source
    });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});
