import { ScreenListItem } from "./ScreenListItem";

export { ScreenList };

function ScreenList({
    children,
    experienceContainer,
}) {
    return (
        <div className="screen-container">
            {experienceContainer.length !== 0 && <h2 className="screen-container__header">{children}</h2>}
            <div className="experience">
                {experienceContainer.map((experienceData) => {
                    return <ScreenListItem
                        key={experienceData.id} {...experienceData}
                    />;
                })}
            </div>
        </div>
    );
}