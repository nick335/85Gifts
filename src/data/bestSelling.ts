import perfume from '../assets/perfume.svg'
import roses from '../assets/roses.svg'
import weddingCake from '../assets/wedding-cake.svg'
import plant from '../assets/plant.svg'

export interface BestSellingData {
  image: string
  title: string
  price: string
  quantity: number
}

export const bestSelling: BestSellingData[] = [
  {
    image: perfume,
    title: 'Perfume',
    price: '2,500',
    quantity: 25,
  },
  {
    image: roses,
    title: 'Box of Roses',
    price: '5,600',
    quantity: 15,
  },
  {
    image: weddingCake,
    title: 'Wedding Cake',
    price: '16,500',
    quantity: 15,
  },
  {
    image: plant,
    title: 'Plant in a mug',
    price: '2,600',
    quantity: 10,
  },
]
