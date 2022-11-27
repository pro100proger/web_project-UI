import "./history.style.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, {useEffect, useState} from "react";
import axios from "axios";
import CustomHistoryInterface from "../../components/CustomHistoryInterface/CustomHistoryInterface";

const History = () => {
    const AuthToken = JSON.parse(localStorage.getItem("user"));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [interfaces, setInterfaces] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [historyPermutation, setHistoryPermutation] = useState({
        data: "",
        start_calculation: "",
        end_calculation: "",
        duration: ""
    });

    const handleChange = ({target: {name, value}}) => {
        setHistoryPermutation({...historyPermutation, [name]: value});
    };

    useEffect(() => {
        getHistory();
    }, []);

    function getHistory() {
        console.log("getHistory");
        return axios.get("http://localhost:8765/api/v1/permutations", {
            headers: {
                authorization: AuthToken["jwt"]
            }
        })
            .then((response) => {
                const data = response.data;
                console.log(response.data)
                const arrays = data.map(item => ({
                    data: item.data,
                    start_calculation: item.startCalculation.substring(0, 19),
                    end_calculation: item.endCalculation.substring(0, 19),
                    duration: item.duration
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
        <div className={"history-container"}>
            <div>
                <div className={"history-header-container"}>
                    <Header/>
                </div>

                <div className={"history-auxiliary-container"}>
                    <div className={"history-auxiliary-text-container"}>
                        <div className={"history-text"}>
                            HISTORY
                        </div>

                        {interfaces.map((interface_, index) => <CustomHistoryInterface
                            data={interface_.data}
                            start_calculation={interface_.start_calculation}
                            end_calculation={interface_.end_calculation}
                            duration={interface_.duration}
                            key={index}
                        />)}
                    </div>
                </div>
            </div>

            <div className={"history-footer-container"}>
                <Footer/>
            </div>
        </div>
    );
}

export default History;