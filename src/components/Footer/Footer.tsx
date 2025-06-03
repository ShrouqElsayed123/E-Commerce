export default function Footer() {
  return (
    <footer className="bg-mainColor text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* column 1 */}
        <div className="md:col-span-2 flex flex-col gap-5">
          <a href="#" className="flex items-baseline gap-2">
            <i className="fa-solid fa-bag-shopping text-2xl block text-mainColor bg-white p-[6px] rounded-full"></i>
            <p className="text-2xl font-bold dark:text-white">
              Marketo <span className="text-white text-4xl font-bold dark:text-white">.</span>
            </p>
          </a>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia aut quaerat non suscipit repudiandae cumque sint illum perferendis accusantium quo.
          </p>
          <div className="flex gap-5 items-center">
            <i className="fa-brands fa-facebook footer-icon"></i>
            <i className="fa-brands fa-square-twitter footer-icon"></i>
            <i className="fa-brands fa-youtube footer-icon"></i>
            <i className="fa-brands fa-instagram footer-icon"></i>
          </div>
        </div>

        {/* column 2 */}
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Company</h1>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Career</li>
          </ul>
        </div>

        {/* column 3 */}
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Customer Services</h1>
          <ul className="space-y-1">
            <li>My Account</li>
            <li>Track your order</li>
            <li>Return</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* column 4 */}
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Information</h1>
          <ul className="space-y-1">
            <li>Privacy</li>
            <li>Terms & Conditions</li>
            <li>Return Policy</li>
          </ul>
        </div>
      </div>

    
<hr />
      <div className="text-center py-4 text-sm">
        © 2025 Marketo. All rights reserved.
      </div>
    </footer>
  );
}
