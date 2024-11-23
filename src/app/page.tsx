

import Header from "./components/header"
import Main from "./components/main"
import Navbar from "./components/navbar"

const Home=()=>{
  return(
    <div className="w-[1440px] h-[4370px] bg-[#ffffff]">
        <Header />
        <Navbar />
        <Main />
    </div>
  )
}

export default Home