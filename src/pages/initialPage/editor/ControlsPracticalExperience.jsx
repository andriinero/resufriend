import { useState } from "react";
import { InputPanelExpand } from "../../../components/editor/InputPanelExpand";
import { InputPanelPractical } from "../../../components/editor/InputPanelPractical";

export { ControlsPracticalExperience };

function ControlsPracticalExperience(props) {
    const [isExpanded, setIsExpanded] = useState(true);

    function toggleExpandHandler(e) {
        console.log('ping');
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="editor-section__container">
            <div className="input-panel__header">
                <div className="input-panel__title">
                    <img className="input-panel__title-icon" src="../../../public/practical-experience.svg" alt="General Information Icon" />
                    <h1 className="input-panel__title-h1">Practical Experience</h1>
                </div>
                <InputPanelExpand isExpanded={isExpanded} toggleExpandHandler={toggleExpandHandler} />
            </div>
            <InputPanelPractical isExpanded={isExpanded} {...props} />
        </div>
    );
}