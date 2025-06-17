import { useFormik } from 'formik'
import img1 from '../../assets/images/marketio.webp'
import * as yup from 'yup'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate=useNavigate()
  const x=yup.object({
        email:yup.string().required("This field is required").email("Incorrect formatting of the email"),
        password:yup.string().required("This field is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,'The password must contain an uppercase letter, a lowercase letter, a special symbol, and be at least 8 characters long.'),
    
  })
  let formik=useFormik ({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema:x,
    onSubmit:async (values)=>{
    const toastId=toast.loading("data sending .....");
    try{
const option={
      url:'https://ecommerce.routemisr.com/api/v1/auth/signin',
      method:"POST",
      data:values
    }
    const {data}=await axios.request(option)
    if(data.message=='success'){
       toast.success("You Login Successfully");
    setTimeout(()=>{navigate("/")},2000)
    }
    console.log(data);
    
    }
    catch(e){
console.log(e);
      toast.error( e.response?.data?.message || e.message)


    }
    finally{
      toast.dismiss(toastId)
    }
    }
  })
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-6xl w-full my-10 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg rounded-xl overflow-hidden">
          {/* left  */}
          <div className='p-10'>
            <div className="mb-6">
                        <a href="#" className="flex items-baseline gap-2 mb-6 ">
                            <i className="fa-solid fa-bag-shopping text-2xl block text-mainColor"></i>
                            <p className="text-2xl font-bold dark:text-white">Marketo <span className=" text-mainColor text-4xl font-bold dark:text-white">.</span></p>
                        </a>
                        <h2 className="text-2xl font-semibold">Welcome Back!</h2>
                    </div>

                    {/* //formmmmmmmmmmmmm */}
                    <form className='space-y-4' onSubmit={formik.handleSubmit} >
                      {/* Email */}
              <div className="space-y-1" >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">Email</label>
                <input
                name='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                
                  type="email"
                  placeholder=" email"
                  className="input"
                />
                {formik.errors.email && formik.touched.email ? (<div className='text-sm text-red-500'>{formik.errors.email}</div>):("")}
              </div>
          {/* passworddddddddd */}
               <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 ">Password</label>
                <input
                name='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                 
                  type="password"
                  placeholder="Enter password"
                  className="input"
                />
                {formik.errors.password && formik.touched.password ? (<div className='text-sm text-red-500'>{formik.errors.password}</div>):("")}
              </div>
                     <button className='w-full btn-filled' type='submit'>LogIn</button>
                     <p className='text-center cursor-pointer'>Do not have an account yet ? <span className='text-mainColor font-bold underline'>Sign Up</span>  </p>
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
