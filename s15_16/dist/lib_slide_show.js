let timer = null;
let running = true;
let speed = 2000;
;
;
;
const nodes = {
    image: null,
    caption: null
};
const img = {
    cache: [],
    counter: 0
};
const stopSildeShow = () => {
    if (timer !== null) {
        clearInterval(timer);
    }
};
const displayNextImage = () => {
    if (!nodes.image || !nodes.caption || img.cache.length === 0)
        return;
    img.counter = (img.counter+1) % img.cache.length;
    const image1 = img.cache[img.counter];
    if (!image1)
        return;
    nodes.image.src = image1.src;
    nodes.image.alt = image1.alt;
    nodes.caption.textContent = image1.alt;
};
export const loadImages = (slides) => {
    for (const slide of slides) {
        const image = new Image();
        image.src = slide.href;
        image.alt = slide.title;
        img.cache.push(image);
    }
};
export const startSlideShow = (image, caption) => {
    if (image && caption) {
        nodes.image = image;
        nodes.caption = caption;
    }
    displayNextImage();
    timer = window.setInterval(displayNextImage, speed);
};
export const getToggleHandler = () => {
    return (evt) => {
        if (running) {
            stopSildeShow();
        }
        else {
            startSlideShow();
        }
        const button = evt.currentTarget;
        button.value = running ? "Resume" : "Pause";
        running = !running;
    };
};
export {};
//# sourceMappingURL=lib_slide_show.js.map