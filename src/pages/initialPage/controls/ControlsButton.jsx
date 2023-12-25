import { useState } from 'react';

export { ControlsButton };

function ControlsButton({
    children,
    imgSrc,
    altText = '',
    actionHandler,
    additionalClassName
}) {
    const [interactionStyle, setInteractionStyle] = useState('');

    function mouseDownHandler(e) {
        setInteractionStyle('controls-section__icon--pressed');
    }

    function mouseUpHandler(e) {
        setInteractionStyle('');
    }

    return (
        <div className={`controls-section__controls-item ${interactionStyle}`}>
            <img id='clear-button' onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler} onClick={actionHandler} className="controls-section__icon control-icon" src={imgSrc} alt={altText} />
            <label className={`controls-section__label ${additionalClassName}`} htmlFor="clear-button">{children}</label>
        </div>
    );
}