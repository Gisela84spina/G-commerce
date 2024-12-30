import React from "react";
import { Link } from "react-router-dom" ;
import { FaFacebook , FaInstagram , FaLinkedin, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer  () {
    return (
        <footer className= "bg-gray-800 text-white" >
            <div className="grid text-center grid-cols-1 md:grid-cols-5 gap-8 px-4 md:px-16 lg:px-28 pt-4">

                <div>
                    <h2 className= "text-lg font-extrabold md-4 pb-4">Exclusive</h2>
                    <h3 className= "text-lg font-bold md-4">Suscribe</h3>
                    <p className="text-white pb-2">Get 10% off on your first order</p>
                    <p className="flex items-center relative bg-white text-gray-600 rounded-md">
                    <FaArrowRight className="absolute right-2 cursor-pointer"/>
                    <input type="text" placeholder="Your e-mail" className="text-gray-800 w-auto md:min-w-0 rounded pl-2 py-1 outline-none text-sm" />
                    </p>
                    <br/>
                </div>
                

                <div>
                     <h2 className= "text-lg font-extrabold md-4 pb-4">Support</h2>
                     <p> <Link  className="text-white hover:underline" to="https://www.google.com/maps/place/Escuela+de+Innovaci%C3%B3n+%26+Tecnolog%C3%ADa+-+Coworking/@-34.5881426,-60.9514748,21z/data=!4m15!1m8!3m7!1s0x95b8eb2d0dbef3c3:0xba53e850cd15e991!2sLiliedal+%26+Lavalle,+B6022+Jun%C3%ADn,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.5882797!4d-60.9517975!16s%2Fg%2F11f30gwh5y!3m5!1s0x95b8ebc2d08b90d3:0x215e1d45a659859e!8m2!3d-34.5882524!4d-60.951406!16s%2Fg%2F11vc9h8xvf?hl=es&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D">
                     Lavalle, Liliedal & Segundo piso, B6000 Junin, Provincia de Buenos Aires. </Link></p>
                     <br/>
                     <p className="text-white">supportGC@gmail.com</p>
                     <p className="text-white">G-commerce + 0800-111-555</p>
                </div>

                <div>
                    <h2 className= "text-lg font-extrabold md-4 pb-4">Account</h2>
                    <p><Link to="/login" class="hover:underline">Login</Link></p>
                    <p><Link to= "/register" class="hover:underline">Register</Link></p>
                    <p><Link to= "/wishlist" class="hover:underline">Favourites</Link></p> 
                </div>

                <div>
                    <h2 className="text-lg font-extrabold md-4 pb-4">Quick Link</h2>
                    <p><Link to={"https://policies.google.com/privacy"} className="text-white hover:underline">
                        Privacy Policy 
                    </Link></p>
                    <p><Link to={"https://policies.google.com/terms"} className="text-white hover:underline">
                        Terms Of Use
                    </Link></p>
                    <p><Link to={"https://policies.google.com/faq"} className="text-white hover:underline">
                        FAQ 
                    </Link></p>
                    <p><Link to={"https://support.google.com/contacts"} className="text-white hover:underline hover:text-#34465d">
                        Contact 
                    </Link></p>
                </div>

                <div>
                    <h2 className="text-lg font-extrabold md-4 pb-4">Download App<Link to={"https://play.google.com"}><br/><img src="qr.png" className="size-24 justify-self-center"/></Link></h2>

                    <ul className="flex space-x-4 justify-self-center">
                        <li><Link to={"https://facebook.com"} className="hover:text-[#1877f2]"><FaFacebook/></Link></li>
                        <li><Link to={"https://instagram.com"} className="hover:text-[#e4405f]"><FaInstagram/></Link></li>
                        <li><Link to={"https://linkedin.com"} className="hover:text-[#0077b5]"><FaLinkedin/></Link></li>
                        <li><Link to={"https://x.com"} className="hover:text-[#000000]"><FaXTwitter/></Link></li>
                        <li><Link to={"https://www.whatsapp.com/"} className="hover:text-[#25d366]"><FaWhatsapp/></Link></li> 
                    </ul>
                </div>
            </div>
            <br/>
            <div
                className="text-center mr-auto ml-auto border-t border-gray-400
                p-7 text-gray-400 text-sm"
             >
             <p>© Copyrights 2024. All rights reserved.</p>
            </div>
        </footer>
    )
};