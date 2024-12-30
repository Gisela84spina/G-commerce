import React, { useEffect, useState } from "react";
import { FaHeart, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearUserLoggedData } from "../store/userSlice";

import { GrLogin, GrLogout } from "react-icons/gr";
import { SearchProduct } from "./filter&search/SearchProduct";

import FavTab from "./FavTab";
import CartTab from "./CartTab"
import ProfileTab from "./ProfileTab"


export const NavBar = () => {

  const [showFav, setShowFav] = useState(false)
  const ShowFav = () => {
    if(showFav == true){
      setShowFav(false)
    }else{
      setShowFav(true)
    }
  }

  const [showCart, setShowCart] = useState(false)
  const ShowCart = () => {
    if(showCart == true){
      setShowCart(false)
    }else{
      setShowCart(true)
    }
  }

  const [showProfile, setShowProfile] = useState(false)
  const ShowProfile = () => {
    if(showProfile == true){
      setShowProfile(false)
    }else{
      setShowProfile(true)
    }
  }

  const [totalQuantityCart, setTotalQuantityCart] = useState(0);
  const [totalQuantityFav, setTotalQuantityFav] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const favs = useSelector(store => store.fav.items);

  useEffect(() => {
    let total = 0;
    carts.forEach(item => total += item.quantity);
    setTotalQuantityCart(total);
  }, [carts])

  useEffect(() => {
    let total = 0;
    favs.forEach(item => total += 1);
    setTotalQuantityFav(total);
  }, [favs])

  const userLogged = useSelector((state) => state.user.userLogged);

  return (
    <nav className= " flex items-center bg-gray-800 text-white text-right">
      
        <div className="grid text-center grid-cols-1 md:grid-cols-6 gap-8 px-4 md:px-16 lg:px-28 pt-4">
          <Link to={"/"}><img src="/G-commerce.png" className="size-14 p-1"/></Link>
          <Link to={"/about"} className="p-2 text-sm rounded-lg border border-transparent hover:border-gray-500" >
          About </Link>
          
        </div>
        <SearchProduct />
        <section className="flex items-center gap-4">
          {userLogged && userLogged.name ? (
            <div className="text-sm flex gap-4 h-full">
              <div className="text-sm flex gap-4 h-full">
                <button onClick={ShowFav} className="flex items-center p-2 text-sm rounded-lg  border border-transparent hover:border-red-300" href="/wishlist">
                  <FaHeart />{totalQuantityFav}
                </button>{showFav && (<FavTab/>)}
              </div>
              <div className="text-sm flex gap-4 h-full">
                <button onClick={ShowCart} className="flex items-center p-2 text-sm rounded-lg border border-transparent hover:border-red-300">
                  <FaCartShopping />{totalQuantityCart}
                </button>{showCart && (<CartTab/>)}
              </div>
              <div className="text-sm flex gap-4 h-full">
                <button onClick={ShowProfile} className="flex items-center p-2 text-sm rounded-lg border border-transparent hover:border-red-300">
                  <FaUser />
                  <span className="capitalize">{userLogged.name}</span>
                </button>{showProfile && (<ProfileTab/>)}
              </div>
            </div>
          ) : <Link className="gap-2 h-full flex items-center p-2 text-sm rounded-lg border border-transparent hover:border-gray-500" to={"/login"}><GrLogin/>Log In</Link> }
       
        </section>
         
    </nav>
  );
}




