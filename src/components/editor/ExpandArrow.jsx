export { ExpandArrow };

function ExpandArrow({
    isExpanded,
    toggleExpandHandler,
}) {
    return (
        <img onClick={toggleExpandHandler} className={`icon input-panel__arrow control-icon ${isExpanded && 'input-panel__arrow--expanded'}`} src="/chevron-down.svg" alt="Expand Icon" />
    );
}