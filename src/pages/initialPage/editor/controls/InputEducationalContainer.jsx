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
            <div className="editor-container">
                {educationalExperienceContainer.map((experience) => {
                    console.log(experience.id);
                    return <EducationalItem 
                        key={experience.id}
                        id={experience.id}
                        schoolName={experience.schoolName}
                        deleteEducationalHandler={deleteEducationalHandler}
                    />
                })}
            </div>
            <button className="input-panel__button input-panel__button--edit" onClick={toggleEditModeHandler} type="button">Edit</button>
        </div>
    );
}