import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services";
import { message } from "antd"

export function RegisterForm() {
  
  const [isLoading, setIsLoading] = useState(false)
  const nav = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setData((prev) => ({ ...prev, [key]: value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerData = {
      name: data.name,
      email: data.email,
      password: data.password,
    }

    try {
      if (
        data.email === "" ||
        data.password === "" ||
        data.confirmPassword === "" ||
        data.name === ""
      ) {
        message.info("Faltan datos.");
        return;
      }
      setIsLoading(true)

      if (data.password !== data.confirmPassword) {
        message.error("Las contraseñas no coinciden.");
        return;
      }
      const response = await register(registerData);

      nav("/login");
      message.success("Usuario registrado correctamente!");
    } catch (error) {
      if (error.status === 404) {
        return message.error("El mail ya se encuentra registrado!");
      }
      message.error("Error al crear usuario, intentalo mas tarde!");
      console.log("Error status", error.status);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <form class="max-w-lg w-full mr-auto ml-auto"onSubmit={handleSubmit}>
      <div class="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div class="p-10">
          <h2 class="text-center text-3xl font-bold text-white">
            Register
          </h2>
          <p class="mt-4 text-center text-gray-400">Create or connect a new account</p>
          <input
            class="mt-4 rounded-md shadow-sm relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="user name"
            type="text"
            onChange={handleInputChange}
            name="name"
            value={data.name}
          />
          <input
            class="mt-4 rounded-md shadow-sm relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="grupo3@ejemplo.com"
            type="text"
            onChange={handleInputChange}
            name="email"
            value={data.email}
          />
          <input
            class="mt-4 rounded-md shadow-sm relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="set password"
            type="password"
            onChange={handleInputChange}
            name="password"
            value={data.password}
          />
          <input
            class="mt-4 rounded-md shadow-sm relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="confirm password"
            type="password"
            onChange={handleInputChange}
            name="confirmPassword"
            value={data.confirmPassword}
          />
          <div>
          <button
              className={`${ isLoading ? "opacity-40 my-4 group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" : "my-4 group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" }`}
              disabled={isLoading}
            >
              {isLoading ? "Cargando..." : "Register"}
            </button>
            <div class="px-8 py-4 bg-gray-700 text-center">
              <p class="text-gray-400">Already have an account? {""}</p>
              <Link to={"/login"} className="underline font-medium text-indigo-500 hover:text-indigo-400">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}