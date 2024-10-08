export interface Slide {
  id: number;
  bgImage: string;
  img: string;

  title: string;
  name: string;
  description: string;
}

const data: Slide[] = [
  {
    id: 1,
    bgImage: "/img/slider/bg/01.webp",
    img: "/img/slider/mobile/01.webp",

    name: "ATVs Traveling",
    title: "Feel the adrenaline rush",
    description:
      "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
  },
  {
    id: 2,
    bgImage: "/img/slider/bg/02.webp",
    img: "/img/slider/mobile/02.webp",

    title: "Destroy your limitations",
    name: "Rock climbing",
    description:
      "Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.",
  },
  {
    id: 3,
    bgImage: "/img/slider/bg/03.webp",
    img: "/img/slider/mobile/03.webp",

    title: "Get Inspired",
    name: "Hot air ballooning",
    description:
      "Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.",
  },
  {
    id: 4,
    bgImage: "/img/slider/bg/04.webp",
    img: "/img/slider/mobile/04.webp",

    title: "Overcome your fears",
    name: "Skydiving",
    description:
      "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
  },
  {
    id: 5,
    bgImage: "/img/slider/bg/05.webp",
    img: "/img/slider/mobile/05.webp",

    title: "Trust the flow",
    name: "Rafting",
    description:
      "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
  },
];
export default data;
