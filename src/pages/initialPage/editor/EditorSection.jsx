export { EditorSection };

import '../../../style/editor.css';

import { EditorControls } from "./EditorControls";

function EditorSection({
    generalInfoChange,
    educationalExperienceChange,
    practicalExperienceChange,
    educationalExperienceEdit,
    practicalExperienceEdit,
    educationalExperienceSave,
    practicalExperienceSave,
}) {
    return (
        <section className="editor-section">
            <EditorControls
                generalInfoChange={generalInfoChange}
                educationalExperienceChange={educationalExperienceChange}
                practicalExperienceChange={practicalExperienceChange}
                educationalExperienceEdit={educationalExperienceEdit}
                practicalExperienceEdit={practicalExperienceEdit}
                educationalExperienceSave={educationalExperienceSave}
                practicalExperienceSave={practicalExperienceSave}
            />
        </section>
    );
}