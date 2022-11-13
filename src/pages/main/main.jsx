import "./main.style.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Main = () => {
    return (
        <div className={"main-container"}>
            <div className={"main-header-container"}>
                <Header/>
            </div>

            <div className={"main-filling"}>

            </div>



            <div className={"main-footer-container"}>
                <Footer/>
            </div>
        </div>
    );
}

export default Main;