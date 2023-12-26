import { FormField } from "../../../../../components/editor/FormField";
import { FormControlButtons } from "../../../../../components/editor/FormControlButtons";

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
        <form className={expandedClass}>
            <FormField
                id="school-name"
                labelText="School Name"
                placeholder="Name"
                inputValue={educationalExperience.name}
                changeHandler={educationalHandlerContainer.nameHandler}
            >
            </FormField>
            <FormField
                id="title-of-study"
                labelText="Title of Study"
                placeholder="Title"
                inputValue={educationalExperience.title}
                changeHandler={educationalHandlerContainer.titleHandler}
            >
            </FormField>
            <FormField
                id="date-of-study"
                labelText="Date of Study"
                placeholder="01.01.2001 - 01.01.2002"
                inputValue={educationalExperience.period}
                changeHandler={educationalHandlerContainer.periodHandler}
            >
            </FormField>
            <FormControlButtons
                toggleAddModeHandler={toggleAddModeHandler}
                saveButtonHandler={saveButtonHandler}
            />
        </form>
    );
}