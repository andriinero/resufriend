import { FormField } from "../../../../../components/editor/FormField";
import { FormControlButtons } from "../../../../../components/editor/FormControlButtons";

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
        <form className={expandedClass}>
            <FormField
                id="company-name"
                labelText="Company Name"
                placeholder="Name"
                inputValue={practicalExperience.name}
                changeHandler={practicalHandlerContainer.nameHandler}>
            </FormField>
            <FormField
                id="position-title"
                labelText="Position Title"
                placeholder="Title"
                inputValue={practicalExperience.title}
                changeHandler={practicalHandlerContainer.titleHandler}>
            </FormField>
            <FormField
                id="main-responsibilities"
                labelText="Main Responsibilities"
                placeholder="Responsibilities"
                inputValue={practicalExperience.mainResponsibilities}
                changeHandler={practicalHandlerContainer.mainResponsibilitiesHandler}>
            </FormField>
            <FormField
                id="period-of-employment"
                labelText="Period of Employment"
                placeholder="01.01.2001 - 01.01.2002"
                inputValue={practicalExperience.period}
                changeHandler={practicalHandlerContainer.periodHandler}>
            </FormField>
            <FormControlButtons
                toggleAddModeHandler={toggleAddModeHandler}
                saveButtonHandler={saveButtonHandler}
            />
        </form>
    );
}