import { BrowserRouter, Route, Routes } from "react-router-dom"
import * as Auth from "./pages/Auth";
import { Home } from "./pages/Home"

export const App = ()=>{

  return(
    <div className=" relative">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sendotp" element={<Auth.SendOTPPage />}></Route>
            <Route path="/verifyotp" element={<Auth.VerifyOTPPage />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}