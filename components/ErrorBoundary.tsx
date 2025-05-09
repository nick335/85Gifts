import { Button } from "../components/ui/button.tsx"
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Footer from "../components/Footer.tsx"




const ErrorBoundaryUi = () => {
    const navigate = useNavigate();
    const location = useLocation();

   const handleGoback =()=>{
       if(location.state?.canGoback){ 
       navigate(-1);
        }else {
         navigate('/');
        }
   };

    return(
<>
    <div className="w-full flex flex-col h-full">
   <Navbar/>
        <div className="flex px-10 w-full justify-center h-full">
   <div className="flex flex-col items-center justify-center h-full pb-10">            
   <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">OOPS!! we're sorry</p>
        <p className="md:text-lg lg:text-xl text-blue-600 mt-8">there was an error</p>
               <Button onClick={handleGoback} className="bg-blue-700 mt-4">Home</Button>
            </div>
            <div className="h-full justify-center flex-col md:w-96">
           <img src="../public/notfound.svg" className="w-32 h-32 md:w-96 md:h-96"/>
            </div>
  </div>
 <Footer/>
    </div> 
  </>
    );
};

export default ErrorBoundaryUi;
