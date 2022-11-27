import "./custom-interface.style.css";
import React, {useEffect, useState} from "react";
import CustomResultText from "../../components/CustomResultText/CustomResultText";
import axios from "axios";

const CustomInterface = ({id, data, start_calculation, decreasedInProgressTasks, ...otherProps }) => {
    const AuthToken = JSON.parse(localStorage.getItem("user"));

    const [endCalculation, setEndCalculation] = useState(null)
    const [duration, setDuration] = useState(null)
    function getLogs(id) {
        console.log("getLogs");
        return axios.get("http://localhost:8765/api/v1/permutation/" + id, {
            headers: {
                authorization: AuthToken["jwt"]
            }
        })
            .then((response) => {
                const data = response.data;
                setEndCalculation(data.endCalculation.substring(0, 19))
                setDuration(data.duration)
                console.log(response.data)
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.message)
                    console.log("error")
                }
            });
    }

    useEffect(() => {
        if (duration || duration === 0 ) {
            decreasedInProgressTasks()
        }
    },[duration])

    useEffect(() => {
        let timer;
        if (data.length < 8) {
            timer = 1000;
        }
        else {
            timer = 5000;
        }
        if (endCalculation === null) {
            const s = setInterval(()=>getLogs(id), timer)
            return ()=>(clearInterval(s))
        }
    })

    function factorial(n) {
        if (n < 0) return;
        if (n < 2) return 1;
        return n * factorial(n - 1);
    }

    return (
        <div className={"custom-interface-container"}>
            <div className={"custom-interface-interface-1"}>
                <CustomResultText
                    resultValue={data}
                    label={"Entered characters: "}
                />
                <CustomResultText
                    resultValue={data.length}
                    label={"Number of characters: "}
                />
                <CustomResultText
                    resultValue={factorial(+data.length)}
                    label={"Number of permutations: "}
                />
                <div className={"custom-interface-button-space"}/>
            </div>
            <div className={"custom-interface-interface-2"}>
                <CustomResultText
                    resultValue={start_calculation ? start_calculation : "..."}
                    label={"Start time: "}
                />
                <CustomResultText
                    resultValue={endCalculation ? endCalculation : "..."}
                    label={"End time: "}
                />
                <CustomResultText
                    resultValue={duration || duration === 0 ? duration : "..."}
                    label={"Duration: "}
                />
                <div/>
                <div/>
                <div className={"custom-interface-circles"}>
                    <div className={"custom-interface-yellow-circle"}/>
                    <div className={duration || duration === 0 ?
                        "custom-interface-green-circle" :
                        "custom-interface-empty-circle"}/>
                </div>
            </div>
        </div>
    );
}

export default CustomInterface;