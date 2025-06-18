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
import { toast } from 'sonner'
import { config } from '../config'

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

  const { addToCart, cartItems } = useCart()
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

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
        const response = await axios.get(`${config.BACKEND_URL}/api/gift/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setGifts(response.data.message)
      } catch (error) {
        console.log('Error fetching gifts', error)
        toast.error('Error fetching gifts')
      } finally {
        setLoading(false)
      }
    }

    fetchGifts()
  }, [])

  return (
    <>
      <div className='w-full h-full pt-4 px-2.5 bg-gradient-to-br from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF]'>
        <div className='w-full flex justify-end gap-10 pr-1.5 lg:pr-0 lg:items-center lg:gap-[15rem]'>
          <div>
            <SearchBarHome />
          </div>
          <div className='flex gap-1 lg:gap-2 lg:items-center'>
            <Link to='/Cart'>
              <button className='hidden lg:block bg-white border rounded-full p-2 relative'>
                <IoMdCart size={22} />
                {cartItemCount > 0 && (
                  <span className='absolute -top-1 -right-1 bg-[#FFDA1F] text-[#072ACD] text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                    {cartItemCount}
                  </span>
                )}
              </button>
            </Link>
            <button className='bg-white border rounded-full p-2'>
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
        <div className='mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 xl:grid-cols-6 px-4'>
          {loading ? (
            <div className='col-span-full flex flex-col items-center mt-10'>
              <div className="w-10 h-10 border-4 border-[#072ACD] border-t-transparent rounded-full animate-spin"></div>
              <p className='text-center mt-10 text-lg'>
                Loading gifts...
              </p>
            </div>
          ) : gifts.length > 0 ? (
            gifts.map((gift) => (
              <div
                key={gift._id}
                className="relative w-full h-[280px] group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg mb-8"
              >
                <Link to={`/gift/${gift._id}`}>
                  <img
                    src={gift.imageUrl[0]}
                    alt={gift.name}
                    className='w-full h-[180px] object-cover rounded-t-md'
                  />
                </Link>

                {/* Gift Card */}
                <Card className='w-full h-[120px] absolute bottom-0 rounded-t-none border-t-0'>
                  <CardHeader className='p-3'>
                    <CardTitle className='text-sm line-clamp-1'>
                      {gift.name}
                    </CardTitle>
                    <CardDescription className='text-sm text-[#444]'>
                      {new Intl.NumberFormat('en-NG', {
                        style: 'currency',
                        currency: 'NGN',
                      }).format(gift.price)}
                    </CardDescription>
                  </CardHeader>

                  {/* Add to cart button */}
                  <div className='hidden group-hover:flex absolute bottom-3 right-3'>
                    <Button
                      onClick={(e) => {
                        e.preventDefault()
                        addToCart({
                          _id: gift._id,
                          name: gift.name,
                          description: 'Gift item',
                          price: gift.price,
                          image: gift.imageUrl[0],
                          quantity: 1,
                        })
                      }}
                      className='bg-[#072ACD] hover:bg-[#0221a8] text-xs h-8'
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
                  className='absolute top-2 right-2 bg-white/80 p-1 rounded-full'
                >
                  {wishlist.includes(gift._id) ? (
                    <FaHeart className='text-[#072AC8]' size={16} />
                  ) : (
                    <CiHeart className='text-[#072AC8]' size={20} />
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