import { useState } from "react";
import { ExpandArrow } from "./ExpandArrow";
import { InputPanelGeneral } from "./panels/InputPanelGeneral";

export { ControlsGeneralInfo };

function ControlsGeneralInfo({
    generalInfo,
    generalHandlerContainer
}) {
    const [isExpanded, setIsExpanded] = useState(true);

    function toggleExpandHandler(e) {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="editor-section__container">
            <div className="input-panel__header">
                <div className="input-panel__title">
                    <img className="input-panel__title-icon" src="/general-information.svg" alt="General Information Icon" />
                    <h1 className="input-panel__title-h1">General Information</h1>
                </div>
                <ExpandArrow isExpanded={isExpanded} toggleExpandHandler={toggleExpandHandler} />
            </div>
            <InputPanelGeneral
             isExpanded={isExpanded} 
             generalInfo={generalInfo}
             generalHandlerContainer={generalHandlerContainer}
              />
        </div>
    );
}