import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NotebookPen } from 'lucide-react'
import MobileBottomNav from '../../components/MobileNavTab'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { config } from '../config'

interface Orders {
  _id: string
  _v: number
  userId: string
  orderNumber: string
  createdAt: string
  shippingAddress: string
}

export default function Orders() {
  const [orders, setOrders] = useState<Orders[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('authToken')
        const userId = localStorage.getItem('userId')
        const res = await axios.get(`${config.BACKEND_URL}/api/user/get-user-orders/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        console.log(res.data)
        setOrders(res.data.data)
      } catch (error) {
        console.log(
          'Error fetching orders:',
          error
        )
        toast.error('Error fetching orders')
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [])

  // const orders = [
  //     {
  //         id: "120233332233",
  //         datePlaced: "Aug 10",
  //         status: "Processing",
  //         items: [
  //             { name: "Lilium flowers", category: "Flowers", image: "/src/assets/order-1.jpg" },
  //             { name: "Red velvet cupcakes", category: "Cakes", image: "/src/assets/order-2.png" },
  //         ],
  //         shippingTo: "Mr Collin Asange",
  //     },
  //     {
  //         id: "120233332234",
  //         datePlaced: "Aug 12",
  //         status: "Delivered",
  //         items: [
  //             { name: "Jacob's creek", category: "Wines", image: "/src/assets/order-3.png" },
  //         ],
  //         shippingTo: "Ms Jane Doe",
  //     },
  //     {
  //         id: "120233332233",
  //         datePlaced: "Aug 10",
  //         status: "Processing",
  //         items: [
  //             { name: "Lilium flowers", category: "Flowers", image: "/src/assets/order-1.jpg" },
  //             { name: "Red velvet cupcakes", category: "Cakes", image: "/src/assets/order-2.png" },
  //         ],
  //         shippingTo: "Mr Collin Asange",
  //     },
  //     {
  //         id: "120233332234",
  //         datePlaced: "Aug 12",
  //         status: "Delivered",
  //         items: [
  //             { name: "Jacob's creek", category: "Wines", image: "/src/assets/order-3.png" },
  //         ],
  //         shippingTo: "Ms Jane Doe",
  //     },
  //     {
  //         id: "120233332233",
  //         datePlaced: "Aug 10",
  //         status: "Processing",
  //         items: [
  //             { name: "Lilium flowers", category: "Flowers", image: "/src/assets/order-1.jpg" },
  //             { name: "Red velvet cupcakes", category: "Cakes", image: "/src/assets/order-2.png" },
  //         ],
  //         shippingTo: "Mr Collin Asange",
  //     },
  //     {
  //         id: "120233332234",
  //         datePlaced: "Aug 12",
  //         status: "Delivered",
  //         items: [
  //             { name: "Jacob's creek", category: "Wines", image: "/src/assets/order-3.png" },
  //         ],
  //         shippingTo: "Ms Jane Doe",
  //     },
  //     {
  //         id: "120233332233",
  //         datePlaced: "Aug 10",
  //         status: "Processing",
  //         items: [
  //             { name: "Lilium flowers", category: "Flowers", image: "/src/assets/order-1.jpg" },
  //             { name: "Red velvet cupcakes", category: "Cakes", image: "/src/assets/order-2.png" },
  //         ],
  //         shippingTo: "Mr Collin Asange",
  //     },
  //     {
  //         id: "120233332234",
  //         datePlaced: "Aug 12",
  //         status: "Delivered",
  //         items: [
  //             { name: "Jacob's creek", category: "Wines", image: "/src/assets/order-3.png" },
  //         ],
  //         shippingTo: "Ms Jane Doe",
  //     },
  // ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF] p-4 md:p-8 pb-24 md:pb-8'>
      {/* Main Container */}
      <div className='bg-white rounded-2xl shadow-lg max-w-6xl mx-auto overflow-hidden'>
        {/* Header Section */}
        <div className='bg-[#E8E5E5] p-4'>
          <div className='flex justify-center items-center gap-4'>
            <div className='flex items-center'>
              <div className='bg-white p-3 rounded-full'>
                <NotebookPen className='text-blue-600' size={24} />
              </div>
              <h2 className='text-sm md:text-lg font-semibold ml-2'>
                All Orders
              </h2>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className='p-3 md:p-6'>
          {loading ? (
            <div className='col-span-full flex flex-col items-center mt-10'>
              <div className="w-10 h-10 border-4 border-[#072ACD] border-t-transparent rounded-full animate-spin"></div>
              <p className='text-center col-span-full mt-10 text-lg'>
                Loading orders...
              </p>
            </div>
          ) : orders && orders.length > 0 ? (
            orders.map((order) => (
              <div
                key={order._id}
                className='border rounded-lg p-4 mb-6 bg-gray-50'
              >
                <div className='flex justify-between items-center'>
                  <div>
                    <h2 className='text-sm font-semibold text-gray-500'>
                      Order #{order.orderNumber}
                    </h2>
                    <p className='text-sm font-semibold'>Ships to {order.shippingAddress}</p>
                    <p className='text-sm text-gray-500'>
                      Placed on {order.createdAt}
                    </p>
                  </div>
                  <Button className='bg-[#072ACD] self-end md:self-center'><Link to={`/order/${order._id}`}>View more</Link></Button>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center col-span-full mt-10 text-lg text-red-700'>
              No orders found
            </p>
          )}
        </div>
      </div>
      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activeTab='Orders' />
    </div>
  )
}
