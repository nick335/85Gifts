import cake from "../assets/cake.svg";
import flower from "../assets/flower.svg";
import hamper from "../assets/hamper.svg";
import wine from "../assets/wine.svg";

 export interface CategoryData {
  image: string
  title: string
  desc: string
 }

export const categories: CategoryData[] = [
  {
    image: cake,
    title: 'Cakes',
    desc: 'for every occasion',
  },
  {
    image: flower,
    title: 'Flowers',
    desc: 'to show you care',
  },
  {
    image: hamper,
    title: 'Hampers',
    desc: 'thoughts in a bag',
  },
  {
    image: wine,
    title: 'Wines',
    desc: 'celebrate in style',
  },
]
