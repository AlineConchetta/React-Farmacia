import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/NavBar"
import ListaCategorias from "./components/categoria/listarcategoria/ListarCategoria"
import FormCategoria from "./components/categoria/formcategoria/FormCategoria"
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria"


function App() {
  return (
    <>
      
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      
    </>
  )
}

export default App