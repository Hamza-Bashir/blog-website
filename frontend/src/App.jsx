import HomePage from "./component/Page/HomePage"
import RegisterPage from "./component/Page/RegisterPage"
import LoginPage from "./component/Page/LoginPage"
import {Routes, Route} from "react-router-dom"
import CategoryPage from "./component/Page/CategoryPage"
import PostPage from "./component/Page/PostPage"
import CreatePost from "./component/CreatePost"
function App(){
  return <>
 <Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="/register" element={<RegisterPage/>} />
  <Route path="/login" element={<LoginPage/>} />
  <Route path="/create-category" element={<CategoryPage/>} />
  <Route path="/all-post" element={<PostPage/>} />
  <Route path="/create-post" element={<CreatePost/>} />
 </Routes>
  </>
}

export default App