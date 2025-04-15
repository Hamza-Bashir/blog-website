import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"
import {useUser} from "../store/userStore"
import axios from "axios"
import { toast } from "react-toastify"

function LoginUser(){
  const {login} = useUser()
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e)=>{
    e.preventDefault()
    
    const response = await axios.post("http://localhost:3000/api/v1/login", {
      email,
      password
    })
    const token = response.data.token
    const user = response.data.existingUser
    login(token, user)
    toast.success(response.data.message)
    navigate(`/`)
  }


    return (
    <div className="bg-cyan-100 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-cyan-800 mb-6 text-center">Login User</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          
          <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          New User?{" "}
          <Link to="/register" className="text-cyan-700 font-medium hover:underline">
            Register User
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginUser