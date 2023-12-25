import { PanelListItem } from "./PanelListItem";

export { PanelList };

function PanelList({
    isExpanded,
    experienceContainer,
    deleteHandler,
    toggleEditModeHandler,
}) {
    const expandedClass = isExpanded ? 'input-panel' : 'input-panel--hidden';

    return (
        <div className={expandedClass}>
            <div className="editor-container">
                {experienceContainer.map((experience) => {
                    return <PanelListItem
                        key={experience.id}
                        id={experience.id}
                        name={experience.name}
                        deleteHandler={deleteHandler}
                    />
                })}
            </div>
            <button className="input-panel__button input-panel__button--edit" onClick={toggleEditModeHandler} type="button">Edit</button>
        </div>
    );
}