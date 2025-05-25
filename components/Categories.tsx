import { Link } from 'react-router-dom'
import { categories, CategoryData } from '../src/data/categories'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Categories() {
  return (
    <>
      <div className=''>
        <Select>
          <SelectTrigger className='w-[150px] border-none focus:ring-0'>
            <SelectValue
              className='placeholder:text-lg placeholder:font-bold'
              placeholder='Categories'
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              <SelectItem value='All'>Cakes</SelectItem>
              <SelectItem value='Birthday'>Flowers</SelectItem>
              <SelectItem value='Anniversary'>Hampers</SelectItem>
              <SelectItem value='Holiday'>Wine</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Link to='/Gifts'>
        <div className='grid grid-cols-2 gap-y-7 mt-[15px] lg:mt-[1rem] lg:flex lg:justify-between'>
          {categories.map((cats: CategoryData, idx) => (
            <div key={idx} className='relative'>
              <img
                src={cats.image}
                alt='cake'
                className='w-[150px] absolute top-[1px]'
              />
              <Card className='w-[150px] h-[180px]'>
                <CardHeader>
                  <CardTitle className='text-center top-[130px] left-[45px] absolute'>
                    {cats.title}
                  </CardTitle>
                  <CardDescription className='text-center text-[#000] absolute top-[140px] left-[16px]'>
                    {cats.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </Link>
    </>
  )
}
