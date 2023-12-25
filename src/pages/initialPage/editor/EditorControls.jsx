export { EditorControls };

import { ControlsGeneralInfo } from "./controls/ControlsGeneralInfo";
import { ControlsEducationalExperience } from "./controls/ControlsEducationalExperience";
import { ControlsPracticalExperience } from "./controls/ControlsPracticalExperience";

function EditorControls({
    generalInfoChange,
    educationalExperienceChange,
    practicalExperienceChange,
    educationalExperienceEdit,
    practicalExperienceEdit,
}) {
    return (
        <>
            <ControlsGeneralInfo
                {...generalInfoChange}
            />
            <ControlsEducationalExperience
                educationalExperienceChange={educationalExperienceChange}
                educationalExperienceEdit={educationalExperienceEdit}
            />
            <ControlsPracticalExperience
                practicalExperienceChange={practicalExperienceChange}
                practicalExperienceEdit={practicalExperienceEdit}
            />
        </>
    );
}