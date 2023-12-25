import { InputItem } from "./InputItem";

export { InputPanelPractical };

function InputPanelPractical({
    isExpanded,
    practicalExperience,
    practicalHandlerContainer,
    writePracticalExperienceHandler,
    toggleEditModeHandler,
}) {
    const expandedClass = isExpanded ? 'input-panel' : 'input-panel--hidden';

    return (
        <div className={expandedClass}>
            <InputItem
                id="school-name"
                placeholder="School Name"
                value={practicalExperience.name}
                changeHandler={practicalHandlerContainer.nameHandler}
            >
                <span>School Name</span>
            </InputItem>
            <InputItem
                id="title-of-study"
                placeholder="Title of Study"
                value={practicalExperience.title}
                changeHandler={practicalHandlerContainer.titleHandler}
            >
                <span>Title of Study</span>
            </InputItem>
            <InputItem
                id="main-responsibilities"
                placeholder="Main Responsibilities"
                value={practicalExperience.mainResponsibilities}
                changeHandler={practicalHandlerContainer.mainResponsibilitiesHandler}
            >
                <span>Main Responsibilities</span>
            </InputItem>
            <InputItem
                id="date-of-study"
                placeholder="01.01.2001 - 01.01.2002"
                value={practicalExperience.period}
                changeHandler={practicalHandlerContainer.periodHandler}
            >
                <span>Date of Study</span>
            </InputItem>
            <div className="input-panel__controls">
                <button className="input-panel__button" onClick={toggleEditModeHandler} type="button">Cancel</button>
                <button className="input-panel__button" onClick={writePracticalExperienceHandler} type="button">Save</button>
            </div>
        </div>
    );
}