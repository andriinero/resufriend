export { ControlsSection };

import { ControlsButton } from './ControlsButton';
import '../../../style/controls.css';

function ControlsSection({
    resetStates,
    setDummyState,
    printDocument
}) {
    return (
        <section className="controls-section">
            <div className="controls-section__container">
                <div className="controls-section__controls">
                    <ControlsButton
                        imgSrc="/public/text-box-remove.svg"
                        actionHandler={resetStates}
                        additionalClassName="clear-button-label"
                    >
                        <span>Clear</span>
                    </ControlsButton>
                    <ControlsButton
                        imgSrc="/public/text-box-plus.svg"
                        actionHandler={setDummyState}
                    >
                        <span>Autofill</span>
                    </ControlsButton>
                    <ControlsButton
                        imgSrc="/public/printer.svg"
                        actionHandler={printDocument}
                    >
                        <span>Print</span>
                    </ControlsButton>
                </div>
            </div>
        </section>
    );
}