import { PanelListItem } from "./PanelListItem";

export { PanelList };

function PanelList({
    isExpanded,
    experienceContainer,
    deleteHandler,
    toggleAddModeHandler,
    editMode,
}) {
    const expandedClass = isExpanded ? 'input-panel' : 'input-panel--hidden';

    const reversedExperienceContainer = experienceContainer.slice().reverse();

    return (
        <div className={expandedClass}>
            <div className="editor-container">
                {reversedExperienceContainer.length === 0 && <p className="editor-container__status"><em>Click &quot;Add&quot; to add new item</em></p>}
                {reversedExperienceContainer.map((experience) => {
                    return <PanelListItem
                        key={experience.id}
                        id={experience.id}
                        name={experience.name}
                        deleteHandler={deleteHandler}
                        editMode={editMode}
                        setCurrentEditIdHandler={editMode.setCurrentEditIdHandler}
                    />
                })}
            </div>
            <button className="input-panel__button input-panel__button--edit" onClick={toggleAddModeHandler} type="button">Add</button>
        </div>
    );
}