import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { Footer } from "./components/Footer"
// import { Header } from "./components/Header"
import { Auth } from "./pages/Auth"
import { Home } from "./pages/Home"

export const App = ()=>{

  return(
    <div className=" relative">
      {/* <Header/> */}
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/auth" element={<Auth />}></Route>
        </Routes>
        </BrowserRouter>
      {/* <Footer/> */}
    </div>
  )
}