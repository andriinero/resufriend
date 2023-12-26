import { useState } from "react";
import { ExpandArrow } from "./ExpandArrow";
import { FormPractical } from "./contents/FormPractical";
import { PanelList } from "./contents/PanelList";

export { PanelPractical };

function PanelPractical({
    practicalExperienceChange,
    practicalExperienceEdit,
    practicalExperienceSave,
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
                <FormPractical
                    isExpanded={isExpanded}
                    toggleAddModeHandler={toggleAddModeHandler}
                    {...practicalExperienceChange}
                />
            break;
        case 'edit':
            panelComponent =
                <FormPractical
                    {...practicalExperienceChange}
                    currentEditId={currentEditId}
                    isExpanded={isExpanded}
                    toggleAddModeHandler={toggleAddModeHandler}
                    saveEditPracticalHandler={practicalExperienceSave.saveEditPracticalHandler}
                />
            break;
        case 'show':
            panelComponent =
                <PanelList
                    isExpanded={isExpanded}
                    toggleAddModeHandler={toggleAddModeHandler}
                    experienceContainer={practicalExperienceEdit.practicalExperienceContainer}
                    deleteHandler={practicalExperienceEdit.deletePracticalHandler}
                    editMode={{ setCurrentEditIdHandler, switchEditModeHandler, enterEditModeHandler: practicalExperienceSave.enterEditPracticalHandler }}
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