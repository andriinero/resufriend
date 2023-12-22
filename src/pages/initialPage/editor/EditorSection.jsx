export { EditorSection };

import '../../../style/editor.css';

import { EditorHeader } from "./EditorHeader";
import { EditorControls } from "./EditorControls";

function EditorSection({
    appStateControlHandlers,
    generalInfoChange,
    educationalExperienceChange,
    practicalExperienceChange,
}) {
    return (
        <section className="container-section">
            <EditorHeader
                {...appStateControlHandlers}
            />
            <EditorControls
                generalInfoChange={generalInfoChange}
                educationalExperienceChange={educationalExperienceChange}
                practicalExperienceChange={practicalExperienceChange}
            />
        </section>
    );
}