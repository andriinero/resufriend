export { ExperienceItemPractical };

function ExperienceItemPractical({
    companyName,
    positionTitle,
    mainResponsibilities,
    employmentPeriod,
}) {
    return (
        <div className="experience__item">
            <h3 className="experience__item-header">{companyName}</h3>
            <p className="experience__item-title">{positionTitle}</p>
            <p className="experience__item-text">{mainResponsibilities}</p>
            <p className="experience__item-date">{employmentPeriod}</p>
        </div>
    );
}