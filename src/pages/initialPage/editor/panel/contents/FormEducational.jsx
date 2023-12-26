import { FormInput } from "./FormInput";

export { FormEducational };

function FormEducational({
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
            <FormInput
                id="school-name"
                placeholder="Name"
                value={educationalExperience.name}
                changeHandler={educationalHandlerContainer.nameHandler}
            >
                <span>School Name</span>
            </FormInput>
            <FormInput
                id="title-of-study"
                placeholder="Title"
                value={educationalExperience.title}
                changeHandler={educationalHandlerContainer.titleHandler}
            >
                <span>Title of Study</span>
            </FormInput>
            <FormInput
                id="date-of-study"
                placeholder="01.01.2001 - 01.01.2002"
                value={educationalExperience.period}
                changeHandler={educationalHandlerContainer.periodHandler}
            >
                <span>Date of Study</span>
            </FormInput>
            <div className="input-panel__controls">
                <button className="input-panel__button" onClick={() => { toggleAddModeHandler(currentEditId) }} type="button">Cancel</button>
                <button className="input-panel__button" onClick={saveButtonHandler} type="button">Save</button>
            </div>
        </div>
    );
}