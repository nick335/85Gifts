import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
export function State() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] border-none focus:ring-0">
        <SelectValue placeholder="Lagos" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>State</SelectLabel>
          <SelectItem value="lagos">Lagos</SelectItem>
          <SelectItem value="abuja">Abuja</SelectItem>
          <SelectItem value="portHarcourt">Port Harcourt</SelectItem>
          <SelectItem value="benin">Benin</SelectItem>
          <SelectItem value="anambra">Anambra</SelectItem>
          <SelectItem value="kaduna">Kaduna</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

 
export function Country() {
  return (
   <Select>
      <SelectTrigger className="w-[180px] border-none focus:ring-0">
        <SelectValue placeholder="Nigeria" className="font-bold" />
      </SelectTrigger>
      <SelectContent className="border-[#fff]">
        <SelectGroup>
          <SelectLabel>Country</SelectLabel>
          <SelectItem value="nigeria">Nigeria</SelectItem>
          <SelectItem value="ghana">Ghana</SelectItem>
          <SelectItem value="southAfrica">South Africa</SelectItem>
          <SelectItem value="kenya">Kenya</SelectItem>
          <SelectItem value="portugal">Portugal</SelectItem>
          <SelectItem value="somalia">Somalia</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}