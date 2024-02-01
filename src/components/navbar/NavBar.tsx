import { List, X } from "@phosphor-icons/react";
import { useState } from "react";


function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className='bg-blue-300 py-4'>
      <div className='flex items-center justify-between xl:max-w-9xl xl:mx-auto px-[4%] flex-wrap w-full'>
        <a href='/home' className="text-2xl font-bold">Farmácia</a>
      {
        open ?  
          
          <X 
            size={24} 
            color="#050505" 
            weight="bold"   
            className="lg:hidden block h-6 w-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        
          :
          <List 
          size={24} 
          color="#050505" 
          weight="bold" 
          className="lg:hidden block h-6 w-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      }
        

        <nav className={`${open ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
          <ul className="flex flex-col items-start lg:flex-row lg:justify-between text-white font-bold">
            <li>
              <a href='/sobre' className="lg:px-5 p-2 block rounded-xl hover:bg-blue-900 bg-blue-500 m-1">Produtos</a>
            </li>
            <li>
              <a href='/contato' className="lg:px-5 p-2 block rounded-xl hover:bg-blue-900 bg-blue-500 m-1">Categorias</a>
            </li>
            <li>
              <a href='/login' className="lg:px-5 p-2 block rounded-xl hover:bg-blue-900 bg-blue-500 m-1">Cadastrar Categoria</a>
            </li>
            <li>
              <a href='#' className="lg:px-8 p-2  block rounded-xl hover:bg-blue-900 bg-blue-500 m-1">Cadastre-se</a>
            </li>

          </ul>

        </nav>
      </div>
    </header>
  )
}

export default Navbar