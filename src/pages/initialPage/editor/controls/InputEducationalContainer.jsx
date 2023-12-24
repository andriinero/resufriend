import { EducationalItem } from "../../../../components/editor/EducationalItem";

export { InputEducationalContainer };

function InputEducationalContainer({
    isExpanded,
    educationalExperienceContainer,
    deleteEducationalHandler,
    toggleEditModeHandler,
}) {
    const expandedClass = isExpanded ? 'input-panel' : 'input-panel--hidden';

    return (
        <div className={expandedClass}>
            {educationalExperienceContainer.map((experience) => {
                return <EducationalItem key={educationalExperienceContainer.schoolName}
                    deleteEducationalHandler={deleteEducationalHandler}
                    {...experience}
                />
            })}
            <button className="input-panel__button" onClick={toggleEditModeHandler} type="button">Edit</button>
        </div>
    );
}