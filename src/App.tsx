import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Products from "./pages/Products/Products"
import Cart from "./pages/Cart/Cart"


const App: React.FC = () => {
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path= "/" element ={<Products/>}/>
        <Route path= "/cart" element ={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
