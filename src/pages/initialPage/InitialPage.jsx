export { InitialPage };

import { useState } from "react";
import { EditorSection } from "./editor/EditorSection";
import { ScreenSection } from "./screen/ScreenSection";
import getResetStateObject from "../../utils/getResetStateObject";
import getDummyState from "../../utils/getDummyState";

function InitialPage() {
    const [generalInfo, setGeneralInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });

    const [educationalExperience, setEducationalExperience] = useState({
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: '',
    });

    const [practicalExperience, setPracticalExperience] = useState({
        companyName: '',
        positionTitle: '',
        mainResponsibilities: '',
        employmentPeriod: '',
    });

    function resetStates() {
        setGeneralInfo(getResetStateObject(generalInfo));
        setEducationalExperience(getResetStateObject(educationalExperience));
        setPracticalExperience(getResetStateObject(practicalExperience));
    }

    function generateDummyText() {
        const [tempGeneralInfo, tempEducationalExperience, tempPracticalExperience] = getDummyState();

        setGeneralInfo(tempGeneralInfo);
        setEducationalExperience(tempEducationalExperience);
        setPracticalExperience(tempPracticalExperience);
    }

    const generalHandlerContainer = {
        firstNameHandler: (e) => setGeneralInfo({ ...generalInfo, firstName: e.target.value }),
        lastNameHandler: (e) => setGeneralInfo({ ...generalInfo, lastName: e.target.value }),
        emailHandler: (e) => setGeneralInfo({ ...generalInfo, email: e.target.value }),
        phoneNumberHandler: (e) => setGeneralInfo({ ...generalInfo, phoneNumber: e.target.value }),
    };

    const educationalHandlerContainer = {
        schoolNameHandler: (e) => setEducationalExperience({ ...educationalExperience, schoolName: e.target.value }),
        titleOfStudyHandler: (e) => setEducationalExperience({ ...educationalExperience, titleOfStudy: e.target.value }),
        dateOfStudyHandler: (e) => setEducationalExperience({ ...educationalExperience, dateOfStudy: e.target.value }),
    }

    const practicalHandlerContainer = {
        companyNameHandler: (e) => setPracticalExperience({ ...practicalExperience, companyName: e.target.value }),
        positionTitleHandler: (e) => setPracticalExperience({ ...practicalExperience, positionTitle: e.target.value }),
        mainResponsibilitiesHandler: (e) => setPracticalExperience({ ...practicalExperience, mainResponsibilities: e.target.value }),
        employmentPeriodHandler: (e) => setPracticalExperience({ ...practicalExperience, employmentPeriod: e.target.value })
    }

    // TODO: app state control handlers container

    const appStateControlHandlers = {
        resetStates,
        generateDummyText
    }

    return (
        <main className="main-page">
            <EditorSection
                appStateControlHandlers={appStateControlHandlers}
                generalInfoChange={{ generalInfo, generalHandlerContainer }}
                educationalExperienceChange={{ educationalExperience, educationalHandlerContainer }}
                practicalExperienceChange={{ practicalExperience, practicalHandlerContainer }}
            />
            <ScreenSection
                generalInfo={generalInfo}
                educationalExperience={educationalExperience}
                practicalExperience={practicalExperience}
            />
        </main>
    );
}
