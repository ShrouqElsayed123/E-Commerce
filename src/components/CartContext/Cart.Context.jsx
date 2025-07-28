import { createContext, useContext, useState } from "react";
import { userContext } from "../Context/User.Context";
import axios from "axios";
import toast from "react-hot-toast";



export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  const { token } = useContext(userContext);
  const [cartInfo, setCartInfo] = useState(null);



  // const [cartItem, setCartItem] = useState([]);
  // Adddddddddddd 
  async function addProductToCart({ id }) {
    let toastId = toast.loading("Adding Product....⏳")
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/cart",
        method: "POST",
        headers: {
          token
        },
        data: {
          productId: id
        }
      }
      let { data } = await axios.request(options);
      if (data.status === "success") {
        getCartProduct()
        toast.success("Product Adding Successfully...✅")

      }

    }
    catch (error) {
      toast.error("Faild ❌")
      console.log(error);
    }
    finally {
      toast.dismiss(toastId)
    }
  }


  //  Gettttttttttttt 
  async function getCartProduct() {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/cart",
        method: "GET",
        headers: {
          token
        }
      }
      let { data } = await axios.request(options);
      console.log(data);

      setCartInfo(data)

    }
    catch (error) {
      console.log(error);

    }
  }




  // remove specific from the poduct 
  async function removeItem({ id }) {
    let toastId = toast.loading("Deleting Product....⏳")

    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        method: "DELETE",
        headers: {
          token
        }
      }
      const { data } = await axios.request(options)

      if (data.status === "success") {
        setCartInfo(data)
        toast.success("Product Deleting Successfully...✅")

      }
    }
    catch (error) {
      toast.error("Faild ❌")
      console.log(error);

    }
    finally {
      toast.dismiss(toastId)

    }

  }







  // Clear Cart 
  async function clearCart() {
    let toastId = toast.loading("Deleting Cart....⏳")

    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/cart",
        method: "DELETE",
        headers: {
          token
        }
      }
      const { data } = await axios.request(options)

      if (data.message == "success") {
        toast.success("Cart Deleting Successfully...✅")

        setCartInfo({
          numOfCartItems: 0
        })

      }

    }

    catch (error) {
      toast.error("Faild ❌")
      console.log(error);

    }
    finally {
      toast.dismiss(toastId)

    }

  }







  // update product count 

  async function updateProductCount({ id, count }) {
    try {
      let options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        method: "PUT",
        headers: {
          token
        },
        data: {
          count
        }
      }
      let { data } = await axios.request(options)
      console.log(data);
      if (data.status == "success") {
        setCartInfo(data)
      }
    }

    catch (error) {
      console.log(error);

    }
  }
  return <CartContext.Provider value={{ addProductToCart, getCartProduct, cartInfo, removeItem, clearCart, updateProductCount }}>
    {children}
  </CartContext.Provider>

}