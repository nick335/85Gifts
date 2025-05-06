import { useState, useEffect } from 'react'
import { useCart } from '../store/useCart'
import { Link } from 'react-router-dom'
import axios from 'axios'
import MobileBottomNav from '@/components/MobileNavTab'
import SearchBarHome from '@/components/ui/search-bar-dashboard'
import avatar from '../assets/avatar-holder-img.svg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { GoBell } from 'react-icons/go'
import { IoMdCart } from 'react-icons/io'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CiHeart } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa'

interface Gift {
  _id: string
  name: string
  imageUrl: string[]
  price: number
  quantity: number
}
export default function Gifts() {
  const [gifts, setGifts] = useState<Gift[]>([])
  const [loading, setLoading] = useState(true)
  const [wishlist, setWishlist] = useState<string[]>([])

  const { addToCart,cartItems } = useCart()
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);



  const toggleWishlist = (giftId: string) => {
    setWishlist((prev) =>
      prev.includes(giftId)
        ? prev.filter((_id) => _id !== giftId)
        : [...prev, giftId]
    )
  }

  useEffect(() => {
    const fetchGifts = async () => {
      try {
        const token = localStorage.getItem('authToken')
        const response = await axios.get('api/api/gift/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        console.log('Gift API Response', response.data)
        setGifts(response.data.message)
      } catch (error) {
        console.log('Error fetching gifts', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGifts()
  }, [])

  return (
    <>
      <div className='w-[100%] h-[100%] pt-[15px] pl-[10px] pr-[10px] bg-gradient-to-br from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF]'>
        <div className='w-[100%] flex justify-end gap-[2.5rem] pr-[5px] lg:pr-[0] lg:items-center lg:gap-[15rem] '>
          <div>
            <SearchBarHome />
          </div>
          <div className='flex gap-1 lg:gap-2 lg:items-center'>
            <Link to='/Cart'>
            <button className='hidden lg:block bg-[#fff] border rounded-[50%] py-[8px] px-[8px]'>
              <IoMdCart size={22}/>
              {cartItemCount > 0 && (<span className='absolute top-2 bg-[#FFDA1F] text-[#072ACD] text-xs rounded-full px-1.5'>{cartItemCount}</span>)}
            </button>
            </Link>
            <button className='bg-[#fff] border rounded-[50%] py-[8px] px-[8px]'>
              <GoBell size={22} />
            </button>
            <div className='hidden lg:flex'>
              <Avatar>
                <AvatarImage src={avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        {/* Gifts Section */}
        <div className='mt-[55px] grid grid-cols-2 gap-x-6 gap-y-8 lg:gap-y-5 lg:place-items-center lg:grid-cols-6'>
          {loading ? (
            <div className='col-span-full flex flex-col items-center mt-10'>
              <div className="w-10 h-10 border-4 border-[#072ACD] border-t-transparent rounded-full animate-spin"></div>
            <p className='text-center col-span-full mt-10 text-lg'>
              Loading gifts...
            </p>
            </div>
          ) : gifts.length > 0 ? (
            gifts.map((gift) => (
              <div key={gift._id} className="relative w-[150px] h-[160px] group transform transition-transform duration-300 shadow-xl hover:scale-105 hover:shadow-lg">
              <Link to={`/gift/${gift._id}`}
               >
                <img
                  src={gift.imageUrl[0]}
                  alt={gift.name}
                  className='w-[170px] h-[115px] object-cover absolute top-0 left-0 z-10 rounded-t-md '
                />
              </Link>
              {/* Gift Cards */}
                <Card className='w-[170px] h-[150px] absolute top-[110px] rounded-t-none z-0'>
                  <CardHeader>
                    <CardTitle className='text-center absolute top-[7px] left-[1px]'>
                      {gift.name}
                    </CardTitle>
                    <CardDescription className='text-sm absolute top-[50px] left-[10px] text-[#444]'>
                      {new Intl.NumberFormat('en-NG', {
                        style: 'currency',
                        currency: 'NGN',
                      }).format(gift.price)}
                    </CardDescription>
                  </CardHeader>

                  {/* Add to cart button */}
                  <div className='hidden group-hover:flex absolute bottom-[10px] right-[35px]'>
                    <Button
                      onClick={() =>
                        addToCart({
                          _id: gift._id,
                          name: gift.name,
                          description: 'Gift item',
                          price: gift.price,
                          image: gift.imageUrl[0],
                          quantity: 1,
                        })
                      }
                      className='bg-[#072ACD] hover:bg-[#0221a8]'
                    >
                      Add to cart
                    </Button>
                  </div>
                </Card>

                {/* Add to wishlist button */}
                <button
                  type='button'
                  onClick={(e) => {
                    e.preventDefault()
                    toggleWishlist(gift._id)
                  }}
                  className='absolute bottom-[-30px] right-[-10px]'
                >
                  {wishlist.includes(gift._id) ? (
                    <FaHeart className='text-[#072AC8]' size={18} />
                  ) : (
                    <CiHeart className='fill-[#072AC8]' size={24} />
                  )}
                </button>
                </div>
            ))
          ) : (
            <p className='text-center col-span-full mt-10 text-lg'>
              No gifts available
            </p>
          )}
        </div>
        <MobileBottomNav activeTab='Gifts' />
      </div>
    </>
  )
}
