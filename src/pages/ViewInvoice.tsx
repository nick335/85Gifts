import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


function Invoice() {
    const handlePrint = () => {
        window.print()
    }
    return (
        <>
            <div className="w-[100%] h-[100%] pt-[15px] pl-[15px] pr-[10px] bg-gradient-to-br from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF] ">
                <header className="flex item-center justify-between mb-5">
                    <h1 className="text-3xl font-bold">View Invoice</h1>
                    <div>
                        <ul className="flex gap-5 item-center">
                            <li><button className="hover:underline" onClick={handlePrint}>Print</button></li>
                            <li className="hover:underline">Download</li>
                        </ul>
                    </div>
                </header>
                <main className="md:flex md:gap-5">
                    <div className="bg-white lg:max-w-3xl lg:mx-auto rounded shadow-2xl p-5 ">
                        <div className="md:flex justify-between items-center mb-10">
                            <h2 className="text-start font-bold md:mb-0 mb-2">Invoice ID:</h2>
                            <div>
                                <p className="flex gap-10 mb-2"><span>Invoice Date:</span> <span>Thursday, April 2nd, 2025</span></p>
                                <p className="flex gap-10"><span>Due Date:</span> <span >Thursday, April 2nd, 2025</span></p>
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
                            <table className="table-fixed w-full">
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
                                    <tr>
                                        <td className="w-1/2 text-left">Roses</td>
                                        <td className="w-1/2 text-right">₦5,000</td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/2 text-left">Diapers</td>
                                        <td className="w-1/2 text-right">₦3,000</td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/2 text-left">Motorcycle</td>
                                        <td className="w-1/2 text-right">₦4,500</td>
                                    </tr>
                                </tbody>
                            </table>

                        </section>
                    </div>
                    <div className="bg-[#032bb7] text-white lg:max-w-3xl lg:mx-auto rounded shadow-2xl p-5 w-[100%] h-[55%] md:mt-0 mt-5">
                        <h2 className="text-sm text-start">Total Due</h2>
                        <p className="text-xl font-bold text-start mb-5">NGN 12,500.00</p>
                        <hr></hr>
                        <div className="mt-5">
                            <h2 className="text-start md:text-base text-sm">Payment Method:</h2>
                            <Select>
                                <SelectTrigger className="w-[150px] border-none">
                                    <SelectValue
                                        className="placeholder:text-lg placeholder:font-bold"
                                        placeholder="Choose Method"
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Choose Method</SelectLabel>
                                        <SelectItem value="Card">Pay with Card</SelectItem>
                                        <SelectItem value="Transfer">Pay with Bank Transfer</SelectItem>
                                        <SelectItem value="Bank">Pay with Bank</SelectItem>
                                        <SelectItem value="USSD">Pay with USSD</SelectItem>
                                        <SelectItem value="QrCode">Pay with QR Code</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <button className="bg-white mt-5 text-[#032bb7] hover:bg-[#ffffffe1] font-bold w-[100%] h-10 rounded">Pay Now</button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Invoice;