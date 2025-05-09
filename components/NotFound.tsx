import { Button } from "../components/ui/button.tsx"
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Footer from "../components/Footer.tsx"




const NotFound = () => {
    const navigate = useNavigate();
    const location = useLocation();

   const handleGoback =()=>{
       if (location.state?.canGoBack) {  
        navigate(-1);
       }else {
           navigate("/")
       }
   };

    return(
<>
    <div className="w-full flex flex-col h-full">
   <Navbar/>
        <div className="flex px-10 w-full justify-center">
   <div className="flex flex-col items-center justify-center pb-10">            
   <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">Not Found</p>
        <p className="md:text-lg lg:text-xl text-blue-600 mt-8">Sorry, the page you are looking for could not be found.</p>
               <Button onClick={handleGoback} className="bg-blue-700 mt-4">Go back</Button>
            </div>
            <div className="h-full flex items-center justify-center flex-col md:w-96">
           <img src="../public/notfound.svg" className="w-32 h-32 md:w-96 md:h-96"/>
            </div>
  </div>
 <Footer/>
 </div>
  </>

    );
};

export default NotFound;
