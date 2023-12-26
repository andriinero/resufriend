export { EditorControls };

import { PanelGeneral } from "./panel/PanelGeneral";
import { PanelEducational } from "./panel/PanelEducational";
import { PanelPractical } from "./panel/PanelPractical";

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
        </>
    );
}