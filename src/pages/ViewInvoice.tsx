import html2pdf from "html2pdf.js";
import { useRef } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import BankTransferModal from "@/components/BankTransferModal";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type CartItem = {
    id: string;
    name: string;
    category: string;
    price: number;
    quantity: number;
    image: string;
};

type InvoiceItem = CartItem & {
    giftId?: string;
};

function Invoice() {
    const location = useLocation();
    const { invoiceData, cartItems } = location.state || {};
    console.log("Invoice Data:", invoiceData);
    const items =  cartItems || invoiceData?.items || [];

    const totalAmount = items.reduce((acc: number, item: InvoiceItem) => {
        const quantity = item.quantity || 1;
        return acc + item.price * quantity;
      }, 0);
      

    const invoiceRef = useRef(null);
    const handlePrint = () => {
        window.print()
    }
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
    }
    const [paymentMethod, setPaymentMethod] = useState<"Paystack" | "Transfer" | "">("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePaymentSubmit = (formData: FormData) => {
        //Handle the form submission
        console.log("Payment Submitted")

        //You would typically send this to your backend
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`)
        }
    }

    const currentDate = new Date().toLocaleDateString('en-NG', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

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
                            <h2 className="text-start font-bold md:mb-0 mb-2">Invoice ID: {invoiceData.invoiceNumber}</h2>
                            <div>
                                <p className="flex gap-10 mb-2"><span>Invoice Date:</span> <span>{currentDate}</span></p>
                                <p className="flex gap-10"><span>Due Date:</span> <span >{currentDate}</span></p>
                            </div>
                        </div>
                        <div className="md:flex mb-10">
                            <div className="receipient text-start">
                                <h3><b>Delivery to:</b></h3>
                                <p>Auscay Dev</p>
                                <p>3rd Flr, Alpha & Omega Elizabeth II Rd, Victoria Island, Lagos.</p>
                                <p>Call: +2348092345176</p>
                                <p>Whatsapp: +2349132884924</p>
                            </div>
                            <div className="sender text-start mt-5">
                                <h3><b>Invoiced to:</b></h3>
                                <p>Ebuka Joshua</p>
                                <p>Agatha phase III Rd, Ojuelegba, Anambra.</p>
                                <p>Call: +2347073298531</p>
                            </div>
                        </div>
                        <section>
                            <h3 className="text-start text-xl font-bold mb-5">Invoice Items</h3>
                            {/* <table className="table-fixed w-full">
                                <thead>
                                    <tr>
                                        <th className="w-1/2 text-left">Description</th>
                                        <th className="w-1/2 text-right">Amount</th>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}>
                                            <hr className="border-t-2 border-black w-full" />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item: InvoiceItem, index: number) => (
                                        <tr key={index}>
                                            <td className="w-1/2 text-left">{item.name || item.category || item.giftId}</td>
                                            <td className="w-1/2 text-right">₦{item.price?.toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table> */}

                            <table className="table-fixed w-full">
                                <thead>
                                    <tr>
                                        <th className="w-1/4 text-left">Item</th>
                                        <th className="w-1/4 text-left">Category</th>
                                        <th className="w-1/4 text-right">Qty</th>
                                        <th className="w-1/4 text-right">Amount</th>
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
                                            <td className="w-1/4 text-left">{item.name}</td>
                                            <td className="w-1/4 text-left">{item.category}</td>
                                            <td className="w-1/4 text-right">{item.quantity || 1}</td>
                                            <td className="w-1/4 text-right">₦{item.price?.toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </section>
                    </div>
                    <div className="bg-[#032bb7] text-white lg:max-w-3xl lg:mx-auto rounded shadow-2xl p-5 w-[100%] h-[55%] md:mt-0 mt-5">
                        <div className="flex justify-between">
                            <h2 className="text-sm text-start">Total Due</h2>
                            <p className="text-xl font-bold text-start mb-5">₦{totalAmount.toLocaleString()}</p>
                        </div>
                        <hr></hr>
                        <div className="mt-5">
                            <h2 className="text-start md:text-base text-sm">Payment Method:</h2>
                            <Select onValueChange={(value) => setPaymentMethod(value as "Paystack" | "Transfer")}>
                                <SelectTrigger className="w-[150px] border-none">
                                    <SelectValue
                                        placeholder="Choose Method"
                                    />
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
                                        // integrate your Paystack modal here
                                        alert("Opening Paystack modal...");
                                    } else if (paymentMethod === "Transfer") {
                                        setIsModalOpen(true);
                                    } else {
                                        alert("Please select a payment method.");
                                    }
                                }}
                            >
                                Pay Now
                            </button>
                        </div>
                        {/* Bank Transfer Modal */}
                        <BankTransferModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            onSubmit={handlePaymentSubmit}
                            invoiceAmount={totalAmount}
                            invoiceNumber={invoiceData.id}
                        />
                    </div>
                </main >
            </div >
        </>
    )
}

export default Invoice;