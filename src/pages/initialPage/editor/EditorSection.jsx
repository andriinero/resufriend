export { EditorSection };

import '../../../style/editor.css';

import { EditorHeader } from "./EditorHeader";
import { EditorControls } from "./EditorControls";

function EditorSection({
    appStateControlHandlers,
    generalInfoChange,
    educationalExperienceChange,
    practicalExperienceChange,
    educationalExperienceEdit,
    practicalExperienceEdit,
}) {
    return (
        <section className="editor-section">
            <EditorHeader
                {...appStateControlHandlers}
            />
            <EditorControls
                generalInfoChange={generalInfoChange}
                educationalExperienceChange={educationalExperienceChange}
                practicalExperienceChange={practicalExperienceChange}
                educationalExperienceEdit={educationalExperienceEdit}
                practicalExperienceEdit={practicalExperienceEdit}
            />
        </section>
    );
}