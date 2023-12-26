import { FormInput } from "./FormInput";

export { FormPractical };

function FormPractical({
    currentEditId = '',
    isExpanded,
    practicalExperience,
    practicalHandlerContainer,
    writePracticalExperienceHandler,
    toggleAddModeHandler,
    saveEditPracticalHandler,
}) {
    const expandedClass = isExpanded ? 'input-panel' : 'input-panel--hidden';
    const saveButtonHandler = currentEditId ? () => {
        saveEditPracticalHandler(currentEditId);
        toggleAddModeHandler(currentEditId);
    } : writePracticalExperienceHandler;

    return (
        <div className={expandedClass}>
            <FormInput
                id="company-name"
                placeholder="Name"
                value={practicalExperience.name}
                changeHandler={practicalHandlerContainer.nameHandler}
            >
                <span>Company Name</span>
            </FormInput>
            <FormInput
                id="position-title"
                placeholder="Title"
                value={practicalExperience.title}
                changeHandler={practicalHandlerContainer.titleHandler}
            >
                <span>Position Title</span>
            </FormInput>
            <FormInput
                id="main-responsibilities"
                placeholder="Responsibilities"
                value={practicalExperience.mainResponsibilities}
                changeHandler={practicalHandlerContainer.mainResponsibilitiesHandler}
            >
                <span>Main Responsibilities</span>
            </FormInput>
            <FormInput
                id="period-of-employment"
                placeholder="01.01.2001 - 01.01.2002"
                value={practicalExperience.period}
                changeHandler={practicalHandlerContainer.periodHandler}
            >
                <span>Period of Employment</span>
            </FormInput>
            <div className="input-panel__controls">
                <button className="input-panel__button" onClick={() => { toggleAddModeHandler(currentEditId) }} type="button">Cancel</button>
                <button className="input-panel__button" onClick={saveButtonHandler} type="button">Save</button>
            </div>
        </div>
    );
}