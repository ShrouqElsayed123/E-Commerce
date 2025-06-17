
export default function NotFound() {
 return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 text-center">
      <div>
        <h1 className="text-[100px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-extrabold leading-none bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent">
          Oops!
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-4">
          404 - PAGE NOT FOUND
        </h2>
        <p className="text-gray-600 mt-2 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-mainColor hover:bg-mainColorDark1 text-white font-semibold rounded-full shadow-md transition"
        >
          GO TO HOMEPAGE
        </a>
      </div>
    </div>
  );
}
