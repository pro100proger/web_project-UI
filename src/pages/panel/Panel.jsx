import "./panel.style.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, {useEffect, useState} from "react";
import axios from "axios";
import AdminInterface from "../../components/AdminInterface/AdminInterface";

const Panel = () => {
    const AuthToken = JSON.parse(localStorage.getItem("user"));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [interfaces, setInterfaces] = useState([])

    useEffect(() => {
        getServers();
    }, []);

    function getServers() {
        console.log("getServers");
        return axios.get("http://localhost:8765/api/v1/servers", {
            headers: {
                authorization: AuthToken["jwt"]
            }
        })
            .then((response) => {
                const data = response.data;
                console.log(response.data)
                const arrays = data.map(item => ({
                    server: item.id,
                    tasksInProgress: item.tasksInProgress
                }))
                setInterfaces([...interfaces, ...arrays])
                console.log(response.data)
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.message)
                    console.log("error")
                }
            });
    }

    return (
        <div className={"panel-container"}>
            <div>
                <div className={"panel-header-container"}>
                    <Header/>
                </div>

                <div className={"panel-auxiliary-container"}>
                    <div className={"panel-auxiliary-text-container"}>
                        <div className={"panel-text"}>
                            This is admin panel. Here you can manage your servers.
                        </div>

                        {interfaces.map((interface_, index) => <AdminInterface
                            server={interface_.server}
                            tasksInProgress={interface_.tasksInProgress}
                            key={index}
                        />)}
                    </div>
                </div>
            </div>

            <div className={"panel-footer-container"}>
                <Footer/>
            </div>
        </div>
    );
}

export default Panel;