import { EducationalItem } from "../../../../components/editor/EducationalItem";
import getExperienceItemHash from "../../../../utils/getExperienceItemHash";

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
                    return <EducationalItem key={getExperienceItemHash(experience)}
                        deleteEducationalHandler={deleteEducationalHandler}
                        {...experience}
                    />
                })}
            </div>
            <button className="input-panel__button input-panel__button--edit" onClick={toggleEditModeHandler} type="button">Edit</button>
        </div>
    );
}