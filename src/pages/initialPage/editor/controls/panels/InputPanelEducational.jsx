import { InputItem } from "./InputItem";

export { InputPanelEducational };

function InputPanelEducational({
    currentEditId = '',
    isExpanded,
    educationalExperience,
    educationalHandlerContainer,
    writeEducationalExperienceHandler,
    toggleAddModeHandler,
    saveEditEducationalHandler,
}) {
    const expandedClass = isExpanded ? 'input-panel' : 'input-panel--hidden';
    const saveButtonHandler = currentEditId ? () => { 
        saveEditEducationalHandler(currentEditId); 
        toggleAddModeHandler(currentEditId);
    } : writeEducationalExperienceHandler;

    return (
        <div className={expandedClass}>
            <InputItem
                id="school-name"
                placeholder="Name"
                value={educationalExperience.name}
                changeHandler={educationalHandlerContainer.nameHandler}
            >
                <span>School Name</span>
            </InputItem>
            <InputItem
                id="title-of-study"
                placeholder="Title"
                value={educationalExperience.title}
                changeHandler={educationalHandlerContainer.titleHandler}
            >
                <span>Title of Study</span>
            </InputItem>
            <InputItem
                id="date-of-study"
                placeholder="01.01.2001 - 01.01.2002"
                value={educationalExperience.period}
                changeHandler={educationalHandlerContainer.periodHandler}
            >
                <span>Date of Study</span>
            </InputItem>
            <div className="input-panel__controls">
                <button className="input-panel__button" onClick={() => { toggleAddModeHandler(currentEditId) }} type="button">Cancel</button>
                <button className="input-panel__button" onClick={saveButtonHandler} type="button">Save</button>
            </div>
        </div>
    );
}