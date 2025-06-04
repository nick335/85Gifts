import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { CiHeart } from 'react-icons/ci'
import { ChevronLeft } from 'lucide-react'
// import flower from '../assets/flower.svg'
import { useCart } from '../store/useCart'
import MobileBottomNav from '@/components/MobileNavTab'

interface GiftDetail {
  _id: string
  name: string
  description: string
  price: number
  imageUrl: string[]
}
export default function GiftCard() {
  const { _id } = useParams()
  const { addToCart } = useCart()
  const [giftDetail, setGiftDetail] = useState<GiftDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGiftDetail = async () => {
      try {
        const token = localStorage.getItem('authToken')
        const response = await axios.get(`/api/api/gift/${_id}`, {
          headers: {
            // 'Cache-Control': 'no-cache',
            Authorization: `Bearer ${token}`,
          },
        })
        console.log('Fetched Gift Detail', response.data.message)
        setGiftDetail(response.data.message)
      } catch (error) {
        console.log('Error fetching gift', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGiftDetail()
  }, [_id])

  if (loading) {
    return (
      <div className='col-span-full flex flex-col items-center mt-10'>
        <div className='w-10 h-10 border-4 border-[#072ACD] border-t-transparent rounded-full animate-spin'></div>
        <div className='text-center py-10'>Loading...</div>
      </div>
    )
  }

  if (!giftDetail) {
    return <div className='text-center py-10 text-red-500'>Gift not found.</div>
  }

  return (
    <>
      <div className='w-[100%] h-[100%] pl-[20px] pt-[10px] bg-gradient-to-br from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF] flex flex-col lg:flex-row lg:gap-5 lg:items-center relative'>
        <div className='relative mt-5'>
          <img
            src={giftDetail.imageUrl[0]}
            alt={giftDetail.name}
            className='w-[350px] h-[400px] object-cover rounded-md shadow-xl'
          />
          <button className='absolute top-[15px] right-[27px] bg-[#B5BCFF] rounded-full p-1'>
            <CiHeart className='fill-[#072AC8]' size={24} />
          </button>
        </div>

        <div className='mt-2 mr-5 shadow-2xl pr-[10px] mb-[95px] bg-slate-50 px-5 py-5 rounded-md transition-transform duration-300 hover:scale-105'>
          <h2 className='text-lg font-bold'>{giftDetail.name}</h2>
          <h3>{giftDetail.description}</h3>
          <p className='text-[#444] text-2xl font-bold mt-[5px]'>
            {new Intl.NumberFormat('en-NG', {
              style: 'currency',
              currency: 'NGN',
            }).format(giftDetail.price)}
          </p>
          <Button
            onClick={() =>
              addToCart({
                _id: giftDetail._id,
                name: giftDetail.name,
                description: giftDetail.description,
                price: giftDetail.price,
                image: giftDetail.imageUrl[0],
                quantity: 1,
              })
            }
            className='bg-[#072AC8] hover:bg-[#0221a8] text-white px-24 py-6 rounded-md mt-[10px]'
          >
            <span>
              <MdOutlineAddShoppingCart />
            </span>
            Add to Cart
          </Button>
        </div>
        <Link to='/gifts' className='absolute top-1 left-3'>
          <button>
            <ChevronLeft size={24} className='stroke-[#072ACD]' />
          </button>
        </Link>
        <MobileBottomNav activeTab='Gifts' />
      </div>
    </>
  )
}
