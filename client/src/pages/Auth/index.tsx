import { ChangeEvent, MouseEvent, useState, useRef, useEffect } from "react"

export const Auth = ()=>{
    const ref = useRef(null)
        const [OTP, setOTP] = useState<any>({
        pin:[],
        number:"",
        })
    const [sentOTP, setSendOTP] = useState(false)
    useEffect(()=>{
        console.log("ref", ref.current);
        
    },[OTP])
    const handleUpdateState =(event: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target
        if(Array.isArray(OTP[name])){
            switch (name) {
                case "pin": setOTP({...OTP, [name]: [...OTP.pin, ...value]})                    
                    break;
            }
        }else{
            setOTP({...OTP, [name]: value})
        }
    }
    console.log("otp",OTP);
    
    return(
        <div className="flex justify-center items-center w-full h-screen bg-slate-100">
            <div className="w-96 px-10 shadow-2xl py-20 rounded-xl border bg-slate-50 border-separate text-center">
                <div className="text-5xl font-bold">Let's Get Started</div>
                <div className="border-b-2 border-green-500 pt-10" />
                { !sentOTP ? 
                <div id="mobileNumber" >
                    <input className="mt-10 w-full p-2 px-10 rounded-full border-2 outline-none focus:border-blue-600 border-green-500" name="number" onChange={(event)=>handleUpdateState(event)} type="text" placeholder="Enter your Number" />
                    <button name="sentOTP" className="bg-green-500 p-2 w-1/2 mt-5 rounded-full active:bg-green-600" onClick={()=>setSendOTP(true)}>Send OTP</button>
                </div> :
                <div id="OTP" className="flex justify-evenly pt-5">
                    
                    <input className="w-10 h-10 border-2 rounded-lg border-green-500 outline-none focus:border-gray-500 text-center" name="pin" type="text" maxLength={1} onChange={(event)=>handleUpdateState(event)} />
                    <input className="w-10 h-10 border-2 rounded-lg border-green-500 outline-none focus:border-gray-500 text-center" name="pin" type="text" maxLength={1} onChange={(event)=>handleUpdateState(event)} />
                    <input className="w-10 h-10 border-2 rounded-lg border-green-500 outline-none focus:border-gray-500 text-center" name="pin" type="text" maxLength={1} onChange={(event)=>handleUpdateState(event)} />
                    <input className="w-10 h-10 border-2 rounded-lg border-green-500 outline-none focus:border-gray-500 text-center" name="pin" type="text" maxLength={1} onChange={(event)=>handleUpdateState(event)}/>
                    <input className="w-10 h-10 border-2 rounded-lg border-green-500 outline-none focus:border-gray-500 text-center" name="pin" type="text" maxLength={1} onChange={(event)=>handleUpdateState(event)}/>
                </div>
            }
            </div>
        </div>
    )
}