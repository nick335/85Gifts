import { CheckCircle, X } from "lucide-react"

interface SuccessModalProps {
    isOpen: boolean
    onClose: () => void
    invoiceNumber: string
    amount: number
}

export default function SuccessModal({ isOpen, onClose, invoiceNumber, amount }: SuccessModalProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

            {/* Modal */}
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden animate-fade-in">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                    <X size={24} />
                </button>

                <div className="p-8 flex flex-col items-center">
                    {/* Success Icon with Animation */}
                    <div className="mb-6 relative">
                        <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center animate-scale-in">
                            <CheckCircle className="h-16 w-16 text-green-500" />
                        </div>
                        <div className="absolute inset-0 rounded-full border-4 border-green-500 opacity-0 animate-ping-once"></div>
                    </div>

                    {/* Success Message */}
                    <h2 className="text-2xl font-bold text-center mb-2">Thank You for Your Payment!</h2>
                    <p className="text-gray-600 text-center mb-6">
                        We've received your payment details and will process it shortly.
                    </p>

                    {/* Payment Details */}
                    <div className="bg-gray-50 w-full rounded-lg p-4 mb-6">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Invoice Number:</span>
                            <span className="font-medium text-black">{invoiceNumber}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Amount:</span>
                            <span className="font-medium text-black">${amount.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={onClose}
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    )
}
