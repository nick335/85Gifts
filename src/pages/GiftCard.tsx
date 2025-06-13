import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { CiHeart } from 'react-icons/ci'
import { ChevronLeft } from 'lucide-react'
import { useCart } from '../store/useCart'
import MobileBottomNav from '@/components/MobileNavTab'
import { config } from '../config'

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
        const response = await axios.get(`${config.BACKEND_URL}/api/gift/${_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
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
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='w-10 h-10 border-4 border-[#072ACD] border-t-transparent rounded-full animate-spin'></div>
        <p className='mt-4 text-lg'>Loading gift details...</p>
      </div>
    )
  }

  if (!giftDetail) {
    return (
      <div className='flex flex-col items-center justify-center h-screen text-red-500'>
        <p className='text-lg'>Gift not found</p>
        <Link to='/gifts' className='mt-4 text-blue-600 hover:underline'>
          Back to gifts
        </Link>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF]'>
      <div className='container mx-auto px-4 py-8'>
        <Link to='/gifts' className='inline-flex items-center mb-6 text-[#072ACD] hover:text-[#0221a8]'>
          <ChevronLeft size={24} className='mr-1' />
          Back to Gifts
        </Link>

        <div className='flex flex-col lg:flex-row gap-8 items-start'>
          {/* Image Section */}
          <div className='w-full lg:w-1/2 xl:w-2/5 relative'>
            <div className='relative rounded-lg overflow-hidden shadow-xl bg-white p-2'>
              <img
                src={giftDetail.imageUrl[0]}
                alt={giftDetail.name}
                className='w-full h-auto max-h-[500px] object-contain rounded-md'
              />
              <button className='absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white transition-colors'>
                <CiHeart className='text-[#072AC8]' size={24} />
              </button>
            </div>
          </div>

          {/* Details Section */}
          <div className='w-full lg:w-1/2 xl:w-3/5 bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow'>
            <h1 className='text-2xl md:text-3xl font-bold text-gray-800 mb-2'>{giftDetail.name}</h1>

            <p className='text-gray-600 mb-6'>{giftDetail.description}</p>

            <div className='flex items-center justify-between mb-8'>
              <span className='text-3xl font-bold text-[#072ACD]'>
                {new Intl.NumberFormat('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                }).format(giftDetail.price)}
              </span>
            </div>

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
              className='w-full py-6 bg-[#072ACD] hover:bg-[#0221a8] transition-colors'
            >
              <MdOutlineAddShoppingCart className='mr-2' size={20} />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <MobileBottomNav activeTab='Gifts' />
    </div>
  )
}