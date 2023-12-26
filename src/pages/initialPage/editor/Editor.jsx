import '../../../style/sections/editor.css';

import { PanelGeneral } from "./panels/PanelGeneral";
import { PanelEducational } from "./panels/PanelEducational";
import { PanelPractical } from "./panels/PanelPractical";

export { Editor };

function Editor({
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
            <PanelGeneral
                {...generalInfoChange}
            />
            <PanelEducational
                educationalExperienceChange={educationalExperienceChange}
                educationalExperienceEdit={educationalExperienceEdit}
                educationalExperienceSave={educationalExperienceSave}
            />
            <PanelPractical
                practicalExperienceChange={practicalExperienceChange}
                practicalExperienceEdit={practicalExperienceEdit}
                practicalExperienceSave={practicalExperienceSave}
            />
        </section>
    );
}