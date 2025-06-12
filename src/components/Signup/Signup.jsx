
// import { useFormik } from "formik"
import img1 from '../../assets/images/marketio.webp'

export default function Signup() {
  // let formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: ""
  //   },
  //   //   onSubmit:function ()=>{
  //   //     console.log("ok");

  //   //   }
  // })
  return (
    <>
      <div className="min-h-screen bg-gray-50  flex items-center justify-center px-4">
        <div className="max-w-6xl w-full grid my-10 grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg rounded-xl overflow-hidden">
          {/* left  */}
          <div className='p-10'>
            <div className="mb-6">
                        <a href="#" className="flex items-baseline gap-2 mb-6 ">
                            <i className="fa-solid fa-bag-shopping text-2xl block text-mainColor"></i>
                            <p className="text-2xl font-bold dark:text-white">Marketo <span className=" text-mainColor text-4xl font-bold dark:text-white">.</span></p>
                        </a>
                        <h2 className="text-2xl font-semibold">Create Account</h2>
                    </div>
                    <form className='space-y-4'>
                     <input 
                     type='text'
                     placeholder='Name'
                     className='input'
                     />
                     <input 
                     type='email'
                     placeholder='E-mail'
                     className='input'
                     />
                     <input 
                     type='tel'
                     placeholder='Phone'
                     className='input'
                     />
                     <input 
                     type='password'
                     placeholder='Password'
                     className='input'
                     />
                     <input 
                     type='password'
                     placeholder='Re-Password'
                     className='input'
                     />
                     <button className='w-full btn-filled'>SignUp</button>
                     <p className='text-center cursor-pointer'>Do you have an account ?<span className='text-mainColor font-bold underline'>LogIn</span>  </p>
                    </form>
            
          </div>
          {/* Right  */}
          <div className="p-10 bg-gray-100 flex flex-col relative justify-center">
            <div className="absolute -right-8 -top-8 hidden md:block">
              <img
                src={img1}
                alt="Food"
                className="w-40 h-40 object-cover rounded-full shadow-md"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">What you will get?</h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li>✓ Sell your products online with ease</li>
              <li>✓ Access real-time sales analytics</li>
              <li>✓ Connect with thousands of active buyers</li>
              <li>✓ Get paid securely and quickly</li>
              <li>✓ Promote your products with built-in marketing tools</li>
            </ul>
          </div>


        </div>

      </div>


    </>
  )
}

