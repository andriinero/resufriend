export { PanelHeader };

import { PanelTitle } from "./PanelTitle";
import { ExpandArrow } from "./ExpandArrow";

function PanelHeader({
  titleText,
  iconSrc,
  iconAltText,
  isExpanded,
  toggleExpandHandler,
}) {
  return (
    <div className="input-panel__header">
      <PanelTitle
        titleText={titleText}
        iconSrc={iconSrc}
        iconAltText={iconAltText}
      />
      <ExpandArrow
        isExpanded={isExpanded}
        toggleExpandHandler={toggleExpandHandler}
      />
    </div>
  );
}
