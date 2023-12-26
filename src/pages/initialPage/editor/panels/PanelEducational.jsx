import { useState } from "react";

import { FormEducational } from "./forms/FormEducational";
import { PanelHeader } from "../../../../components/editor/PanelHeader";
import { PanelList } from "../../../../components/editor/PanelList";

export { PanelEducational };

function PanelEducational({
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
        setCurrentEditId(id);
    }

    switch (panelState) {
        case 'add':
            panelComponent =
                <FormEducational
                    isExpanded={isExpanded}
                    toggleAddModeHandler={toggleAddModeHandler}
                    {...educationalExperienceChange}
                />;
            break;
        case 'edit':
            panelComponent =
                <FormEducational
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
            <PanelHeader
                isExpanded={isExpanded}
                toggleExpandHandler={toggleExpandHandler}
                titleText="Educational Experience"
                iconSrc="/educational-experience.svg"
                iconAltText="Educational Experience Icon"
            />
            {panelComponent}
        </div>
    );
}