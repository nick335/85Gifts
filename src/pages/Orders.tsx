import { useState } from "react";
import { NotebookPen } from "lucide-react";
import MobileBottomNav from "../../components/MobileNavTab";

export default function Orders() {
    const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

    const orders = [
        {
            id: "120233332233",
            datePlaced: "Aug 10",
            status: "Processing",
            items: [
                { name: "Lilium flowers", category: "Flowers", image: "/src/assets/order-1.jpg" },
                { name: "Red velvet cupcakes", category: "Cakes", image: "/src/assets/order-2.png" },
            ],
            shippingTo: "Mr Collin Asange",
        },
        {
            id: "120233332234",
            datePlaced: "Aug 12",
            status: "Delivered",
            items: [
                { name: "Jacob's creek", category: "Wines", image: "/src/assets/order-3.png" },
            ],
            shippingTo: "Ms Jane Doe",
        },
        {
            id: "120233332233",
            datePlaced: "Aug 10",
            status: "Processing",
            items: [
                { name: "Lilium flowers", category: "Flowers", image: "/src/assets/order-1.jpg" },
                { name: "Red velvet cupcakes", category: "Cakes", image: "/src/assets/order-2.png" },
            ],
            shippingTo: "Mr Collin Asange",
        },
        {
            id: "120233332234",
            datePlaced: "Aug 12",
            status: "Delivered",
            items: [
                { name: "Jacob's creek", category: "Wines", image: "/src/assets/order-3.png" },
            ],
            shippingTo: "Ms Jane Doe",
        },
        {
            id: "120233332233",
            datePlaced: "Aug 10",
            status: "Processing",
            items: [
                { name: "Lilium flowers", category: "Flowers", image: "/src/assets/order-1.jpg" },
                { name: "Red velvet cupcakes", category: "Cakes", image: "/src/assets/order-2.png" },
            ],
            shippingTo: "Mr Collin Asange",
        },
        {
            id: "120233332234",
            datePlaced: "Aug 12",
            status: "Delivered",
            items: [
                { name: "Jacob's creek", category: "Wines", image: "/src/assets/order-3.png" },
            ],
            shippingTo: "Ms Jane Doe",
        },
        {
            id: "120233332233",
            datePlaced: "Aug 10",
            status: "Processing",
            items: [
                { name: "Lilium flowers", category: "Flowers", image: "/src/assets/order-1.jpg" },
                { name: "Red velvet cupcakes", category: "Cakes", image: "/src/assets/order-2.png" },
            ],
            shippingTo: "Mr Collin Asange",
        },
        {
            id: "120233332234",
            datePlaced: "Aug 12",
            status: "Delivered",
            items: [
                { name: "Jacob's creek", category: "Wines", image: "/src/assets/order-3.png" },
            ],
            shippingTo: "Ms Jane Doe",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF] p-4 md:p-8 pb-24 md:pb-8">
            {/* Main Container */}
            <div className="bg-white rounded-2xl shadow-lg max-w-6xl mx-auto overflow-hidden">

                {/* Header Section */}
                <div className="bg-[#E8E5E5] p-4">
                    <div className="flex justify-center items-center gap-4">
                        <div className="flex items-center">
                            <div className="bg-white p-3 rounded-full">
                                <NotebookPen className="text-blue-600" size={24} />
                            </div>
                            <h2 className="text-sm md:text-lg font-semibold ml-2">All Orders</h2>
                        </div>
                    </div>
                </div>

                {/* Orders List */}
                <div className="p-4 md:p-6">
                    {orders.map((order) => (
                        <div key={order.id} className="border rounded-lg p-4 mb-6 bg-gray-50">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-500">Order #{order.id}</h2>
                                    <p className="text-sm font-semibold">Ships to {order.shippingTo}</p>
                                    <p className="text-sm text-gray-500">Placed on {order.datePlaced}</p>
                                </div>
                                <button
                                    className="text-blue-600 text-sm font-semibold"
                                    onClick={() =>
                                        setExpandedOrder(expandedOrder === order.id ? null : order.id)
                                    }
                                >
                                    {expandedOrder === order.id ? "Hide Details" : "View More"}
                                </button>
                            </div>

                            {/* Order Details */}
                            {expandedOrder === order.id && (
                                <div className="mt-4">
                                    <h3 className="font-semibold text-lg md:text-xl mb-4">Purchased Items</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {order.items.map((item, index) => (
                                            <div key={index} className="border rounded-lg overflow-hidden bg-white">
                                                <div className="h-32 bg-gray-100">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-3 text-center">
                                                    <h4 className="font-semibold">{item.category}</h4>
                                                    <p className="text-sm font-semibold text-gray-600">{item.name}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Bottom Navigation */}
            <MobileBottomNav activeTab="Orders" />
        </div>
    );
}