import '../../../style/sections/preview.css';

import { PreviewGeneral } from "./PreviewGeneral";
import { PreviewList } from '../../../components/preview/PreviewList';

export { Preview };

function Preview({
    generalInfo,
    educationalExperienceContainer,
    practicalExperienceContainer
}
) {
    return (
        <section className="preview-section">
            <div className="preview">
                <PreviewGeneral
                    {...generalInfo}
                />
                <PreviewList
                    experienceContainer={educationalExperienceContainer}
                >
                    Educational Experience
                </PreviewList>
                <PreviewList
                    experienceContainer={practicalExperienceContainer}
                >
                    Practical Experience
                </PreviewList>
            </div>
        </section>
    );
}