import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({children}) {
  const token=true;
  if(token){return children}
  else {
    return <Navigate to='/login' />
  }
  
}
