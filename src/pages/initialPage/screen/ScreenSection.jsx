export { ScreenSection };

import '../../../style/screen.css';

import { EducationalExperience } from "./ScreenEducationalExperience";
import { ScreenGeneralInfo } from "./ScreenGeneralInfo";
import { PracticalExperience } from "./ScreenPracticalExperience";

function ScreenSection({
    generalInfo,
    educationalExperience,
    practicalExperience
}
) {
    return (
        <section className="screen-section">
            <div className="screen">
                <ScreenGeneralInfo
                    {...generalInfo}
                />
                <EducationalExperience
                    {...educationalExperience}
                />
                <PracticalExperience
                    {...practicalExperience}
                />
            </div>
        </section>
    );
}