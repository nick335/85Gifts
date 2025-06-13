import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NotebookPen, RotateCw, Star, X } from 'lucide-react'
import gloss from '../assets/lipgloss.svg'
import MobileBottomNav from '../../components/MobileNavTab'
import axios from 'axios'
import { toast } from 'sonner'
import { config } from '../config'

interface SingleOrder {
  _id: string
  items: OrderItem[]
  invoiceId: string
  shippingAddress: string
  giftName: string
  orderNumber: string
  updatedAt: string
}

interface OrderItem {
  giftId: string
  giftName: string
  quantity: number
  unitPrice: number
  totalPrice: number
  _id: string
}

function buildTimeline(currentStatus: string, updatedAt: string) {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
  const timelineSteps = [
    'Pending',
    'Processing',
    'Shipped',
    'Delivered',
    'Cancelled',
  ]
  const normalizedStatus = capitalize(currentStatus)
  const currentIndex = timelineSteps.indexOf(normalizedStatus)

  return timelineSteps.map((status, index) => {
    const isCurrent = index === currentIndex
    const isCompleted = index < currentIndex

    return {
      status,
      date:
        isCurrent || isCompleted
          ? new Date(updatedAt).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })
          : 'Est. -',
      completed: isCompleted,
      current: isCurrent,
    }
  })
}

export default function OrderHistory() {
  const { _id } = useParams()
  const [singleOrder, setSingleOrder] = useState<SingleOrder | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeline, setTimeline] = useState<
    { status: string; date: string; completed: boolean; current?: boolean }[]
  >([])

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const token = localStorage.getItem('authToken')
        const userId = localStorage.getItem('userId')
        const response = await axios.get(
          `${config.BACKEND_URL}/api/user/get-order/${userId}/${_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        // console.log(token)
        // console.log(userId)
        // console.log('Single Order Data:', response.data.data)
        setSingleOrder(response.data.data)
        toast.success("Order history updated")
        setTimeline(
          buildTimeline(response.data.data.status, response.data.data.updatedAt)
        )
      } catch (error) {
        console.log('No Order available', error)
      } finally {
        setLoading(false)
      }
    }

    fetchOrder()
  }, [_id])

  // const shippingData = {
  //   shippingTo: 'Mr Collin Asange',
  //   timeline: [
  //     { status: 'Pending', date: 'Aug 10', completed: true },
  //     { status: 'Processing', date: 'Aug 10', completed: true, current: true },
  //     { status: 'Shipped', date: 'Est. Aug 11', completed: false },
  //     { status: 'Delivered', date: 'Est. Aug 11', completed: false },
  //     { status: 'Cancelled', date: 'Est. Aug 11', completed: false },
  //   ],
  // }

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF] p-4 md:p-8 pb-24 md:pb-8'>
      {/* Main Container - Matching Cart Styling */}
      <div className='bg-white rounded-2xl shadow-lg max-w-6xl mx-auto overflow-hidden h-full'>
        {/* Header Section - Matching Cart's Progress Steps */}
        {loading ? (
          <div className='col-span-full flex flex-col items-center mt-10'>
            <div className='w-10 h-10 border-4 border-[#072ACD] border-t-transparent rounded-full animate-spin'></div>
            <p className='text-center col-span-full mt-10 text-lg'>
              Loading item...
            </p>
          </div>
        ) : singleOrder ? (
          <>
            <div className='bg-[#E8E5E5] p-4 flex justify-center items-center gap-4'>
              <div className='bg-white p-3 rounded-full'>
                <NotebookPen className='stroke-[#0724CD]' size={24} />
              </div>
              <h2 className='text-sm md:text-lg font-semibold ml-2'>
                Order History
              </h2>
            </div>
            {/* Order Status*/}
            <div className='px-6 md:flex md:justify-between md:px-8'>
              <div className='mt-6 mb-10 bg-[#E8E5E5] rounded-xl p-5 md:p-0 md:ml-10 md:bg-white md:mb-0'>
                <h2 className='font-semibold text-xl md:text-2xl mb-6'>
                  Order Status
                </h2>
                <p className='text-md md:text-sm text-gray-600 mb-4'>
                  Shipping to:{' '}
                  <span className='font-medium'>
                    {singleOrder.shippingAddress}
                  </span>
                </p>
                <div className='relative'>
                  {timeline.map((step, index) => (
                    <div key={index} className='mb-8 relative'>
                      {/* Vertical line */}
                      {index < timeline.length - 1 && (
                        <div
                          className={`absolute left-[6px] top-[14px] w-0.5 h-full ${step.completed ? 'bg-[#072ACD]' : 'bg-gray-200'
                            }`}
                        ></div>
                      )}

                      {/* Timeline dot */}
                      <div className='flex items-start'>
                        <div
                          className={`rounded-full h-3 w-3 mt-1.5 ${step.completed ? 'bg-[#072ACD]' : 'bg-gray-200'
                            } ${step.current ? 'ring-2 ring-[#072ACD]' : ''}`}
                        ></div>

                        <div className='ml-4'>
                          <p className='font-medium'>{step.status}</p>
                          <p className='text-sm text-gray-500'>{step.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='w-px my-5 mr-0 bg-gray-300 mx-4 text-left'></div>

              {/* Order Details Section */}
              <div className='md:w-[60%] mb-20'>
                <h2 className='text-sm font-semibold text-gray-500 text-end mt-3'>
                  Order #{singleOrder.orderNumber}
                </h2>
                <div className='mb-4 mt-6 text-start md:flex md:justify-between'>
                  <h3 className='font-semibold text-lg md:text-xl mb-4'>
                    Purchased Item
                  </h3>
                  <p className='text-sm font-semibold'>
                    Ships to {singleOrder.shippingAddress}
                  </p>
                  {/* <a href='#' className='text-blue-600 text-sm font-semibold'>
                  Details
                </a> */}
                </div>

                <div className='border rounded-lg overflow-hidden bg-gray-50 mx-3'>
                  <div className='h-36 bg-gray-100'>
                    <img
                      src={gloss}
                      alt='A set of lip gloss'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='p-3 text-center flex gap-5 justify-between'>
                    <h4 className='font-semibold'>
                      {singleOrder.items[0]?.giftName}
                    </h4>
                    <p className='text-sm font-semibold text-gray-600'>
                      {singleOrder.items[0]?.quantity}
                    </p>
                    <p className='text-sm font-semibold text-gray-600'>
                      {new Intl.NumberFormat('en-NG', {
                        style: 'currency',
                        currency: 'NGN',
                      }).format(singleOrder.items[0]?.unitPrice)}
                    </p>
                    <p className='text-sm font-semibold text-gray-600'>
                      {new Intl.NumberFormat('en-NG', {
                        style: 'currency',
                        currency: 'NGN',
                      }).format(singleOrder.items[0]?.totalPrice)}
                    </p>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className='flex flex-wrap md:gap-5 gap-7 mt-20 pl-8'>
                  <button className='flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50'>
                    <Star className='stroke-[#072ACD]' size={20} />
                    <span className='font-semibold'>Write a Review</span>
                  </button>
                  <button className='flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50'>
                    <RotateCw className='stroke-[#072ACD]' size={20} />
                    <span className='font-semibold'>Buy Again</span>
                  </button>
                  <button className='flex items-center gap-2 px-4 py-2 border rounded-lg text-red-500 hover:bg-red-50'>
                    <X size={18} />
                    <span className='font-semibold'>Cancel Order</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Item not found</p>
        )}
        {/* Mobile Bottom Navigation */}
        <MobileBottomNav activeTab='Orders' />
      </div>
    </div>
  )
}
