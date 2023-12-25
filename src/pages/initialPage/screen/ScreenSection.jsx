export { ScreenSection };

import '../../../style/screen.css';

import { ScreenGeneralInfo } from "./cv-page/ScreenGeneralInfo";
import { ScreenList } from './cv-page/ScreenList';

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
                />
                <ScreenList
                    experienceContainer={practicalExperienceContainer}
                />
            </div>
        </section>
    );
}