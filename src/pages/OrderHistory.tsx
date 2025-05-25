import { NotebookPen, RotateCw, Star, X } from 'lucide-react'
import MobileBottomNav from '../../components/MobileNavTab'

export default function OrderHistory() {
  const orders = [
    {
      id: '120233332233',
      datePlaced: 'Aug 10',
      status: 'Processing',
      items: [
        {
          name: 'Lilium flowers',
          category: 'Flowers',
          image: '/src/assets/order-1.jpg',
        },
        {
          name: 'Red velvet cupcakes',
          category: 'Cakes',
          image: '/src/assets/order-2.png',
        },
        {
          name: "Jacob's creek",
          category: 'Wines',
          image: '/src/assets/order-3.png',
        },
      ],
      shippingTo: 'Mr Collin Asange',
      timeline: [
        { status: 'Pending', date: 'Aug 10', completed: true },
        {
          status: 'Processing',
          date: 'Aug 10',
          completed: true,
          current: true,
        },
        { status: 'Shipped', date: 'Est. Aug 11', completed: false },
        { status: 'Delivered', date: 'Est. Aug 11', completed: false },
        { status: 'Cancelled', date: 'Est. Aug 11', completed: false },
      ],
    },
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF] p-4 md:p-8 pb-24 md:pb-8'>
      {/* Main Container - Matching Cart Styling */}
      <div className='bg-white rounded-2xl shadow-lg max-w-6xl mx-auto overflow-hidden'>
        {/* Header Section - Matching Cart's Progress Steps */}
        <div className='bg-[#E8E5E5] p-4'>
          <div className='flex justify-center items-center gap-4'>
            <div className='flex items-center'>
              <div className='bg-white p-3 rounded-full'>
                <NotebookPen className='text-blue-600' size={24} />
              </div>
              <h2 className='text-sm md:text-lg font-semibold ml-2'>
                Order History
              </h2>
            </div>
          </div>
        </div>

        {/* Order Content */}
        <div className='p-4 md:p-6'>
          {orders.map((order) => (
            <div key={order.id} className='flex flex-col md:flex-row gap-6'>
              {/* Timeline Section */}
              <div className='md:w-[40%] bg-[#E8E5E5] rounded-2xl p-5 h-fit'>
                <h2 className='font-semibold text-xl md:text-2xl mb-6'>
                  Order Status
                </h2>

                <div className='relative'>
                  {order.timeline.map((step, index) => (
                    <div key={index} className='mb-8 relative'>
                      {/* Vertical line */}
                      {index < order.timeline.length - 1 && (
                        <div
                          className={`absolute left-[6px] top-[14px] w-0.5 h-full ${
                            step.completed ? 'bg-blue-600' : 'bg-gray-200'
                          }`}
                        ></div>
                      )}

                      {/* Timeline dot */}
                      <div className='flex items-start'>
                        <div
                          className={`rounded-full h-3 w-3 mt-1.5 ${
                            step.completed ? 'bg-blue-600' : 'bg-gray-200'
                          } ${step.current ? 'ring-2 ring-blue-200' : ''}`}
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

              {/* Order Details Section */}
              <div className='md:w-[60%]'>
                <div className='flex justify-between items-center mb-4'>
                  <div>
                    <h2 className='text-sm font-semibold text-gray-500'>
                      Order #{order.id}
                    </h2>
                    <p className='text-sm font-semibold'>
                      Ships to {order.shippingTo}
                    </p>
                  </div>
                  <a href='#' className='text-blue-600 text-sm font-semibold'>
                    Details
                  </a>
                </div>

                <h3 className='font-semibold text-lg md:text-xl mb-4'>
                  Purchased Items
                </h3>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6'>
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className='border rounded-lg overflow-hidden bg-gray-50'
                    >
                      <div className='h-32 bg-gray-100'>
                        <img
                          src={item.image}
                          alt={item.name}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div className='p-3 text-center'>
                        <h4 className='font-semibold'>{item.category}</h4>
                        <p className='text-sm font-semibold text-gray-600'>
                          {item.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className='flex flex-wrap justify-center gap-4'>
                  <button className='flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50'>
                    <Star className='text-blue-600 font-semibold' size={18} />
                    <span className='font-semibold'>Write a Review</span>
                  </button>
                  <button className='flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50'>
                    <RotateCw size={18} />
                    <span className='font-semibold'>Buy Again</span>
                  </button>
                  <button className='flex items-center gap-2 px-4 py-2 border rounded-lg text-red-500 hover:bg-red-50'>
                    <X size={18} />
                    <span className='font-semibold'>Cancel Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activeTab='OrderHistory' />
    </div>
  )
}
