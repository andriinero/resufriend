export { PreviewSection };

import '../../../style/sections/preview.css';

import { PreviewGeneral } from "./PreviewGeneral";
import { PreviewList } from './PreviewList';

function PreviewSection({
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