import { ExperienceItemPractical } from "../../../../components/editor/ExperienceItemPractical";

export { ScreenPracticalExperience };

function ScreenPracticalExperience({
    practicalExperienceContainer
}) {
    return (
        <div className="screen-container">
            {practicalExperienceContainer.length !== 0 && <h2 className="screen-container__header">Practical Experience</h2>}
            <div className="experience">
                {practicalExperienceContainer.map((experienceData) => {
                    return <ExperienceItemPractical key={experienceData.companyName} {...experienceData} />;
                })}
            </div>
        </div>
    );
}