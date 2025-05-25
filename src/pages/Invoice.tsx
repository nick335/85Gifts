import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Invoice() {
  const location = useLocation();
  const navigate = useNavigate();
  const invoiceData = location.state?.invoice;

  useEffect(() => {
    if (!invoiceData) {
      // If no invoice data, redirect back to cart
      navigate("/Cart");
    }
  }, [invoiceData, navigate]);

  if (!invoiceData) {
    return null;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Invoice</h1>
      <div className="mb-4">
        <strong>Invoice ID:</strong> {invoiceData.id}
      </div>
      <div className="mb-4">
        <strong>Date:</strong> {new Date(invoiceData.date).toLocaleString()}
      </div>
      <div className="mb-4">
        <strong>Customer:</strong> {invoiceData.customerName}
      </div>
      <div className="mb-4">
        <strong>Items:</strong>
        <ul className="list-disc list-inside">
          {invoiceData.items.map((item: { name: string; quantity: number; price: number }, index: number) => (
            <li key={index}>
              {item.name} - Qty: {item.quantity} - Price: ₦{item.price} - Total: ₦{item.price * item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <strong>Subtotal:</strong> ₦{invoiceData.subtotal}
      </div>
      <div className="mb-4">
        <strong>VAT:</strong> ₦{invoiceData.vat}
      </div>
      <div className="mb-4 text-xl font-semibold">
        <strong>Total:</strong> ₦{invoiceData.total}
      </div>
    </div>
  );
}
