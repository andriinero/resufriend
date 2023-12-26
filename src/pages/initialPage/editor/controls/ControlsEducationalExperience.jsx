import { useState } from "react";
import { InputPanelEducational } from "./panels/InputPanelEducational";
import { ExpandArrow } from "./ExpandArrow";
import { PanelList } from "./panels/PanelList";

export { ControlsEducationalExperience };

function ControlsEducationalExperience({
    educationalExperienceChange,
    educationalExperienceEdit,
    educationalExperienceSave,
}) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [panelState, setPanelState] = useState('add');
    const [currentEditId, setCurrentEditId] = useState(null);

    let panelComponent = null;

    function toggleExpandHandler() {
        setIsExpanded(!isExpanded);
    }

    function toggleAddModeHandler(id) {
        switch (panelState) {
            case 'add':
            case 'edit':
                setPanelState('show');
                break;
            case 'show':
                setPanelState('add');
                break;
            default:
                console.log('enter');
                break;
        }

        if (id) setCurrentEditId(null);
    }

    function switchEditModeHandler() {
        setPanelState('edit');
    }

    function setCurrentEditIdHandler(id) {
        console.log('SET: ' + id);
        setCurrentEditId(id);
    }

    switch (panelState) {
        case 'add':
            panelComponent =
                <InputPanelEducational
                    isExpanded={isExpanded}
                    toggleAddModeHandler={toggleAddModeHandler}
                    {...educationalExperienceChange}
                />;
            break;
        case 'edit':
            panelComponent =
                <InputPanelEducational
                    {...educationalExperienceChange}
                    currentEditId={currentEditId}
                    isExpanded={isExpanded}
                    toggleAddModeHandler={toggleAddModeHandler}
                    saveEditEducationalHandler={educationalExperienceSave.saveEditEducationalHandler}
                />;
            break;
        case 'show':
            panelComponent =
                <PanelList
                    isExpanded={isExpanded}
                    toggleAddModeHandler={toggleAddModeHandler}
                    experienceContainer={educationalExperienceEdit.educationalExperienceContainer}
                    deleteHandler={educationalExperienceEdit.deleteEducationalHandler}
                    editMode={{ setCurrentEditIdHandler, switchEditModeHandler, enterEditModeHandler: educationalExperienceSave.enterEditEducationalHandler }}
                />;
            break;
        default:
            break;
    }

    return (
        <div className="editor-section__container">
            <div className="input-panel__header">
                <div className="input-panel__title">
                    <img className="input-panel__title-icon" src="/educational-experience.svg" alt="General Information Icon" />
                    <h1 className="input-panel__title-h1">Educational Experience</h1>
                </div>
                <ExpandArrow isExpanded={isExpanded} toggleExpandHandler={toggleExpandHandler} />
            </div>
            {panelComponent}
        </div>
    );
}