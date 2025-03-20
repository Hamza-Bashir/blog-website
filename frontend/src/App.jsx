import HomePage from "./component/Page/HomePage"
import RegisterPage from "./component/Page/RegisterPage"
import LoginPage from "./component/Page/LoginPage"
import {Routes, Route} from "react-router-dom"
function App(){
  return <>
 <Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="/register" element={<RegisterPage/>} />
  <Route path="/login" element={<LoginPage/>} />
 </Routes>
  </>
}

export default App