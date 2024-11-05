import  React from 'react';
import { Link } from 'react-router-dom';    
import SearchInput from './ui/search-bar';
import { Button } from './ui/button';


export default function Navbar(){
    return(

        <>
    <div className='bg-transparent h-20 text-[18px]'>
        <nav className='navbar h-10 mt-10 w-full flex flex-row bg-transparent text-center justify-between'>
            <span className='mr-[20vw]'>

                <Link to='/' className='navbar-logo'>
                <img src='../src/assets/logo.png' alt='logo' className='logo'/>
                </Link>
        </span>
                <div className='nav-items flex flex-row align-middle  gap-[4vw] justify-between ml-8'>
                <Link to='/FindAGift'>
                   Find a gift
                </Link>

                <Link to='/Men'>
                Men
                </Link>

                <Link to="/Women">
                Women
                </Link>
                <Link to='/Event'>
                Event
                </Link>
                </div>
                <div className=''>
                 <SearchInput/>
                </div>
                <div className=''>
                    <span className='mr-2'>

                <Link to="/HomePage" className='mr-4'>
                Login
                </Link>
                    </span>
                <Button className="bg-secondary text-black rounded-full px-6 py-2 hover:bg-primary hover:text-white">
      Get Started
    </Button>

                </div>
        </nav>
    </div>
    </>
    )
    
}