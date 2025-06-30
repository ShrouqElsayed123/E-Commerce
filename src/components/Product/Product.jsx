import axios from "axios"
import { useEffect, useState } from "react";
import Card from "../CardDesign/CardDesign";

export default function Product() {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    const options = {
      method: 'GET',
      url: 'https://ecommerce.routemisr.com/api/v1/products'
    }
    let { data } = await axios.request(options);
    setProducts(data.data)
    console.log(data);


  }
  useEffect(() => {
    getAllProducts()
  }, [])


  return (
    <>

      {
        products.map((p, index) => (
          <Card key={index} src={p.imageCover} price={p.price} title={p.title} ratingsAverage={p.ratingsAverage}
            category={p.category.name} quantity={p.quantity}
          />
        ))
      }
    </>
  )
}
// Card({src,price,title,ratingsAverage,category,quantity})