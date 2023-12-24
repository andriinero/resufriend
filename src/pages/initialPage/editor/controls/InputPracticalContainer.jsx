import { PracticalItem } from "../../../../components/editor/PracticalItem";
import getExperienceItemHash from "../../../../utils/getExperienceItemHash";

export { InputPracticalContainer };

function InputPracticalContainer({
    isExpanded,
    practicalExperienceContainer,
    deletePracticalHandler,
    toggleEditModeHandler,
}) {
    const expandedClass = isExpanded ? 'input-panel' : 'input-panel--hidden';

    return (
        <div className={expandedClass}>
            <div className="editor-container">
                {practicalExperienceContainer.map((experience) => {
                    return <PracticalItem
                        key={getExperienceItemHash(experience)}
                        id={experience.id}
                        companyName={experience.companyName}
                        deletePracticalHandler={deletePracticalHandler}
                    />
                })}
            </div>
            <button className="input-panel__button input-panel__button--edit" onClick={toggleEditModeHandler} type="button">Edit</button>
        </div>
    );
}