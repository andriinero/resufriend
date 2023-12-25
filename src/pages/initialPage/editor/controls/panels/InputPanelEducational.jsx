import { InputItem } from "./InputItem";

export { InputPanelEducational };

function InputPanelEducational({
    isExpanded,
    educationalExperience,
    educationalHandlerContainer,
    writeEducationalExperienceHandler,
    toggleEditModeHandler,
}) {
    const expandedClass = isExpanded ? 'input-panel' : 'input-panel--hidden';

    return (
        <div className={expandedClass}>
            <InputItem
                id="school-name"
                placeholder="School Name"
                value={educationalExperience.name}
                changeHandler={educationalHandlerContainer.nameHandler}
            >
                <span>School Name</span>
            </InputItem>
            <InputItem
                id="title-of-study"
                placeholder="Title of Study"
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
                <button className="input-panel__button" onClick={toggleEditModeHandler} type="button">Cancel</button>
                <button className="input-panel__button" onClick={writeEducationalExperienceHandler} type="button">Save</button>
            </div>
        </div>
    );
}