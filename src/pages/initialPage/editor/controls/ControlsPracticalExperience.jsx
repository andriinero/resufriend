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
    const [panelState, setPanelState] = useState('add');

    let panelComponent = null;

    function toggleExpandHandler() {
        setIsExpanded(!isExpanded);
    }

    function toggleAddModeHandler() {
        switch (panelState) {
            case 'add':
                setPanelState('show');
                break;
            case 'show':
                setPanelState('add');
                break;
            default:
                break;
        }
    }

    switch (panelState) {
        case 'add':
            panelComponent =
                <InputPanelPractical
                    isExpanded={isExpanded}
                    toggleAddModeHandler={toggleAddModeHandler}
                    {...practicalExperienceChange}
                />
            break;
        case 'edit':
            break;
        case 'show':
            panelComponent =
                <PanelList
                    isExpanded={isExpanded}
                    toggleAddModeHandler={toggleAddModeHandler}
                    experienceContainer={practicalExperienceEdit.practicalExperienceContainer}
                    deleteHandler={practicalExperienceEdit.deletePracticalHandler}
                />;
            break;
        default:
            break;
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
            {panelComponent}
        </div>
    );
}