import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"

export const App = ()=>{

  return(
    <div className=" relative">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}