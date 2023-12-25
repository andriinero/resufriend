import { useState } from "react";
import { ExpandArrow } from "./ExpandArrow";
import { InputPanelPractical } from "./panels/InputPanelPractical";
import { PanelList } from "./panels/PanelList";

export { ControlsPracticalExperience };

function ControlsPracticalExperience({
    practicalExperienceChange,
    practicalExperienceEdit,
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
                    <img className="input-panel__title-icon" src="/practical-experience.svg" alt="General Information Icon" />
                    <h1 className="input-panel__title-h1">Practical Experience</h1>
                </div>
                <ExpandArrow isExpanded={isExpanded} toggleExpandHandler={toggleExpandHandler} />
            </div>
            {isEditMode ?
                (<InputPanelPractical
                    isExpanded={isExpanded}
                    toggleEditModeHandler={toggleEditModeHandler}
                    {...practicalExperienceChange} />) :
                (<PanelList
                    isExpanded={isExpanded}
                    toggleEditModeHandler={toggleEditModeHandler}
                    experienceContainer={practicalExperienceEdit.practicalExperienceContainer}
                    deleteHandler={practicalExperienceEdit.deletePracticalHandler}
                />)}
        </div>
    );
}