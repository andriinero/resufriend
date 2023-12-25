export { ScreenSection };

import '../../../style/screen.css';

import { ScreenGeneralInfo } from "./ScreenGeneralInfo";
import { ScreenList } from './ScreenList';

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
                <ScreenList
                    experienceContainer={educationalExperienceContainer}
                >
                    Educational Experience
                </ScreenList>
                <ScreenList
                    experienceContainer={practicalExperienceContainer}
                >
                    Practical Experience
                </ScreenList>
            </div>
        </section>
    );
}