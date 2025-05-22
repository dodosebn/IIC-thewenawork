import img1 from '@/public/images/temp/download.webp';
import img2 from '@/public/assets/images/temp/sample-4.jpg';
import img3 from '@/public/assets/images/temp/infothree-header.jpg';
import img4 from '@/public/assets/images/temp/info-four-header.jpeg';
import img5 from '@/public/assets/images/temp/header-image-5.jpg'; // fixed
import { StaticImageData } from 'next/image';

type SidebarItem = {
  img: string | StaticImageData; // for Next.js imported images
  text: string;
  path: string;
  activeLabel: string;
};

const items: SidebarItem[] = [
  {
    img: img1,
    text: "Interior inspiration to kick-start your week",
    path: "/Features/interior-inspiration-to-kick-start-your-week",
    activeLabel: "WENA WORK",
  },
  {
    img: img2,
    text: "This new Mediterranean restaurant in Miami has Michelin cred",
    path: "/Features/this-new-mediterranean-restaurant-in-miami-has-michelin-cred",
    activeLabel: "WENA ONE",
  },
  {
    img: img3,
    text: "Stunning modern home with breathtaking outdoor space",
    path: "/Features/stunning-modern-home-with-breathtaking-outdoor-space",
    activeLabel: "WENA PRO",
  },
  {
    img: img4,
    text: "Another stunning modern home with breathtaking outdoor space",
    path: "/Features/another-stunning-modern-home-with-breathtaking-outdoor-space",
    activeLabel: "WENA FILM",
  },
  {
    img: img5,
    text: "Interior six inspiration to kick-start your week",
    path: "/Features/interior-six-inspiration-to-kick-start-your-week",
    activeLabel: "WENA SHOP",
  },
];

export default items;
