export { PreviewListItem };

function PreviewListItem({
    name,
    title,
    mainResponsibilities,
    period,
}) {
    return (
        <div className="experience-list__item">
            <h3 className="experience-list__item-header">{name}</h3>
            <p className="experience-list__item-title">{title}</p>
            {mainResponsibilities && <p className="experience-list__item-text">{mainResponsibilities}</p>}
            <p className="experience-list__item-date">{period}</p>
        </div>
    );
}