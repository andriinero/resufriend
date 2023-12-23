export { ExperienceItemEducational };

function ExperienceItemEducational({
    schoolName,
    titleOfStudy,
    dateOfStudy,
}) {
    return (
        <div className="experience__item">
            <h3 className="experience__item-header">{schoolName}</h3>
            <p className="experience__item-title">{titleOfStudy}</p>
            <p className="experience__item-date">{dateOfStudy}</p>
        </div>
    );
}