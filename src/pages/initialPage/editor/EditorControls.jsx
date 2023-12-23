export { EditorControls };

import { ControlsGeneralInfo } from "./ControlsGeneralInfo";
import { ControlsEducationalExperience } from "./ControlsEducationalExperience";
import { ControlsPracticalExperience } from "./ControlsPracticalExperience";

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