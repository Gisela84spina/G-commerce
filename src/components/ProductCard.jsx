import { message } from "antd";
import { FaCartPlus } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { addToFav } from "../store/favSlice";

export function ProductCard({ product }) {

  const dispatch = useDispatch();
  const nav = useNavigate();
  const userLogged = useSelector((state) => state.user.userLogged);

  const handleAddToCart = () => {
    if (!(userLogged && userLogged.name)) {
      return nav("/login");
    }
    dispatch(addToCart({
      product: product,
      quantity: 1
    }));
    message.success("Producto agregado al carrito!");
  };

  const handleAddToFav = () => {
    if (!(userLogged && userLogged.name)) {
      return nav("/login");
    }
    dispatch(addToFav({
      product: product,
      quantity: 1
    }));
    message.success("Producto agregado a favoritos!");
  };
  
  return (
    
    <div className="flex flex-col w-full max-h-[300px] bg-gradient-to-r from-red-50 via-red-100 to-red-150 rounded
    hover:bg-red-300 border-opacity-50 transition-all duration-150">
      <img src={product.thumbnail} onClick={() => nav(`/product/${product.id}`)} className="cursor-pointer w-[150px] mx-auto" />

      <div className="p-2 flex flex-col gap-2 items-center">
       
        <p onClick={() => nav(`/product/${product.id}`)} className="cursor-pointer text-center font-semibold text-gray-900 flex-grow">
        {product.title}
        </p>
        <div className="w-full space-y-2">
          <div onClick={() => nav(`/product/${product.id}`)} className="cursor-pointer flex justify-between w-full items-center bg-gray-400 rounded-md p-2">
            <p className=" text-gray-900 font-semibold">${product.price}</p>
            <span className="px-3  rounded-md bg-gray-800 text-xs font-semibold text-white ">
              {""}
              {product.category}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 text-3xl text-gray-800">
            <button onClick={handleAddToCart} className="rounded-lg border border-transparent hover:border-gray-500">
              <FaCartPlus/>
            </button>
            <button onClick={handleAddToFav} className="rounded-lg border border-transparent hover:border-gray-500">
              <MdFavorite/>
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}