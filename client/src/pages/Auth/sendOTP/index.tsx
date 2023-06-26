import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../api";

export const SendOTPPage = ()=>{
    const navigate = useNavigate();
    const [OTP, setOTP] = useState<any>({
        number:"",
        pin:[]
        })
    const handleChange = (event: any)=>{
        const {name, value} = event.target
        setOTP({...OTP, [name]:value})
    }
    const  handleLoginUser = async (event: { preventDefault: () => void; })=>{
        event.preventDefault()
        try{
            const response = loginUser(OTP.number)
            console.log("res",response);
        }catch(err){

        }
    }
    
    return(
        <div className="flex justify-center items-center w-full h-screen bg-slate-100">
            <div className="w-96 px-10 shadow-2xl py-20 rounded-xl border bg-slate-50 border-separate text-center">
                <div className="text-5xl font-bold">Let's Get Started</div>
                <div className="border-b-2 border-green-500 pt-10" />
                <form id="mobileNumber" onSubmit={handleLoginUser}>
                    <input className="mt-10 w-full p-2 px-10 rounded-full border-2 outline-none focus:border-blue-600 border-green-500"
                     name="number" type="text" value={OTP.number} onChange={handleChange} placeholder="Enter your Number" />
                    <button name="sentOTP" disabled={OTP.number.length < 9} className="bg-green-500 p-2 w-1/2 mt-5 rounded-full active:bg-green-600" onClick={handleLoginUser}>Send OTP</button>
                </form>
            </div>
        </div>
    )
}