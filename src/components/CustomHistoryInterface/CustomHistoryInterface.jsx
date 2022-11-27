import "./custom-history-interface.style.css";
import React, {useEffect, useState} from "react";
import CustomResultText from "../../components/CustomResultText/CustomResultText";
import axios from "axios";

const CustomHistoryInterface = ({data, start_calculation, end_calculation, duration, ...otherProps}) => {

    function factorial(n) {
        if (n < 0) return;
        if (n < 2) return 1;
        return n * factorial(n - 1);
    }

    return (
        <div className={"history-interface-container"}>
            <div className={"history-interface-interface"}>

                <div className={"history-interface-interface-1"}>
                    <CustomResultText
                        resultValue={data}
                        label={"Entered characters: "}
                    />
                    <CustomResultText
                        resultValue={data.length}
                        label={"Number of characters: "}
                    />
                    <CustomResultText
                        resultValue={data ? factorial(data.length) : 0}
                        label={"Number of permutations: "}
                    />
                </div>
                <div className={"history-interface-interface-2"}>
                    <CustomResultText
                        resultValue={start_calculation ? start_calculation : "..."}
                        label={"Start time: "}
                    />
                    <CustomResultText
                        resultValue={end_calculation ? end_calculation : "..."}
                        label={"End time: "}
                    />
                    <CustomResultText
                        resultValue={duration || duration === 0 ? duration : "..."}
                        label={"Duration: "}
                    />
                </div>
            </div>
        </div>
    );
}

export default CustomHistoryInterface;