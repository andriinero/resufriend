import { PreviewListItem } from "./PreviewListItem";

export { PreviewList };

function PreviewList({
    children,
    experienceContainer,
}) {
    return (
        <div className="preview-container">
            {experienceContainer.length !== 0 && <h2 className="preview-container__header">{children}</h2>}
            <div className="experience-list">
                {experienceContainer.map((experience) => {
                    return <PreviewListItem
                        key={experience.id} {...experience}
                    />;
                })}
            </div>
        </div>
    );
}