export { ScreenSection };

import '../../../style/screen.css';

import { ScreenEducationalExperience } from "./cv-page/ScreenEducationalExperience";
import { ScreenGeneralInfo } from "./cv-page/ScreenGeneralInfo";
import { ScreenPracticalExperience } from "./cv-page/ScreenPracticalExperience";

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