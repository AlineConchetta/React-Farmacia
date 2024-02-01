import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/NavBar"
import Home from "./pages/home/Home"

function App() {
 

  return (
    <>
      <div className="min-h-[80vh]"> 
      <Navbar/>
      <Home/>
      <Footer/>
      </div>
    </>
  )
}

export default App