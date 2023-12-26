export { PanelListItem };

function PanelListItem({
    name,
    id,
    deleteHandler,
    editMode,
    setCurrentEditIdHandler,
}) {
    return (
        <div className="editor-container__item">
            <h3 className="control-icon" onClick={() => {
                editMode.switchEditModeHandler();
                editMode.enterEditModeHandler(id);
                console.log(setCurrentEditIdHandler);
                setCurrentEditIdHandler(id);
                console.log(id);
            }}>
                {name}
            </h3>
            <img className="editor-container__button control-icon" onClick={() => { deleteHandler(id) }} src="/delete.svg" alt="Delete Icon" />
        </div>
    );
}