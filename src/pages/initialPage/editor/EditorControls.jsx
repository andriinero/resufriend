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
    educationalExperienceSave,
    practicalExperienceSave,
}) {
    return (
        <>
            <ControlsGeneralInfo
                {...generalInfoChange}
            />
            <ControlsEducationalExperience
                educationalExperienceChange={educationalExperienceChange}
                educationalExperienceEdit={educationalExperienceEdit}
                educationalExperienceSave={educationalExperienceSave}
                />
            <ControlsPracticalExperience
                practicalExperienceChange={practicalExperienceChange}
                practicalExperienceEdit={practicalExperienceEdit}
                practicalExperienceSave={practicalExperienceSave}
            />
        </>
    );
}