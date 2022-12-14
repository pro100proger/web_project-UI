import "./header.style.css";
import {ReactComponent as CalculatorHeader} from "../../icons/CalculatorHeader.svg";
import {useNavigate} from "react-router-dom";

const Header = () => {

    function getUserRole() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user != null) {
            return JSON.parse(localStorage.getItem("user")).role;
        } else {
            return null;
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    function main() {
        navigate("/main");
    }

    function calculator() {
        navigate("/calculator");
    }

    function history() {
        navigate("/history");
    }

    function panel() {
        navigate("/panel");
    }

    const handleClick = () => {
        localStorage.removeItem('user')
        navigate("/login");
    }

    return (
        <div className={"header-container"}>

            <div className={"header-row"}>

                <div className={"header-auxiliary-container-1"}>
                    <div className={"header-logo-and-text"}>
                        <div>
                            <CalculatorHeader/>
                        </div>
                        <div className={"header-logo-text"}>
                            Calculus
                        </div>
                    </div>
                </div>

                <div className={"header-auxiliary-container-2"}>
                    <div className={"header-buttons-container"}>
                        <div className={"header-button"} onClick={main}>
                            Main
                        </div>
                        <div className={"header-button"} onClick={calculator}>
                            Calculator
                        </div>
                        <div className={"header-button"} onClick={history}>
                            History
                        </div>
                        {getUserRole() === "ADMIN" &&
                            <div className={"header-button"} onClick={panel}>
                                Panel
                            </div>
                        }
                    </div>
                </div>

                <div className={"header-auxiliary-container-3"}>
                    <div className={"header-correct-button"}>
                        <div className={"header-log-out"} onClick={handleClick}>
                            log out
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;