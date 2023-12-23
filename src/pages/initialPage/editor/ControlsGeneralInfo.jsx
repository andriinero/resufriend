import { useState } from "react";
import { InputPanelIcon } from "../../../components/editor/InputPanelIcon";
import { InputPanelGeneral } from "../../../components/editor/InputPanelGeneral";

export { ControlsGeneralInfo };

function ControlsGeneralInfo(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleExpandHandler(e) {
        console.log('ping');
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="editor-section__container">
            <div className="input-panel__header">
                <div className="input-panel__title">
                    <img className="input-panel__title-icon" src="../../../public/general-information.svg" alt="General Information Icon" />
                    <h1 className="input-panel__title-h1">General Information</h1>
                </div>
                <InputPanelIcon isExpanded={isExpanded} toggleExpandHandler={toggleExpandHandler} />
            </div>
            <InputPanelGeneral isExpanded={isExpanded} {...props} />
        </div>
    );
}