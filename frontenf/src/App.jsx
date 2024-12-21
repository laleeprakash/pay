
import{ BrowserRouter,Route,Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import Sendmoney from "./pages/Sendmoney"
import Update from "./pages/Update"
import Login from "./pages/Login"
function App() {


  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/sendmoney" element={<Sendmoney/>}/>
    <Route path="update" element={<Update/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
