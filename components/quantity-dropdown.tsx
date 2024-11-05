import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "./ui/select"

export function QuantityDropdown() {
  const [quantity, setQuantity] = useState("0")

  return (
    <div className="max-w-xs">
      <div className="relative">
        <Select value={quantity} onValueChange={setQuantity}>
          <SelectTrigger 
            id="quantity-select" 
            className="w-full pl-3 text-left rounded-md shadow-sm">
            <span className="flex items-center">
              <span className="block truncate">Qty {quantity}</span>
            </span>
          </SelectTrigger>
          <SelectContent className="bg-black bg-opacity-70 text-white rounded-md">
            {[...Array(11)].map((_, i) => (
              <SelectItem 
                key={i} 
                value={i.toString()}
                className="cursor-pointer hover:bg-gray-100">
                {i}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
