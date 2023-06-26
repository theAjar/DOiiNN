import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header/>
            <div className="px-40 py-5">
                <div className="heroSection flex justify-between items-center">
                    <div>
                        <div className="text-6xl w-96 font-bold">Make someone's day together</div>
                        <div className="pt-10 text-lg font-semibold ">DOiiNN helps you to connect the peoples and moments that matter</div>
                    </div>
                    <img src="src\assets\2992779.jpg" className="w-[35rem] h-[35rem]" alt="no img" />
                </div>
                <div className="text-3xl w-96 font-bold">Our Products</div>
                <div className="pt-10 flex justify-evenly items-center flex-wrap">
                    <button className=" m-4 rounded-2xl shadow-md shadow-black w-40 h-40 bg-gradient-to-r from-indigo-500
                     to-cyan-400 text-slate-50 font-bold flex justify-center items-center active:bg-gradient-to-l" onClick={()=>navigate('/sendotp')}>Telegate</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}