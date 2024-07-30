export interface Item {
  id: number;
  imageUrl: string;
  alt: string;
}

export const sliderItems: Item[] = [
  { id: 1, imageUrl: "/img/gallery/01.webp", alt: "Slide 1" },
  { id: 2, imageUrl: "/img/gallery/02.webp", alt: "Slide 2" },
  { id: 3, imageUrl: "/img/gallery/03.webp", alt: "Slide 3" },
  { id: 4, imageUrl: "/img/gallery/01.webp", alt: "Slide 4" },
  { id: 5, imageUrl: "/img/gallery/02.webp", alt: "Slide 5" },
  { id: 6, imageUrl: "/img/gallery/03.webp", alt: "Slide 6" },
];
