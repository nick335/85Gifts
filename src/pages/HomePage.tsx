import { useEffect } from "react";
import SearchBarHome from '@/components/ui/search-bar-dashboard'
import { Link } from 'react-router-dom'
import { IoMdCart } from 'react-icons/io'
import { GoBell } from 'react-icons/go'
import promo from '../assets/promo.svg'
import perfumes from '../assets/fav-perfumes.svg'
import wine from '../assets/fav-wines.svg'
import avatar from '../assets/avatar-holder-img.svg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Categories from '@/components/Categories'
import Bestselling from '@/components/Bestselling'
import MobileBottomNav from '@/components/MobileNavTab'
import { Country, State } from '@/components/location'

export default function HomePage() {

  useEffect(() => {
    // Check if there's a token in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      // Save the token to localStorage
      localStorage.setItem("authToken", token);

      // Optionally, remove the token from the URL for a cleaner look
      window.history.replaceState({}, document.title, "/Homepage");
    }
  }, []);



  return (
    <>
      <div className='w-[100%] h-[100%] pt-[15px] pl-[15px] pr-[10px] bg-gradient-to-br from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF]'>
        {/* Header */}
        <div className=' w-[100%] flex justify-between'>
          <div>
            <SearchBarHome />
          </div>
          <div className='flex gap-1 md:gap-2'>
            <Link to="/Cart">
              <button className='hidden lg:block bg-[#fff] border rounded-[50%] py-[8px] px-[8px]'>
                <IoMdCart />
              </button>
            </Link>
            <Link to="/Notifications">
              <button className='bg-[#fff] border rounded-[50%] py-[8px] px-[8px]'>
                <GoBell />
              </button>
            </Link>
            <div className='hidden lg:flex'>
              <Link to="/Profile">
                <Avatar>
                  <AvatarImage src={avatar} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          </div>
        </div>
        {/* Main */}
        <div className='flex md:flex md:justify-between'>
          {/* main-top*/}
          <div className='w-[65%]'>
            <div className='mt-[35px] relative flex justify-start gap-2 md:gap-5'>
              <State />
              <Country />
            </div>
            <div className='hidden lg:mt-[20px] lg:block'>
              <p className='text-lg font-semibold text-start '>
                Find the best gift for your loved ones
              </p>
            </div>
            <div className='flex gap-3 items-center mb-[15px] mt-[25px] lg:mb-0'>
              <div className='hidden relative mt-[10px] lg:flex'>
                <button>
                  <Card className='w-[180px] h-[70px] lg:w-[210px] lg:h-[60px]'>
                    <CardHeader className='pl-[12px]'>
                      <CardTitle className='absolute top-[12px] text-start'>
                        Event
                      </CardTitle>
                      <CardDescription className='text-start'>
                        Birthday, Anniversary, etc
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </button>
              </div>
              <div className='relative mt-[10px]'>
                <button>
                  <Card className='w-[180px] h-[65px] lg:w-[210px] lg:h-[60px]'>
                    <CardHeader className='pl-[12px]'>
                      <CardTitle className='absolute top-[12px] text-start'>
                        Gift Type
                      </CardTitle>
                      <CardDescription className='text-start'>
                        Cakes, Perfumes, etc
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </button>
              </div>
              <Link to='/Gifts'>
                <Button className='bg-[#072AC8] py-[30px] px-[47px] mt-[10px] lg:py-[27px] lg:px-[40px] lg:mt-[10px] hover:bg-[#072AC8] text-md rounded-lg font-semibold'>
                  Find gifts
                </Button>
              </Link>
            </div>
          </div>
          {/* Promo-card */}
          <div className=' w-[34%] mt-[10px] lg:mt-[20px]'>
            <img
              src={promo}
              alt='Friendship day promo discount'
              className='w-full h-[80px] lg:h-auto lg:w-auto'
            />
          </div>
        </div>
        <div className='lg:flex lg:justify-between'>
          {/* Main-left */}
          <div className='w-full ml-[12px] lg:ml-[0] lg:w-[64%]'>
            <Categories />
            <Bestselling />
          </div>
          {/* Main-right */}
          <div className='mb-[85px] lg:mb-0 lg:w-[34%] lg:mt-[50px] bg-[#fff] h-[455px] rounded-lg shadow-[1px_1px_0_#041C8540]'>
            <Button className='bg-[#E8E5E5] text-[#000] font-semibold hover:bg-[#E8E5E5] px-[80px] mt-[15px] w-[90%]'>
              Curation
            </Button>
            <div className='mt-[30px] ml-[15px] flex gap-5'>
              <img src={perfumes} alt='perfume brands' className='w-25 h-25' />
              <div className='flex flex-col gap-2 mt-5'>
                <p className='font-semibold'>Perfume Set</p>
                <p>(for him)</p>
                <p className='font-bold text-xl'>&#8358;25,000</p>
              </div>
            </div>
            <div className='mt-[30px] ml-[15px] flex gap-5'>
              <img src={wine} alt='' className='w-25 h-25' />
              <div className='flex flex-col gap-2 mt-5'>
                <p className='font-semibold'>Wines</p>
                <p>
                  Jacob's <br /> creek
                </p>
                <p className='font-bold text-xl'>&#8358;13,000</p>
              </div>
            </div>
            <Link to='/Gifts'>
              <Button className='bg-[#072AC8] mt-10 hover:bg-[#B5BCFF] hover:text-[#000] hover:font-semibold px-[110px] w-[95%]'>
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
        {/* Footer */}
        <MobileBottomNav activeTab='HomePage' />
        <div className='hidden lg:block mb-3'>
          <p>
            Need help? Check our{' '}
            <Link to='' className='text-[#072AC8] underline'>
              help and support
            </Link>{' '}
            or{' '}
            <Link to='' className='text-[#072AC8] underline'>
              contact us
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
