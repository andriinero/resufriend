export { InputPanelExpand };

function InputPanelExpand({
    isExpanded,
    toggleExpandHandler,
}) {
    const expandClass = isExpanded ? 
    'input-panel__arrow input-panel__arrow--expanded control-icon' : 
    'input-panel__arrow control-icon';

    return (
        <img onClick={toggleExpandHandler} className={expandClass} src="/chevron-down.svg" alt="Expand Icon" />
    );
}