export { InputPanelExpand };

function InputPanelExpand({
    isExpanded,
    toggleExpandHandler,
}) {
    const expandClass = isExpanded ? 
    'input-panel__icon input-panel__icon--expanded control-icon' : 
    'input-panel__icon control-icon';

    return (
        <img onClick={toggleExpandHandler} className={expandClass} src="../../../public/chevron-down.svg" alt="Expand Icon" />
    );
}