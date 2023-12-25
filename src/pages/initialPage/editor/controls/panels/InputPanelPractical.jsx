import { InputItem } from "./InputItem";

export { InputPanelPractical };

function InputPanelPractical({
    isExpanded,
    practicalExperience,
    practicalHandlerContainer,
    writePracticalExperienceHandler,
    toggleAddModeHandler,
}) {
    const expandedClass = isExpanded ? 'input-panel' : 'input-panel--hidden';

    return (
        <div className={expandedClass}>
            <InputItem
                id="company-name"
                placeholder="Name"
                value={practicalExperience.name}
                changeHandler={practicalHandlerContainer.nameHandler}
            >
                <span>Company Name</span>
            </InputItem>
            <InputItem
                id="position-title"
                placeholder="Title"
                value={practicalExperience.title}
                changeHandler={practicalHandlerContainer.titleHandler}
            >
                <span>Position Title</span>
            </InputItem>
            <InputItem
                id="main-responsibilities"
                placeholder="Responsibilities"
                value={practicalExperience.mainResponsibilities}
                changeHandler={practicalHandlerContainer.mainResponsibilitiesHandler}
            >
                <span>Main Responsibilities</span>
            </InputItem>
            <InputItem
                id="period-of-employment"
                placeholder="01.01.2001 - 01.01.2002"
                value={practicalExperience.period}
                changeHandler={practicalHandlerContainer.periodHandler}
            >
                <span>Period of Employment</span>
            </InputItem>
            <div className="input-panel__controls">
                <button className="input-panel__button" onClick={toggleAddModeHandler} type="button">Cancel</button>
                <button className="input-panel__button" onClick={writePracticalExperienceHandler} type="button">Save</button>
            </div>
        </div>
    );
}