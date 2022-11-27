import "./calculator.style.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useNavigate} from "react-router-dom";
import React, {useMemo, useRef, useState} from "react";
import CustomResultText from "../../components/CustomResultText/CustomResultText";
import CustomInterface from "../../components/CustomInterface/CustomInterface";
import axios from "axios";

const Calculator = () => {
    const AuthToken = JSON.parse(localStorage.getItem("user"));
    const ref = useRef(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [interfaces, setInterfaces] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [permutation, setPermutation] = useState({
        id: "",
        data: "",
        start_calculation: "",
        end_calculation: "",
        duration: ""
    });

    const [inProgressTasks, setInProgressTasks] = useState(0)
    const decreasedInProgressTasks = () => {
        setInProgressTasks(inProgressTasks - 1)
    }

    function factorial(n) {
        if (n < 0) return;
        if (n < 2) return 1;
        return n * factorial(n - 1);
    }

    const handleChange = ({target: {name, value}}) => {
        if (value > 10) return
        setPermutation({...permutation, [name]: value});
    };

    const handleSubmit = async () => {
        await startCalculation(permutation)
        setInProgressTasks(inProgressTasks + 1)
        console.log(permutation)
        setPermutation({
            id: "",
            data: "",
            start_calculation: "",
            end_calculation: "",
            duration: ""
        })
        ref.current.focus()
    }

    function startCalculation(permutation) {
        console.log("startCalculation");
        const sendPermutation = {
            data: permutation.data
        };
        return axios.post("http://localhost:8765/api/v1/permutation", sendPermutation, {
            headers: {
                authorization: AuthToken["jwt"]
            }
        })
            .then((response) => {
                const data = response.data;
                setInterfaces([...interfaces, {
                    ...permutation,
                    id: data.id,
                    start_calculation: data.startCalculation.substring(0, 19)
                }])
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
        <div className={"calculator-container"}>
            <div>
                <div className={"calculator-header-container"}>
                    <Header/>
                </div>

                <div className={"calculator-auxiliary-container"}>
                    <div className={"calculator-auxiliary-text-container"}>
                        <div className={"calculator-text"}>
                            Please enter the sequence of numbers in the appropriate field, then click the "Calculate"
                            button
                            and wait.
                        </div>

                        <div className={"calculator-interface"}>
                            <div className={"calculator-interface-1"}>
                                <input
                                    className="calculator-input"
                                    name={"data"}
                                    value={permutation.data}
                                    placeholder={"Enter characters"}
                                    onChange={handleChange}
                                    ref={ref}
                                    disabled={inProgressTasks > 5}

                                />
                                <CustomResultText
                                    resultValue={permutation.data.length}
                                    label={"Number of characters: "}
                                />
                                <CustomResultText
                                    resultValue={permutation.data ? factorial(permutation.data.length) : 0}
                                    label={"Number of permutations: "}
                                />


                                <button className={"calculator-button-calculate"}
                                        onClick={handleSubmit}
                                        disabled={inProgressTasks > 5}>
                                    Calculate
                                </button>
                            </div>
                            <div className={"calculator-interface-2"}>
                                <CustomResultText
                                    resultValue={"..."}
                                    label={"Start time: "}
                                />
                                <CustomResultText
                                    resultValue={"..."}
                                    label={"End time: "}
                                />
                                <CustomResultText
                                    resultValue={"..."}
                                    label={"Duration: "}
                                />
                                <div className={"calculator-circles"}>
                                    <div className={"calculator-yellow-circle"}/>
                                    <div className={"calculator-green-circle"}/>
                                </div>
                            </div>
                        </div>

                        {interfaces.map((interface_, index) => <CustomInterface
                            id={interface_.id}
                            data={interface_.data}
                            start_calculation={interface_.start_calculation}
                            decreasedInProgressTasks={decreasedInProgressTasks}
                            key={index}
                        />)}

                    </div>
                </div>
            </div>


            <div className={"calculator-footer-container"}>
                <Footer/>
            </div>
        </div>
    );
}

export default Calculator;