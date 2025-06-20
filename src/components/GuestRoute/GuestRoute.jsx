import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function GuestRoute({children}) {
   const token=true;
  if(!token){return children}
  else {
    return <Navigate to='/' />
  }
}
