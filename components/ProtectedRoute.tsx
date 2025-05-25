import { useEffect, useState } from "react";
import { Navigate } from "react-router";
//import { Navigate } from "react-router-dom";
import { PropsWithChildren } from "react";


const ProtectedRoute = ({ children }: PropsWithChildren ) => {
     const [auth, setAuth ] = useState<boolean | null>(null);

     useEffect(()=> {
         const token = localStorage.getItem("authToken");
         setAuth(!!token);
     }, []);

     if (auth === null) return null;

     return auth ? children : <Navigate to="/login"/>
 };

 export default ProtectedRoute;


