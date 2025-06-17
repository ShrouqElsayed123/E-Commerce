import women from '../../assets/images/Grocery Woman.jpg';
import bg from '../../assets/images/bg.avif'

const team = [
    {
        name: 'Jenny Alexander',
        role: 'Founder & CEO',
        image: 'https://i.pinimg.com/736x/a8/0a/cf/a80acf16d26543b5192e88dc6d862e0e.jpg',
    },
    {
        name: 'Bessie Cooper',
        role: 'Operations Manager',
        image: 'https://i.pinimg.com/736x/ca/cb/19/cacb196590d8f40c55d825902e8ab733.jpg',
    },
    {
        name: 'Jane Cooper',
        role: 'Warehouse Manager',
        image: 'https://i.pinimg.com/736x/b3/3d/b9/b33db97b8d11035f8c4cccbc64ac964e.jpg',
    },
    {
        name: 'Robert Fox',
        role: 'Inventory Specialist',
        image: 'https://i.pinimg.com/736x/2a/5d/98/2a5d9824f6dd34f4e9480a809aca91fd.jpg',
    },
];


export default function AboutUs() {
    return (
        <>
            <div className='max-w-7xl px-4 py-10 space-y-20 mx-auto'>
                {/* // header  */}
                <div className='relative h-52 flex items-center justify-center text-center mb-10'>

                    <div className='inset-0 opacity-15 bg-cover bg-center absolute'
                        style={{ backgroundImage: `url(${bg})` }}
                    ></div>

                    <div className='relative z-10'>
                        <h2 className='text-3xl font-bold mb-3'>About Us</h2>
                        <p>Home / About Us</p>
                    </div>

                </div>

                {/* section one  */}
                <div className='flex flex-col lg:flex-row gap-10 items-center'>
                    {/* phote section  */}
                    <div className='w-full lg:w-1/2 relative'>
                        <div className='aspect-[4/3] w-full rounded-xl overflow-hidden'>
                            <img src={women} alt="women "
                                className='w-full h-full object-cover' />
                        </div>

                        <div className='absolute bg-secondaryColor top-4 left-4 px-4 py-2 flex items-center gap-3 rounded-sm'>
                            <p className='text-2xl font-black'>16</p>
                            <div>
                                <p className='text-xl font-bold'>Years</p>
                                <p>of Service

                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Text Section  */}
                    <div className='w-full lg:w-1/2 space-y-4'>
                        <div>
                            <p className='font-light text-gray-400'>About Us</p>
                            <h1 className='text-4xl font-bold '>Your Trusted Partner in <span className='text-mainColor'>Fresh Grocery Delivery</span></h1>
                        </div>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quibusdam dignissimos neque est, fugit odit numquam. Expedita cum qui odio, ipsa ratione, ut neque vel autem magnam facilis eligendi ipsam.</p>
                        <ul className='space-y-2'>
                            {
                                ['Eco-Friendly and Sustainable Practices',
                                    'Fresh and High-Quality Groceries',
                                    'Convenient and Reliable Delivery',
                                ].map((i, k) => (
                                    <li key={k} className='text-gray-500'>
                                        <i className="fa-solid fa-square-check text-green-500 text-xl pr-2"></i>
                                        {i}
                                    </li>
                                ))
                            }
                        </ul>
                        <div>
                            <p className='text-xl font-bold'>Shrouq Mostafa</p>
                            <p className='text-gray-400'>Founder</p>
                        </div>
                    </div>



                </div>


                {/* section two  */}
                <div className='flex flex-col lg:flex-row gap-10 items-center'>
                    <div className='space-y-3 shadow-md px-8 py-4'>
                        <div className='bg-mainColor px-4 py-3 rounded w-fit'>
                            <i className="fa-solid fa-eye text-white text-2xl"></i>
                        </div>
                        <h1 className='text-2xl font-bold'>Our Mission</h1>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor pariatur amet odio laboriosam! Molestias facilis magni cumque voluptates nisi numquam temporibus quasi illo minima. Voluptas amet fuga nihil excepturi in?</p>
                    </div>
                    <div className='space-y-3 shadow-md px-8 py-4'>
                        <div className='bg-mainColor px-4 py-3 rounded w-fit'>
                            <i className="fa-solid fa-rocket text-white text-2xl"></i>
                        </div>
                        <h1 className='text-2xl font-bold'>Our Vision</h1>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor pariatur amet odio laboriosam! Molestias facilis magni cumque voluptates nisi numquam temporibus quasi illo minima. Voluptas amet fuga nihil excepturi in?</p>
                    </div>
                </div>




                <div className='text-center'>
                    <h4 className="text-gray-500 text-sm mb-2">Our Team</h4>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-1">
                        Meet The Passionate
                    </h2>
                    <h2 className="text-2xl md:text-3xl font-semibold text-mainColor mb-10">
                        Team Behind Our Success
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-md transition"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-[240px] object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-md font-semibold text-gray-800">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
