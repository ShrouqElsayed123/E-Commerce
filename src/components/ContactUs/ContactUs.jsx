import toast, { Toaster } from 'react-hot-toast';
import bg from '../../assets/images/bg.avif'
import shoppingGirl from '../../assets/images/shopping girl.jpg'



export default function ContactUs() {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Message sent successfully!")
    }
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <div className='max-w-7xl px-4 pb-10 mx-auto'>
                {/* // header  */}
                <div className='relative h-52 flex items-center justify-center text-center mb-10'>

                    <div className='inset-0 opacity-15 bg-cover bg-center absolute'
                        style={{ backgroundImage: `url(${bg})` }}
                    ></div>

                    <div className='relative z-10'>
                        <h2 className='text-3xl font-bold mb-3'>Contact Us</h2>
                        <p>Home / Contact Us</p>
                    </div>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                    {/* Form  */}
                    <form className='space-y-2 w-full' onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <label className="block mb-1 font-medium">First Name *</label>
                                <input type="text"
                                    placeholder='Ex:- Ali'
                                    className='input'
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Last Name *</label>
                                <input type="text"
                                    placeholder='Ex:- mohamed'
                                    className='input'
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <label className="block mb-1 font-medium">Email *</label>
                                <input type="email"
                                    placeholder='Ali123@gmail.com'
                                    className='input'
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Phone *</label>
                                <input type="tel"
                                    placeholder='Ex:- 01553507120'
                                    className='input'
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Subject *</label>
                            <input type="text"
                                placeholder='Enter here ..'
                                className='input'
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Your Message *</label>
                            <textarea type="text"
                                rows={4}
                                placeholder='Enter here ..'
                                className='input'
                            />
                        </div>

                        <button className='btn-filled w-full' type='submit'>Send a Message</button>
                    </form>

                    {/* الصورةةةة  */}

                    <div className="flex justify-center">
                        <img
                            src={shoppingGirl}
                            alt="Contact"
                            className="rounded-xl shadow-md max-h-[450px] object-cover"
                        />
                    </div>
                </div>

                {/* طرق التواصل  */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 text-center'>
                    <div className='p-6 shadow-sm border rounded-lg'>
                        <i className="fa-solid fa-map-location bg-secondaryColor p-3 rounded-full text-white
                        text-xl mb-2" ></i>
                        <h4 className="font-semibold text-lg mb-1">Address</h4>
                        <p>8502 Preston Rd. Inglewood, Maine 98380</p>
                    </div>
                    <div className='p-6 shadow-sm border rounded-lg'>
                        <i className="fa-solid fa-phone bg-secondaryColor p-3 rounded-full text-white
                        text-xl mb-2" ></i>
                        <h4 className="font-semibold text-lg mb-1">Phone</h4>
                        <p>01553507121</p>
                    </div>
                    <div className='p-6 shadow-sm border rounded-lg'>
                        <i className="fa-solid fa-envelope bg-secondaryColor p-3 rounded-full text-white
                        text-xl mb-2" ></i>
                        <h4 className="font-semibold text-lg mb-1">E-mail</h4>
                        <p>marketio1@gmail.com</p>
                    </div>

                </div>

            </div>






        </>
    )
}
