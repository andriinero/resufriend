export { ScreenSection };

import '../../../style/screen.css';

import { ScreenEducationalExperience } from "./ScreenEducationalExperience";
import { ScreenGeneralInfo } from "./ScreenGeneralInfo";
import { ScreenPracticalExperience } from "./ScreenPracticalExperience";

function ScreenSection({
    generalInfo,
    educationalExperienceContainer,
    practicalExperienceContainer
}
) {
    return (
        <section className="screen-section">
            <div className="screen">
                <ScreenGeneralInfo
                    {...generalInfo}
                />
                <ScreenEducationalExperience
                    educationalExperienceContainer={educationalExperienceContainer}
                />
                <ScreenPracticalExperience
                    practicalExperienceContainer={practicalExperienceContainer}
                />
            </div>
        </section>
    );
}