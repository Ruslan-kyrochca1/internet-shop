import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Products from "./pages/Products/Products"
import Cart from "./pages/Cart/Cart"
import NotFound from "./pages/NorFound/NotFound"


const App: React.FC = () => {
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path= "/" element ={<Products/>}/>
        <Route path= "/cart" element ={<Cart/>}/>
        <Route path= "*" element ={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
