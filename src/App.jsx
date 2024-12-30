import { Route, Routes } from "react-router-dom";
import { Footer, NavBar, MainProvider, ProductDetail } from "./components";
import { RegisterPage, HomePage, LoginPage, AboutUs, NotFound, 
  ProductsPage, CartPage, WishPage } from "./pages";
import './App.css'

function App() {
  
  return (
    <main className="min-h-screen bg-gradient-to-r from-red-50 via-red-100 to-red-150">
      <div className="bg-gray-900 text-white text-center capitalize p-2">
        <header><p>summer sale for all swim suits and free expres 
        delivery-off 50%! <b><u>shop now</u></b></p>
        </header>
      </div>
      <div><NavBar/></div>
        <div className="p-12">
          <MainProvider>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
              <Route path="/products" element={<ProductsPage/>} />
              <Route path="/about" element={<AboutUs/>}/>
              <Route path="/wishlist" element={<WishPage/>}/>
              <Route path="/cart" element={<CartPage/>}/>
              <Route path="/*" element={<NotFound/>}/>
              <Route path="/product/:id" element={<ProductDetail/>} />
            </Routes>
          </MainProvider>
        </div>
      <div><Footer/></div>
    </main>
  )
}

export default App