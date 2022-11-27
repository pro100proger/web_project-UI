import './App.css';
import * as React from "react";
import Login from './pages/login/login';
import Registration from './pages/registration/registration';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/main/main";
import Calculator from "./pages/calculator/Calculator";
import History from "./pages/history/history";
import Panel from "./pages/panel/Panel";

function getUserRole(){
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user", user)
    if (user != null){
        return JSON.parse(localStorage.getItem("user")).role;
    }
    else{
        return null;
    }
}

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="login" element={<Login/>}/>
                        <Route path="registration" element={<Registration/>}/>
                        <Route path="main" element={<Main/>}/>
                        <Route path="calculator" element={<Calculator/>}/>
                        <Route path="history" element={<History/>}/>
                        <Route path="panel" element={getUserRole() === "ADMIN" ? <Panel/> : <Navigate to={"/"}/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
