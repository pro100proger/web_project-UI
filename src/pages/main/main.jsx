import "./main.style.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useNavigate} from "react-router-dom";

const Main = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    function calculator() {
        navigate("/calculator");
    }

    return (
        <div className={"main-container"}>
            <div className={"main-header-container"}>
                <Header/>
            </div>

            <div className={"main-auxiliary-container"}>
                <div className={"main-auxiliary-text-container"}>
                    <div className={"main-welcome"}>
                        Welcome!
                    </div>
                    <div className={"main-first-text"}>
                        This is a web calculator that calculates all permutations of n elements.
                    </div>
                    <div className={"main-clicking-text"}>
                        You can start by clicking: <a className={"main-calculator"} onClick={calculator}>calculator</a>
                    </div>
                </div>


            </div>

            <div className={"main-footer-container"}>
                <Footer/>
            </div>
        </div>
    );
}

export default Main;