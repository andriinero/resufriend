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
        <div className="container-section-item">
            <h1>Controls</h1>
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
        </div>
    );
}