const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document
    .querySelectorAll(".img-placeholder img, .section-img")
    .forEach((img) => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
    }
});