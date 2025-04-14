import HomePage from "./page/HomePage"
import {Routes, Route} from "react-router-dom"
import RegisterPage from "./page/RegisterPage"
import LoginPage from "./page/LoginPage"
import CategoryPage from "./page/CategoryPage"
import PostFormPage from "./page/PostFormPage"
import PostCardPage from "./page/PostCardPage"
function App(){
  return <>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/category" element={<CategoryPage/>}/>
    <Route path="/create-post/:id" element={<PostFormPage/>}/>
    <Route path="/all-post/:id" element={<PostCardPage/>}/>
  </Routes>
 
  </>
}

export default App