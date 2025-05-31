import type React from "react"
import axios from 'axios';
import { useState, useRef } from "react"
import { X, Upload, AlertCircle } from "lucide-react"
import SuccessModal from "./SuccessModal"
import { toast } from "sonner"
import { useCart } from '../src/store/useCart';


interface BankTransferModalProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: (data: FormData) => void
    invoiceAmount: number
    invoiceNumber: string
}

export default function BankTransferModal({
    isOpen,
    onClose,
    // onSubmit,
    invoiceAmount,
    invoiceNumber,
}: BankTransferModalProps) {
    const [amount, setAmount] = useState(invoiceAmount)
    const [bankName, setBankName] = useState("")
    const [buyerPhone, setBuyerPhone] = useState("")
    const [receiverName, setReceiverName] = useState("")
    const [receiverPhone, setReceiverPhone] = useState("")
    const [receiverAddress, setReceiverAddress] = useState("")
    const [notes, setNotes] = useState("")
    const [file, setFile] = useState<File | null>(null)
    const [filePreview, setFilePreview] = useState<string | null>(null)
    const [errors, setErrors] = useState<{ [key: string]: string }>({})
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const fileInputRef = useRef<HTMLInputElement>(null)

    const { clearCart } = useCart()

    // Bank account details (would come from your backend in a real app)
    const accountDetails = {
        bankName: "Moniepoint",
        accountNumber: "1234567890",
        accountName: "85GIFTS",
        branchCode: "250655",
        reference: invoiceNumber,
    }

    if (!isOpen) return null

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]
        if (!selectedFile) return

        // Validate file type
        const validTypes = ["image/jpeg", "image/png", "image/jpg", "application/pdf"]
        if (!validTypes.includes(selectedFile.type)) {
            setErrors({ ...errors, file: "Please upload a valid image (JPEG, PNG) or PDF file" })
            return
        }

        // Validate file size (max 5MB)
        if (selectedFile.size > 5 * 1024 * 1024) {
            setErrors({ ...errors, file: "File size should be less than 5MB" })
            return
        }
        else {
            toast.success("File uploaded successfully.")
        }

        setFile(selectedFile)
        setErrors({ ...errors, file: "" })

        // Create preview for images
        if (selectedFile.type.startsWith("image/")) {
            const reader = new FileReader()
            reader.onload = () => {
                setFilePreview(reader.result as string)
            }
            reader.readAsDataURL(selectedFile)
        } else {
            // For PDFs, just show an icon or text
            setFilePreview(null)
        }
    }

    const triggerFileInput = () => {
        fileInputRef.current?.click()
    }

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {}

        if (!bankName.trim()) {
            newErrors.bankName = "Please enter your bank name"
        }
        if (!buyerPhone.trim()) {
            newErrors.buyerPhone = "Please enter your phone number"
        }
        if (!receiverName.trim()) {
            newErrors.receiverName = "Please enter the receiver's name"
        }
        if (!receiverPhone.trim()) {
            newErrors.receiverPhone = "Please enter the receiver's phone number"
        }
        if (!receiverAddress.trim()) {
            newErrors.receiverAddress = "Please enter the receiver's address"
        }
        if (!notes.trim()) {
            newErrors.notes = "Please write a short note"
        }


        if (!file) {
            newErrors.file = "Please upload your payment receipt"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        clearCart()

        if (!validateForm()) return

        setLoading(true)

        const token = localStorage.getItem("authToken");


        if (!token) {
            console.error("No token found. Please login.");
            return;
        }

        try {

            // Create form data
            const formData = new FormData();
            formData.append("invoiceId", invoiceNumber);
            formData.append("amount", amount.toString());
            formData.append("transferReference", `TRX_${Date.now()}`);
            if (file) {
                formData.append("file", file); // The actual file object (e.g., from <input type="file">)
            }
            formData.append("bankName", bankName);

            // fulfillmentDetails is an object; we’ll send it as JSON string
            formData.append("fulfillmentDetails", JSON.stringify({
                buyerPhone: buyerPhone,
                receiverName: receiverName,
                receiverPhone: receiverPhone,
                receiverAddress: receiverAddress,
                notes: notes,
            }));


            const response = await axios.post(
                "/api/api/payment/pay-invoice-transfer/",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            console.log("Success:", response.data)
            setShowSuccessModal(true)

        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error("Payment transfer failed:", error.response?.data || error.message)
                toast.error(error.response?.data?.message || "Something went wrong while submitting payment.")
            } else {
                console.error("Unexpected error:", error)
                toast.error("An unexpected error occurred.")
            }
        }
        setLoading(false)
    }

    const handleSuccessClose = () => {
        setShowSuccessModal(false)
        onClose() // Close the bank transfer modal too
    }

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center mb-12">
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

                {/* Modal */}
                <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
                    {/* Header */}
                    <div className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Bank Transfer Payment</h2>
                        <button onClick={onClose} className="text-white hover:text-blue-100 focus:outline-none">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <form onSubmit={handleSubmit}>
                            {/* Account Details Section */}
                            <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <h3 className="font-medium text-blue-800 mb-2">Transfer to this account</h3>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div className="text-gray-600">Bank Name:</div>
                                    <div className="font-medium text-black">{accountDetails.bankName}</div>

                                    <div className="text-gray-600">Account Number:</div>
                                    <div className="font-medium text-black">{accountDetails.accountNumber}</div>

                                    <div className="text-gray-600">Account Name:</div>
                                    <div className="font-medium text-black">{accountDetails.accountName}</div>

                                    <div className="text-gray-600">Branch Code:</div>
                                    <div className="font-medium text-black">{accountDetails.branchCode}</div>

                                    <div className="text-gray-600">Reference:</div>
                                    <div className="font-medium text-black">{accountDetails.reference}</div>
                                </div>
                            </div>

                            {/* Form Fields */}
                            <div className="space-y-4">
                                {/* Amount */}
                                <div>
                                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                                        Amount
                                    </label>
                                    <input
                                        type="number"
                                        id="amount"
                                        value={amount}
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                        className={`w-full px-3 py-2 border text-black rounded-md ${errors.amount ? "border-red-500" : "border-gray-300"}`}
                                        readOnly
                                    />
                                    {errors.amount && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle size={14} className="mr-1" />
                                            {errors.amount}
                                        </p>
                                    )}
                                </div>

                                {/* Bank Name */}
                                <div>
                                    <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Bank Name
                                    </label>
                                    <input
                                        type="text"
                                        id="buyerPhone"
                                        value={bankName}
                                        onChange={(e) => setBankName(e.target.value)}
                                        className={`w-full px-3 py-2 border text-black rounded-md ${errors.bankName ? "border-red-500" : "border-gray-300"}`}
                                        placeholder="Enter your bank name"
                                    />
                                    {errors.bankName && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle size={14} className="mr-1" />
                                            {errors.bankName}
                                        </p>
                                    )}
                                </div>

                                {/* File Upload */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Payment Receipt</label>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        className="hidden"
                                        accept="image/jpeg,image/png,image/jpg,application/pdf"
                                    />

                                    <div
                                        onClick={triggerFileInput}
                                        className={`border-2 border-dashed rounded-md p-4 cursor-pointer text-center mb-4 ${errors.file ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-blue-500"
                                            }`}
                                    >
                                        {filePreview ? (
                                            <div className="flex flex-col items-center">
                                                <img
                                                    src={filePreview || "/placeholder.svg"}
                                                    alt="Receipt preview"
                                                    className="max-h-32 object-contain mb-2"
                                                />
                                                <p className="text-sm text-gray-600">{file?.name}</p>
                                                <p className="text-xs text-gray-500">
                                                    {file?.size ? (file.size / (1024 * 1024)).toFixed(2) : 0} MB
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center">
                                                <Upload className="h-8 w-8 text-gray-400 mb-2" />
                                                <p className="text-sm text-gray-600">Click to upload receipt</p>
                                                <p className="text-xs text-gray-500">JPEG, PNG or PDF (max 5MB)</p>
                                            </div>
                                        )}
                                    </div>

                                    {errors.file && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle size={14} className="mr-1" />
                                            {errors.file}
                                        </p>
                                    )}
                                </div>

                                <hr className="h-2 bg-black rounded-md"></hr>

                                {/* Bank Name */}
                                <div>
                                    <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-1 mt-2">
                                        Buyer Phone
                                    </label>
                                    <input
                                        type="number"
                                        id="bankName"
                                        value={buyerPhone}
                                        onChange={(e) => setBuyerPhone(e.target.value)}
                                        className={`w-full px-3 py-2 border text-black rounded-md ${errors.buyerPhone ? "border-red-500" : "border-gray-300"}`}
                                        placeholder="Enter your phone number"
                                    />
                                    {errors.buyerPhone && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle size={14} className="mr-1" />
                                            {errors.buyerPhone}
                                        </p>
                                    )}
                                </div>


                                {/* receiver's Name */}
                                <div>
                                    <label htmlFor="receiverName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Receipient's Name
                                    </label>
                                    <input
                                        type="text"
                                        id="receiverName"
                                        value={receiverName}
                                        onChange={(e) => setReceiverName(e.target.value)}
                                        className={`w-full px-3 py-2 border text-black rounded-md ${errors.receiverAddress ? "border-red-500" : "border-gray-300"}`}
                                        placeholder="Enter the receipient's name"
                                    />
                                    {errors.receiverName && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle size={14} className="mr-1" />
                                            {errors.receiverName}
                                        </p>
                                    )}
                                </div>


                                {/* receiver Phone*/}
                                <div>
                                    <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Receiver's Phone Number
                                    </label>
                                    <input
                                        type="number"
                                        id="receiverPhone"
                                        value={receiverPhone}
                                        onChange={(e) => setReceiverPhone(e.target.value)}
                                        className={`w-full px-3 py-2 border text-black rounded-md ${errors.receiverAddress ? "border-red-500" : "border-gray-300"}`}
                                        placeholder="Enter the receipient's Phone number"
                                    />
                                    {errors.receiverPhone && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle size={14} className="mr-1" />
                                            {errors.receiverPhone}
                                        </p>
                                    )}
                                </div>


                                {/* Reciever Address  */}
                                <div>
                                    <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Receipient's Address
                                    </label>
                                    <input
                                        type="text"
                                        id="receiverAddress"
                                        value={receiverAddress}
                                        onChange={(e) => setReceiverAddress(e.target.value)}
                                        className={`w-full px-3 py-2 border text-black rounded-md ${errors.receiverAddress ? "border-red-500" : "border-gray-300"}`}
                                        placeholder="Enter the receipient's address"
                                    />
                                    {errors.recieverAddress && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle size={14} className="mr-1" />
                                            {errors.recieverAddress}
                                        </p>
                                    )}
                                </div>

                                {/* notes */}
                                <div>
                                    <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Notes
                                    </label>
                                    <textarea
                                        id="notes"
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        placeholder="Write a note for your loved one..."
                                        className={`w-full min-h-[100px] resize-y border rounded-md px-3 py-2 text-black ${errors.notes ? "border-red-500" : "border-gray-300"}`}
                                    />
                                    {errors.notes && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle size={14} className="mr-1" />
                                            {errors.notes}
                                        </p>
                                    )}
                                </div>




                            </div>

                            {/* Submit Button */}
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                                >
                                    {loading ? "Submitting..." : "Submit Payment"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            <SuccessModal
                isOpen={showSuccessModal}
                onClose={handleSuccessClose}
                invoiceNumber={invoiceNumber}
                amount={amount}
            />
        </>
    )
}

