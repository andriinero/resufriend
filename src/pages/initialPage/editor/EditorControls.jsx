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
                {...generalInfoChange.generalInfo}
                {...generalInfoChange.generalHandlerContainer}
            />
            <ControlsEducationalExperience
                educationalExperienceChange={educationalExperienceChange}
                educationalExperienceEdit={educationalExperienceEdit}
            />
            <ControlsPracticalExperience
                {...practicalExperienceChange.practicalExperience}
                {...practicalExperienceChange.practicalHandlerContainer}
                writePracticalExperienceHandler={practicalExperienceChange.writePracticalExperienceHandler}
                practicalExperienceEdit={practicalExperienceEdit}
            />
        </>
    );
}