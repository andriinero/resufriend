export { EditorControls };

import { ControlsGeneralInfo } from "./ControlsGeneralInfo";
import { ControlsEducationalExperience } from "./ControlsEducationalExperience";
import { ControlsPracticalExperience } from "./ControlsPracticalExperience";

function EditorControls({
    generalInfoChange,
    educationalExperienceChange,
    practicalExperienceChange,
}) {
    return (
        <>
            <ControlsGeneralInfo
                {...generalInfoChange.generalInfo}
                {...generalInfoChange.generalHandlerContainer}
            />
            <ControlsEducationalExperience
                {...educationalExperienceChange.educationalExperience}
                {...educationalExperienceChange.educationalHandlerContainer}
            />
            <ControlsPracticalExperience
                {...practicalExperienceChange.practicalExperience}
                {...practicalExperienceChange.practicalHandlerContainer}
            />
        </>
    );
}