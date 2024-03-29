
export const Footer = () => {
    return (
        <div className="bg-gray-200">
            {/* <div className="fixed bottom-0 left-0 right-0 z-40 px-4 py-3 text-center text-white bg-gray-800">
                This a simple footer by Queen-esther01.
                <a className="text-gray-200 underline" href="https://tailwindcomponents.com/component/simple-footer">Component details</a>
            </div> */}
            <div className=" bg-gray-900">
                <div className="max-w-2xl mx-auto text-white py-10">
                    <div className="text-center">
                        <h3 className="text-3xl mb-3"> Download our official app </h3>
                        <p> Stay link. All day, every day. </p>
                        <div className="flex justify-center my-10">
                            <div className="flex items-center border rounded-lg px-4 py-2 w-52 mx-2 hover:border-yellow-500 cursor-pointer">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" />
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-200'>Download on </p>
                                    <p className="text-sm md:text-base"> Google Play Store </p>
                                </div>
                            </div>
                            <div className="flex items-center border rounded-lg px-4 py-2 w-44 mx-2 hover:border-yellow-500 cursor-pointer">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" />
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-200'>Download on </p>
                                    <p className="text-sm md:text-base"> Apple Store </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                        <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; DOiiNN, 2030. </p>
                        <div className="order-1 md:order-2">
                            <span className="px-2 cursor-pointer hover:text-yellow-400">About us</span>
                            <span className="px-2 cursor-pointer hover:text-yellow-400 border-l">Contact us</span>
                            <span className="px-2 cursor-pointer hover:text-yellow-400 border-l">Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}