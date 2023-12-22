export { EditorSection };

import { EditorHeader } from "./EditorHeader";
import { EditorControls } from "./EditorControls";

function EditorSection() {
    return (
        <main className="container-main">
            <EditorHeader />
            <EditorControls />
        </main>
    );
}