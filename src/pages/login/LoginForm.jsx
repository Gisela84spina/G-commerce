import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/login.service";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { setUserLogged } from "../../store/userSlice"

export function LoginForm() {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      email: email,
      password: password,
    }
    try {
      if (data.email === "" || data.password === "") {
        message.info("Faltan datos")
        return
      }
      setIsLoading(true)
      const response = await login(data)
      console.log("Respuesta del Login", response.data)
      const accessToken = response.data.backendTokens.accessToken
      localStorage.setItem("accessToken", accessToken)
      dispatch(setUserLogged(response.data.user))
      nav("/")
    } catch (error) {
      message.error("Credenciales invalidas")
      console.log("Error at Login", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form class="max-w-lg w-full mr-auto ml-auto"onSubmit={handleSubmit}>

      <div class="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div class="p-10">
          <h2 class="text-center text-3xl font-bold text-white">
            Log In
          </h2>
          <p class="mt-4 text-center text-gray-400">Sign in to continue</p>
            <input
              class="mt-4 rounded-md shadow-sm relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="grupo3@ejemplo.com"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              class="mt-4 rounded-md shadow-sm relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="*****"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          
          <div>
            <div class="flex items-center">
              <input
                class="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 rounded"
                type="checkbox"
                name="remember-me"
                id="remember-me"
              />
              <label class="p-3 block text-sm text-gray-400"
              >Remember me</label>
              </div>
              <div class="text-sm text-center">
                <a class="font-medium text-indigo-500 hover:text-indigo-400 hover:underline hover:cursor-pointer">
                  Forgot your password?
                </a>
              </div>
          </div>

          <div>
            <button
              className={`${ isLoading ? "opacity-40 my-4 group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" : "my-4 group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" }`}
              disabled={isLoading}
            >
              {isLoading ? "Cargando..." : "Log in"}
            </button>
            <div class="px-8 py-4 bg-gray-700 text-center">
              <p class="text-gray-400">You dont have account? {""}</p>
              <Link to={"/register"} className="underline font-medium text-indigo-500 hover:text-indigo-400">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>

  )
}