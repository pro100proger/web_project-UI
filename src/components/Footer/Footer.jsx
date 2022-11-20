import "./footer.style.css";
import {ReactComponent as CalculatorHeader} from "../../icons/CalculatorHeader.svg";
import {useNavigate} from "react-router-dom";

const Footer = () => {

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

    return (
        <div className={"footer-container"}>

            <div className={"footer-auxiliary-container-1"}>
                <div className={"footer-auxiliary-container-group-1"}>
                    <div className={"footer-buttons-container"}>
                        Description
                    </div>
                    <div className={"footer-description"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam cumque ullam. Ad
                        assumenda eligendi eos exercitationem harum itaque libero natus necessitatibus odio omnis quas
                        quos reiciendis sit voluptatibus, voluptatum! assumenda eligendi eos exercitationem harum itaque libero natus necessitatibus odio omnis quas
                        quos reiciendis sit voluptatibus, voluptatum!
                    </div>
                </div>
                <div className={"footer-auxiliary-container-group-2"}>
                    <div className={"footer-buttons-container"}>
                        <div className={"footer-pages-button"}>
                            Pages:
                        </div>
                        <div className={"footer-button"} onClick={main}>
                            Main
                        </div>
                        <div className={"footer-button"} onClick={calculator}>
                            Calculator
                        </div>
                        <div className={"footer-button"} onClick={history}>
                            History
                        </div>
                    </div>
                </div>
            </div>

            <div className={"footer-auxiliary-container-2"}>
                <div className={"footer-line"}>
                </div>
            </div>

            <div className={"footer-auxiliary-container-3"}>
                <div className={"footer-logo-and-text"}>
                    <div>
                        <CalculatorHeader/>
                    </div>
                    <div className={"footer-logo-text"}>
                        Calculus
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Footer;