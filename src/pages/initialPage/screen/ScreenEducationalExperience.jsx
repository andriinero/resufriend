import { ExperienceItemEducational } from "../../../components/editor/ExperienceItemEducational";

export { ScreenEducationalExperience };

function ScreenEducationalExperience({
    educationalExperienceContainer
}) {
    return (
        <div className="screen-container">
            {educationalExperienceContainer.length !== 0 && <h2 className="screen-container__header">Educational Experience</h2>}
            <div className="experience">
                {educationalExperienceContainer.map((experienceData) => {
                    return <ExperienceItemEducational key={experienceData.schoolName} {...experienceData} />;
                })}
            </div>
        </div>
    );
}