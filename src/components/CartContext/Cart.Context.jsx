import { createContext, useContext, useState } from "react";
import { userContext } from "../Context/User.Context";
import axios from "axios";
import toast from "react-hot-toast";



export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
    const { token } = useContext(userContext);
       const [cartInfo,setCartInfo]=useState(null)
    

    // const [cartItem, setCartItem] = useState([]);
    // Adddddddddddd 
    async function addProductToCart({ id }) {
 let toastId=toast.loading("Adding Product....⏳")


  try{
      const options={
        url:"https://ecommerce.routemisr.com/api/v1/cart",
        method:"POST",
        headers:{
          token
        },
        data:{
 productId:id
        }
    }
    let {data}=await axios.request(options);
    if(data.status==="success"){
        toast.success("Product Adding Successfully...✅")
        
    }
    // console.log(data);
    
  }

  catch(error){
    toast.error("Faild ❌")
    console.log(error);
    
  }
  finally{
    toast.dismiss(toastId)
  }
    }


    //  Gettttttttttttt 
    async function getCartProduct(){
       try{
         const options={
            url:"https://ecommerce.routemisr.com/api/v1/cart",
            method:"GET",
            headers:{
                token
            }
        }
        let {data}=await axios.request(options);
        console.log(data.data.products );
        setCartInfo(data)
        
       }
       catch(error){
        console.log(error);
        
       }
    }
    return <CartContext.Provider value={{ addProductToCart,getCartProduct,cartInfo}}>
        {children}
    </CartContext.Provider>

}