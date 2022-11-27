import './App.css';
import * as React from "react";
import Login from './pages/login/login';
import Registration from './pages/registration/registration';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main/main";
import Calculator from "./pages/calculator/Calculator";

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
                        {/*<Route path="history" element={<History/>}/>*/}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
