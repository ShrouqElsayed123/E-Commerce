
export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
            <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 border-4 border-t-green-600 border-b-green-600 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg font-medium tracking-wide">
                    Please wait, loading...
                </p>
            </div>
        </div>
    );
}
