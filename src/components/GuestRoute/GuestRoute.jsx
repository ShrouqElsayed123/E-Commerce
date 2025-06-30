import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../Context/User.Context";

// eslint-disable-next-line react/prop-types
export default function GuestRoute({children}) {
   const {token}=useContext(userContext);
  if(!token){return children}
  else {
    return <Navigate to='/' />
  }
}
