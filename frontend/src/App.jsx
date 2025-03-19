import HomePage from "./component/Page/HomePage"
import RegisterPage from "./component/Page/RegisterPage"
import Register from "./component/Register"
import {Routes, Route} from "react-router-dom"
function App(){
  return <>
 <Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="/register" element={<RegisterPage/>} />
 </Routes>
  </>
}

export default App