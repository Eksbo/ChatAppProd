import "./App.css";
import { LoginPage } from "./components/pages/loginPage/LoginPage";
import { RegisterPage } from "./components/pages/registerPage/RegisterPage";
import { Routes, Route} from "react-router-dom";
import { FirstPage } from "./components/pages/firstPage/FirstPage";
import { UserPage } from "./components/pages/userPage/UserPage";
import {ForgotPassword} from "./components/pages/forgotPassword/ForgotPassword";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";

// import { PrivateRouter } from "./components/utils/PrivateRouter";

function App() {
//   const navigate = useNavigate()
//   const isAppLoaded= useSelector(state => state.app.isAppLoaded)
//   useEffect(()=>{
// if(isAppLoaded){
//  navigate('/user')
// }
//   },[isAppLoaded])
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
