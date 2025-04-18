import plant from "../src/assets/plant.svg";
import roses from "../src/assets/roses.svg";
import weddingCake from "../src/assets/wedding-cake.svg";
import perfume from "../src/assets/perfume.svg";

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
export default function Bestselling() {
  return (
    <>
      <div className="pb-[50px] lg:pb-[120px]">
        <div className="mt-[20px]">
          <Select>
            <SelectTrigger className="w-[150px] border-none">
              <SelectValue
                className="placeholder:text-lg placeholder:font-bold"
                placeholder="Bestselling"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Bestselling</SelectLabel>
                <SelectItem value="All">Cakes</SelectItem>
                <SelectItem value="Birthday">Flowers</SelectItem>
                <SelectItem value="Anniversary">Hampers</SelectItem>
                <SelectItem value="Holiday">Wine</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-[15px] grid grid-cols-2 gap-y-8 lg:flex lg: justify-between">
          <div className=" relative">
            <div className="relative">
              <Card className="w-[155px] h-[155px] lg:w-[195px] lg:h-[180px]">
                <CardHeader>
                  <CardTitle className="text-center top-[110px] lg:top-[135px] lg:left-[45px] absolute">
                    Plant in a mug
                  </CardTitle>
                  <hr className="relative top-[100px] w-[130px] ml-[-12px] lg:ml[0] lg:top-[120px] border-[#000] lg:w-[150px]" />
                  <div className="relative">
                    <CardDescription className="text-[#000] font-semibold absolute top-[95px] left-[-10px] lg:top-[120px] lg:left-[1px]">
                      &#8358;2,600
                    </CardDescription>
                    <CardDescription className="absolute text-[#000] font-semibold top-[95px] right-[-7px] lg:top-[120px] lg:right-[1px]">
                      25 Sold
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
            <img
              src={perfume}
              alt="cactus plant in a mug"
              className="w-[155px] lg:w-[195px] absolute top-[1px] rounded-t-lg"
            />
          </div>
          <div className=" relative">
            <div className="relative">
              <Card className="w-[155px] h-[155px] lg:w-[195px] lg:h-[180px]">
                <CardHeader>
                  <CardTitle className="text-center top-[110px] lg:top-[135px] lg:left-[45px] absolute">
                    Box of roses
                  </CardTitle>
                  <hr className="relative top-[100px] w-[130px] ml-[-12px] lg:ml[0] lg:top-[120px] border-[#000] lg:w-[150px]" />
                  <div className="relative">
                    <CardDescription className="text-[#000] font-semibold absolute top-[95px] left-[-10px] lg:top-[120px] lg:left-[1px]">
                      &#8358;5,600
                    </CardDescription>
                    <CardDescription className="absolute text-[#000] font-semibold top-[95px] right-[-7px] lg:top-[120px] lg:right-[1px]">
                      10 Sold
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
            <img
              src={roses}
              alt="a box of roses"
              className=" w-[155px] lg:w-[195px] absolute top-[1px] rounded-t-lg"
            />
          </div>
          <div className=" relative">
            <div className="relative">
              <Card className="w-[155px] h-[155px] lg:w-[195px] lg:h-[180px]">
                <CardHeader>
                  <CardTitle className="text-center top-[110px] lg:top-[135px] lg:left-[45px] absolute">
                    Wedding Cake
                  </CardTitle>
                  <hr className="relative top-[100px] w-[130px] ml-[-12px] lg:ml[0]  lg:top-[120px] border-[#000] lg:w-[150px]" />
                  <div className="relative">
                    <CardDescription className="text-[#000] font-semibold absolute top-[95px] left-[-10px] lg:top-[120px] lg:left-[1px]">
                      &#8358;16,500
                    </CardDescription>
                    <CardDescription className="absolute text-[#000] font-semibold top-[95px] right-[-7px] lg:top-[120px] lg:right-[1px]">
                      10 Sold
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
            <img
              src={weddingCake}
              alt="a box of roses"
              className="w-[155px] lg:w-[195px] absolute top-[1px] rounded-t-lg"
            />
          </div>
          <div className="relative lg:hidden">
            <div className="relative">
              <Card className="w-[155px] h-[155px] lg:w-[195px] lg:h-[180px]">
                <CardHeader>
                  <CardTitle className="text-center top-[110px] lg:top-[135px] lg:left-[45px] absolute">
                    Plant in a mug
                  </CardTitle>
                  <hr className="relative top-[100px] w-[130px] ml-[-12px] lg:ml[0] lg:top-[120px] border-[#000] lg:w-[150px]" />
                  <div className="relative">
                    <CardDescription className="text-[#000] font-semibold absolute top-[95px] left-[-10px] lg:top-[120px] lg:left-[1px]">
                      &#8358;2,600
                    </CardDescription>
                    <CardDescription className="absolute text-[#000] font-semibold top-[95px] right-[-7px] lg:top-[120px] lg:right-[1px]">
                      25 Sold
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
            <img
              src={plant}
              alt="cactus plant in a mug"
              className="w-[155px] lg:w-[195px] absolute top-[1px] rounded-t-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
