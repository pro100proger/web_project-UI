import "./admin-interface.style.css";
import React from "react";
import CustomResultText from "../../components/CustomResultText/CustomResultText";

const AdminInterface = ({server, tasksInProgress, ...otherProps}) => {

    return (
        <div className={"history-interface-container"}>
            <div className={"history-interface-interface"}>

                <div className={"history-interface-interface-1"}>
                    <CustomResultText
                        resultValue={server}
                        label={"Server name: "}
                    />
                    <CustomResultText
                        resultValue={tasksInProgress}
                        label={"Tasks in progress: "}
                    />
                </div>
            </div>
        </div>
    );
}

export default AdminInterface;