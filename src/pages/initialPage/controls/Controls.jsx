import '../../../style/sections/controls.css';
import { ControlsContainer } from './ControlsContainer';

export { Controls };

function Controls(props) {
    const controlsHandlers = props;

    return (
        <section className="controls-section">
            <ControlsContainer {...controlsHandlers} />
        </section>
    );
}