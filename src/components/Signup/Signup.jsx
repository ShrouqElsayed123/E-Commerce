
import { useFormik } from 'formik'
import img1 from '../../assets/images/marketio.webp'
import * as yup from 'yup'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
export default function Signup() {
  const navigate = useNavigate()
  // Vakidation using yup 
  const x =yup.object({
    name:yup.string().required("This field is required").min(3,"name must be more than 3 character").max(25,"name must be less than 25 character"),
    email:yup.string().required("This field is required").email("Incorrect formatting of the email"),
    password:yup.string().required("This field is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,'The password must contain an uppercase letter, a lowercase letter, a special symbol, and be at least 8 characters long.'),
    rePassword:yup.string().required("This field is required").oneOf([yup.ref('password')],'Passwords must match'),
    phone:yup.string().required("This field is required").matches(/^01[0125][0-9]{8}$/,'Incorrect formatting of the phone number')
  })



  let formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      rePassword:"",
      phone:""
    },
    validationSchema:x,
    onSubmit:async (values)=>{
    const toastId=toast.loading("User Creating .....")
     try{
       const option={
        url:'https://ecommerce.routemisr.com/api/v1/auth/signup',
        method:'POST',
        data:values
      }
    const {data} =await axios.request(option)
   
   if(data.message=='success'){toast.dismiss(toastId)}
   toast.success('User Created Sucessfully');
   setTimeout(()=>{navigate('/login')},2000)
     }
     catch(error){
      toast.dismiss(toastId);
      toast.error( error.response?.data?.message || error.message)
      // console.error();
      
     }
   
    }
  })



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

            {/* //form  */}
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              {/* Name */}
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">Name</label>
                <input
                name='name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                
                  
                  type="text"
                  placeholder=" name"
                  className="input"
                />
                {formik.errors.name && formik.touched.name ? (<div className='text-sm text-red-500'>{formik.errors.name}</div>):("")}
              </div>

              {/* Email */}
              <div className="space-y-1">
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

              {/* Phone */}
              <div className="space-y-1">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 ">Phone</label>
                <input
                name='phone'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                 
                  type="tel"
                  placeholder=" phone"
                  className="input"
                />
                {formik.errors.phone && formik.touched.phone ? (<div className='text-sm text-red-500'>{formik.errors.phone}</div>):("")}
              </div>

              {/* Password */}
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

              {/* Re-Password */}
              <div className="space-y-1">
                <label htmlFor="repassword" className="block text-sm font-medium text-gray-700 ">Confirm Password</label>
                <input
                name='rePassword'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rePassword}
                 
                  type="password"
                  placeholder="Re-enter password"
                  className="input"
                />
                {formik.errors.rePassword && formik.touched.rePassword ? (<div className='text-sm text-red-500'>{formik.errors.rePassword}</div>):("")}
              </div>

              <button className="w-full btn-filled" type='submit'>Sign Up</button>
              <p className="text-center cursor-pointer">
                Do you have an account?{" "}
                <span className="text-mainColor font-bold underline">Log In</span>
              </p>
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

