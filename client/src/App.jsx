import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/LoginSignUpTW/SignIn";
import SignUp from "./components/LoginSignUpTW/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import DashHome from "./components/Dashboard/DashHome";
import Jobs from "./components/Jobs/Jobs";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp /> } />
        <Route path="/Dashboard/" element={<PrivateRoute ProtectRoute={<Dashboard />} />} >
          <Route path="Home" element={<PrivateRoute ProtectRoute={<DashHome /> } /> } />
          <Route path="Jobs" element={<PrivateRoute ProtectRoute={<Jobs />} /> } />
        </Route>
      </Routes> 
    </BrowserRouter>
  )
}