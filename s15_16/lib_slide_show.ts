let timer:number|null = null;
let running:boolean = true;
let speed:number = 2000;


export interface Slide {
    href:string;
    title:string;
};

interface INodes {
    image: HTMLImageElement| null;
    caption: HTMLElement | null;
};
interface IImgCache {
    cache: HTMLImageElement[];
    counter: number;
};

const nodes:INodes = {
    image: null,
    caption:null
}
const img:IImgCache = {
    cache : [],
    counter: 0
}

const stopSildeShow = ():void  => {
    if(timer!==null) {
        clearInterval(timer);
    }
}
const displayNextImage = () => {
    if (!nodes.image || !nodes.caption || img.cache.length === 0) return;

  img.counter = ++img.counter % img.cache.length;
  const image1 = img.cache[img.counter];
   if (!image1) return; 
  nodes.image.src = image1.src;
  nodes.image.alt = image1.alt;
  nodes.caption.textContent = image1.alt;
}

export const loadImages = (slides: Slide[]) => {
     for (const slide of slides) {
    const image = new Image();
    image.src = "images/" + slide.href;
    image.alt = slide.title;
    img.cache.push(image);
  }
}
 export const startSlideShow = ( image?: HTMLImageElement,caption?: HTMLElement) => {
    if (image && caption) {
    nodes.image = image;
    nodes.caption = caption;
  }

  displayNextImage();
  timer = window.setInterval(displayNextImage, speed);
}

export const getToggleHandler = (): ((evt: Event) => void) => {
  return (evt: Event): void => {
    if (running) {
      stopSildeShow();
    } else {
      startSlideShow();
    }

    const button = evt.currentTarget as HTMLInputElement;
    button.value = running ? "Resume" : "Pause";

    running = !running;
  };
};

export {};




