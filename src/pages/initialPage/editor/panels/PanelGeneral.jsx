import { useState } from "react";

import { FormGeneral } from "./forms/FormGeneral";
import { PanelHeader } from "../../../../components/editor/PanelHeader";

export { PanelGeneral };

function PanelGeneral({
    generalInfo,
    generalHandlerContainer
}) {
    const [isExpanded, setIsExpanded] = useState(true);

    function toggleExpandHandler(e) {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="editor-section__container">
            <PanelHeader
                titleText="General Information"
                iconSrc="/general-information.svg"
                iconAltText="General Information Icon"
                isExpanded={isExpanded}
                toggleExpandHandler={toggleExpandHandler}
            />
            <FormGeneral
                isExpanded={isExpanded}
                generalInfo={generalInfo}
                generalHandlerContainer={generalHandlerContainer}
            />
        </div>
    );
}