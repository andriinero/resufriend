export { PanelListItem };

function PanelListItem({
    name,
    id,
    deleteHandler,
}) {
    return (
        <div className="editor-container__item">
            <h3>
                {name}
            </h3>
            <img className="editor-container__button control-icon" onClick={() => { deleteHandler(id) }} src="/delete.svg" alt="Delete Icon" />
        </div>
    );
}