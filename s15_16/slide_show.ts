import { getElement } from "./lib_DOM";
 import { loadImages,startSlideShow,getToggleHandler, } from "./lib_slide_show";
 import type { Slide, } from "./lib_slide_show";

const slides: Slide[] = [
    {href:"s15_16/img/fisherman-holding-fishing-rod-savoring-600nw-2650137285.webp", title:"1122"},
    {href: "s15_16/img/istockphoto-1092160614-612x612.jpg",title: "12112"},
    {href:"s15_16/img/photo-0-1484210828490.webp",title: "1222"},
    {href : "s15_16/img/pngtree-a-fishing-rod-with-sea-background-fishing-image_15672798.jpg" , title :"122"}
];
  const pauseBtn = getElement<HTMLElement>("#pause_resume") as HTMLElement;
  pauseBtn.onclick = getToggleHandler();
  loadImages(slides);

  const imageEl = getElement<HTMLImageElement>("#image");
  const captionEl = getElement<HTMLElement>("#caption");
    if (imageEl && captionEl) {
    startSlideShow(imageEl, captionEl);
  }
