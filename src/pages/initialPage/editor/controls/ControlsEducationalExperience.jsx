import { useState } from "react";
import { InputPanelEducational } from "./InputPanelEducational";
import { InputPanelExpand } from "../../../../components/editor/InputPanelExpand";
import { InputEducationalContainer } from "./InputEducationalContainer";

export { ControlsEducationalExperience };

function ControlsEducationalExperience({
    educationalExperienceChange,
    educationalExperienceEdit,
}) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isEditMode, setIsEditMode] = useState(true);

    function toggleExpandHandler(e) {
        setIsExpanded(!isExpanded);
    }

    function toggleEditModeHandler(e) {
        setIsEditMode(!isEditMode)
    }

    return (
        <div className="editor-section__container">
            <div className="input-panel__header">
                <div className="input-panel__title">
                    <img className="input-panel__title-icon" src="../../../public/educational-experience.svg" alt="General Information Icon" />
                    <h1 className="input-panel__title-h1">Educational Experience</h1>
                </div>
                <InputPanelExpand isExpanded={isExpanded} toggleExpandHandler={toggleExpandHandler} />
            </div>
            {isEditMode ?
                (<InputPanelEducational
                    isExpanded={isExpanded}
                    toggleEditModeHandler={toggleEditModeHandler}
                    {...educationalExperienceChange} />) :
                (<InputEducationalContainer
                    isExpanded={isExpanded}
                    toggleEditModeHandler={toggleEditModeHandler}
                    {...educationalExperienceEdit}
                />)}
        </div>
    );
}