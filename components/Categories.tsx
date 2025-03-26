import cake from "../src/assets/cake.svg";
import flower from "../src/assets/flower.svg";
import hamper from "../src/assets/hamper.svg";
import wine from "../src/assets/wine.svg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Categories() {
  return (
    <>
      <div className="mt-[20px]">
        <Select>
          <SelectTrigger className="w-[150px] border-none">
            <SelectValue
              className="placeholder:text-lg placeholder:font-bold"
              placeholder="Categories"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              <SelectItem value="All">Cakes</SelectItem>
              <SelectItem value="Birthday">Flowers</SelectItem>
              <SelectItem value="Anniversary">Hampers</SelectItem>
              <SelectItem value="Holiday">Wine</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-[20px] flex justify-between">
        <div className=" relative">
          <div className="relative">
            <Card className="w-[150px] h-[180px]">
              <CardHeader>
                <CardTitle className="text-center top-[130px] left-[45px] absolute">
                  Cakes
                </CardTitle>
                <CardDescription className="text-center text-[#000] absolute top-[140px] left-[16px]">
                  for every occasion
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <img src={cake} alt="cake" className="w-[150px] absolute top-[1px]" />
        </div>
        <div className="relative">
          <div className="relative">
            <Card className="w-[150px] h-[180px]">
              <CardHeader>
                <CardTitle className="text-center top-[130px] left-[45px] absolute">
                  Flowers
                </CardTitle>
                <CardDescription className="text-center text-[#000] absolute top-[140px] left-[16px]">
                  to show you care
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <img
            src={flower}
            alt="cake"
            className="w-[150px] absolute top-[1px]"
          />
        </div>
        <div className="relative">
          <div className="relative">
            <Card className="w-[150px] h-[180px]">
              <CardHeader>
                <CardTitle className="text-center top-[130px] left-[45px] absolute">
                  Hampers
                </CardTitle>
                <CardDescription className="text-center text-[#000] absolute top-[140px] left-[16px]">
                  thoughts in a bag
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <img
            src={hamper}
            alt="cake"
            className="w-[150px] absolute top-[1px]"
          />
        </div>
        <div className="relative">
          <div className="relative">
            <Card className="w-[150px] h-[180px]">
              <CardHeader>
                <CardTitle className="text-center top-[130px] left-[45px] absolute">
                  Wines
                </CardTitle>
                <CardDescription className="text-center text-[#000] absolute top-[140px] left-[16px]">
                  celebrate in styles
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <img src={wine} alt="cake" className="w-[150px] absolute top-[1px]" />
        </div>
      </div>
    </>
  );
}
