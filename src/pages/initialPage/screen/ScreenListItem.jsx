export { ScreenListItem };

function ScreenListItem({
    name,
    title,
    mainResponsibilities,
    period,
}) {
    return (
        <div className="experience__item">
            <h3 className="experience__item-header">{name}</h3>
            <p className="experience__item-title">{title}</p>
            {mainResponsibilities && <p className="experience__item-text">{mainResponsibilities}</p>}
            <p className="experience__item-date">{period}</p>
        </div>
    );
}