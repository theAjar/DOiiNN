

export const Header = () => {
    return (
        <div id="header" className="sticky top-0 bg-green-200 bg-opacity-10 backdrop-blur-lg flex items-center justify-between h-16 px-40">
            <div className="text-2xl text-black font-bold">D<span className="text-yellow-500">Oii</span>NN</div>
            <div className="flex">
                <button className="w-32 mx-4 p-1 rounded-full bg-green-600">Connect to</button>
                <button className="w-32 mx-4 p-1 rounded-full border-green-600 border-2">Join us</button>
            </div>
        </div>
    )
}