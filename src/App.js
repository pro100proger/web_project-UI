import './App.css';
import * as React from "react";
import Login from './pages/login/login';
import Registration from './pages/registration/registration';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login/>}/>
                    <Route path="registration" element={<Registration/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
