export { PanelTitle };

function PanelTitle({
  titleText,
  iconSrc,
  iconAltText,
}) {
  return (
    <div className="input-panel__title">
      <img className="icon input-panel__title-icon" src={iconSrc} alt={iconAltText} />
      <h1 className="input-panel__title-h1 text--unselectable">{titleText}</h1>
    </div>
  );
}
