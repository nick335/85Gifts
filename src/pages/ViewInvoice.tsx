import html2pdf from "html2pdf.js";
import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import BankTransferModal from "@/components/BankTransferModal";
import { toast } from "sonner";
import MobileBottomNav from "@/components/MobileNavTab";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import axios from "axios";



type CartItem = {
    id: string
    name: string
    category: string
    price: number
    quantity: number
    image: string
}

type InvoiceItem = CartItem & {
    giftId?: string
}

function Invoice() {
    const { invoiceNumber } = useParams();
    const location = useLocation();
    const [invoiceData, setInvoiceData] = useState(location.state?.invoiceData || null);
    const [cartItems, setCartItems] = useState<CartItem[]>(location.state?.cartItems || []);
    const customer = location.state?.customer;
    const [loading, setLoading] = useState(false);

    const invoiceRef = useRef(null);

    useEffect(() => {
        if (!invoiceData) {
            // Fetch invoice data if not passed via state
            setLoading(true);
            axios.get(`https://eight5gifts-be.onrender.com/api/user/invoice/${invoiceNumber}`)
                .then(res => {
                    setInvoiceData(res.data.data);
                    setCartItems(res.data.data.items || []);
                })
                .catch(err => {
                    toast.error("Failed to load invoice.");
                    console.error(err);
                })
                .finally(() => setLoading(false));
        }
    }, [invoiceNumber, invoiceData]);

    const items = cartItems || invoiceData?.items || [];

    const totalAmount = invoiceData.subtotal

    const handlePrint = () => window.print();

    const handleDownload = () => {
        const element = invoiceRef.current;
        const options = {
            margin: 0.5,
            filename: 'invoice.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(options).from(element).save();
    };

    const [paymentMethod, setPaymentMethod] = useState<"Paystack" | "Transfer" | "">("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePaymentSubmit = (formData: FormData) => {
        toast.success("Payment Submitted");
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    };

    const currentDate = new Date(invoiceData?.createdAt).toLocaleDateString('en-NG');

    if (loading || !invoiceData) {
        return <div className="p-10 text-center text-lg">Loading invoice...</div>;
    }

    return (
        <>
            <div ref={invoiceRef} className="w-[100%] h-[100%] pt-[15px] pl-[15px] pr-[10px] bg-gradient-to-br from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF] ">
                <header className="flex item-center justify-between mb-5 lg:mx-8">
                    <h1 className="text-3xl font-bold">View Invoice</h1>
                    <div>
                        <ul className="flex gap-5 item-center">
                            <li><button className="hover:underline" onClick={handlePrint}>Print</button></li>
                            <li><button className="hover:underline" onClick={handleDownload}>Download</button></li>
                        </ul>
                    </div>
                </header>
                <main className="md:flex md:gap-2">
                    <div className="bg-white lg:max-w-3xl lg:mx-auto rounded shadow-2xl p-5 ">
                        <div className="md:flex justify-between items-center mb-10">
                            <h2 className="text-start font-bold md:mb-0 mb-2">Invoice ID: <span>{invoiceData?._id}</span></h2>
                            <div>
                                <p className="flex gap-10 mb-2"><span>Invoice Date:</span> <span>{currentDate}</span></p>
                            </div>
                        </div>
                        <div className="md:flex mb-10">
                            <div className="sender text-start mt-5">
                                <h3><b>Invoiced to:</b></h3>
                                <p>{customer}</p>
                            </div>
                        </div>
                        <section>
                            <h3 className="text-start text-xl font-bold mb-5">Invoice Items</h3>
                            <table className="table-fixed w-full">
                                <thead>
                                    <tr>
                                        <th className="w-1/3 text-left">Item</th>
                                        <th className="w-1/3 text-right">Qty</th>
                                        <th className="w-1/3 text-right">Amount</th>
                                    </tr>
                                    <tr>
                                        <th colSpan={4}>
                                            <hr className="border-t-2 border-black w-full" />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item: InvoiceItem, index: number) => (
                                        <tr key={index}>
                                            <td className="w-1/3 text-left">{item.name}</td>
                                            <td className="w-1/3 text-right">{item.quantity || 1}</td>
                                            <td className="w-1/3 text-right">₦{item.price?.toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    </div>
                    <div className="bg-[#032bb7] text-white lg:max-w-3xl lg:mx-auto rounded shadow-2xl p-5 w-[100%] h-[55%] md:mt-0 mt-5">
                        <div className="flex justify-between">
                            <h2 className="text-sm text-start">Total Due</h2>
                            <p className="text-xl font-bold text-start mb-5">₦{totalAmount}</p>
                        </div>
                        <hr />
                        <div className="mt-5 md:mb-0 mb-16">
                            <h2 className="text-start md:text-base text-sm">Payment Method:</h2>
                            <Select onValueChange={(value) => setPaymentMethod(value as "Paystack" | "Transfer")}>
                                <SelectTrigger className="w-[150px] border-none">
                                    <SelectValue placeholder="Choose Method" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Choose Method</SelectLabel>
                                        <SelectItem value="Paystack">Pay with Paystack</SelectItem>
                                        <SelectItem value="Transfer">Pay with Bank Transfer</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <button
                                className="bg-white mt-5 text-[#032bb7] hover:bg-[#ffffffe1] font-bold w-[100%] h-10 rounded"
                                onClick={() => {
                                    if (paymentMethod === "Paystack") {
                                        toast.success("Opening Paystack modal...");
                                    } else if (paymentMethod === "Transfer") {
                                        setIsModalOpen(true);
                                    } else {
                                        toast.error("Please select a payment method.");
                                    }
                                }}
                            >
                                Pay Now
                            </button>
                        </div>
                        <BankTransferModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            onSubmit={handlePaymentSubmit}
                            invoiceAmount={totalAmount}
                            invoiceNumber={invoiceNumber!}
                        />
                    </div>
                </main>
                <MobileBottomNav
                    activeTab="Cart"
                    cartItemCount={cartItems.length}
                    className="custom-nav-class" // optional
                    iconSize={18} // optional
                />
            </div>
        </>
    );
}

export default Invoice;
