import { useState, useEffect, useRef } from "react"

export const VerifyOTPPage = () => {
    const pinOne = useRef<HTMLInputElement>(null);
    const pinTwo = useRef<HTMLInputElement>(null);
    const pinThree = useRef<HTMLInputElement>(null);
    const pinFour = useRef<HTMLInputElement>(null);
    const pinFive = useRef<HTMLInputElement>(null);
    const [OTP, setOTP] = useState<any>({
        pin: []
    })
    useEffect(() => {
        switch (OTP.pin.length) {
            case 1: pinTwo.current?.focus()
                break;
            case 2: pinThree.current?.focus()
                break;
            case 3: pinFour.current?.focus()
                break;
            case 4: pinFive.current?.focus()
                break;
            case 0: pinOne.current?.focus()
                break;
        }
    }, [OTP])
    const handleUpdatePin = (event: any) => {
        const { value, name } = event.target
        let pinArray = [...OTP.pin]
        const existingPin = pinArray.includes((val: string, index: number) => val === value && index == name)
        existingPin ? pinArray.splice(Number(name), 1, value) : value ? pinArray.splice(Number(name), 0, value) : pinArray.pop()
        setOTP({ ...OTP, pin: pinArray })
    }

    return (
        <div className="flex justify-center items-center w-full h-screen bg-slate-100">
            <div className="w-96 px-10 shadow-2xl py-20 rounded-xl border bg-slate-50 border-separate text-center">
                <div className="text-5xl font-bold">Let's Get Started</div>
                <div className="border-b-2 border-green-500 pt-10" />
                <div id="OTP" className="flex justify-evenly pt-5">

                    <input className="w-10 h-10 border-2 rounded-lg border-green-500 outline-none focus:border-gray-500 text-center" name="0" defaultValue={""} onChange={handleUpdatePin} type="text" maxLength={1} ref={pinOne}/>
                    <input className="w-10 h-10 border-2 rounded-lg border-green-500 outline-none focus:border-gray-500 text-center" name="1" defaultValue={""} onChange={handleUpdatePin} type="text" maxLength={1} ref={pinTwo} />
                    <input className="w-10 h-10 border-2 rounded-lg border-green-500 outline-none focus:border-gray-500 text-center" name="2" defaultValue={""} onChange={handleUpdatePin} type="text" maxLength={1} ref={pinThree} />
                    <input className="w-10 h-10 border-2 rounded-lg border-green-500 outline-none focus:border-gray-500 text-center" name="3" defaultValue={""} onChange={handleUpdatePin} type="text" maxLength={1} ref={pinFour} />
                    <input className="w-10 h-10 border-2 rounded-lg border-green-500 outline-none focus:border-gray-500 text-center" name="4" defaultValue={""} onChange={handleUpdatePin} type="text" maxLength={1} ref={pinFive} />
                </div>
            </div>
        </div>
    )
}