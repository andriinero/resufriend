export { EditorControls };

import { ControlsGeneralInfo } from "./ControlsGeneralInfo";
import { ControlsEducationalExperience } from "./ControlsEducationalExperience";
import { ControlsPracticalExperience } from "./ControlsPracticalExperience";

function EditorControls() {
    return (
        <section className="container-item">
            <h1>Controls</h1>
            <ControlsGeneralInfo />
            <ControlsEducationalExperience />
            <ControlsPracticalExperience />
        </section>
    );
}