export { InitialPage };

import { useState } from "react";
import { EditorSection } from "./editor/EditorSection";
import { ScreenSection } from "./screen/ScreenSection";
import getResetStateObject from "../../utils/getResetStateObject";
import getDummyState from "../../utils/getDummyState";
import validateExperienceData from "../../utils/validateExperienceData";
import idGenerator from "../../utils/idGenerator";

function InitialPage() {
    // Current user input data
    const [generalInfo, setGeneralInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        location: '',
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

    // User experience data containers
    const [educationalExperienceContainer, setEducationalExperienceContainer] = useState([]);

    function writeEducationalExperienceHandler() {
        if (!validateExperienceData(educationalExperience)) return;

        setEducationalExperienceContainer(
            [...educationalExperienceContainer, educationalExperience]
        );

        resetEducationalExperience();
    }

    function deleteEducationalHandler(schoolName) {
        const newContainer = educationalExperienceContainer.filter((experience) => {
            return experience.schoolName !== schoolName
        });

        setEducationalExperienceContainer(newContainer);
    }

    const [practicalExperienceContainer, setPracticalExperienceContainer] = useState([]);

    function writePracticalExperienceHandler() {
        if (!validateExperienceData(practicalExperience)) return;

        setPracticalExperienceContainer(
            [...practicalExperienceContainer, practicalExperience]
        );

        resetPracticalExperience();
    }

    function deletePracticalHandler(companyName) {
        const newContainer = practicalExperienceContainer.filter((experience) => {
            return experience.companyName !== companyName;
        });

        setPracticalExperienceContainer(newContainer);
    }

    const generalHandlerContainer = {
        firstNameHandler: (e) => setGeneralInfo({ ...generalInfo, firstName: e.target.value }),
        lastNameHandler: (e) => setGeneralInfo({ ...generalInfo, lastName: e.target.value }),
        emailHandler: (e) => setGeneralInfo({ ...generalInfo, email: e.target.value }),
        phoneNumberHandler: (e) => setGeneralInfo({ ...generalInfo, phoneNumber: e.target.value }),
        locationHandler: (e) => setGeneralInfo({ ...generalInfo, location: e.target.value }),
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

    function resetStates() {
        setGeneralInfo(getResetStateObject(generalInfo));
        setEducationalExperience(getResetStateObject(educationalExperience));
        setPracticalExperience(getResetStateObject(practicalExperience));

        setEducationalExperienceContainer([]);
        setPracticalExperienceContainer([]);
    }

    function resetEducationalExperience() {
        setEducationalExperience(getResetStateObject(educationalExperience));
    }

    function resetPracticalExperience() {
        setPracticalExperience(getResetStateObject(practicalExperience));
    }

    function setDummyState() {
        const [dummyGeneralInfo, dummyEducationalExperience, dummyPracticalExperience] = getDummyState();

        setGeneralInfo(dummyGeneralInfo);
        setEducationalExperience(dummyEducationalExperience);
        setPracticalExperience(dummyPracticalExperience);
    }

    const appStateControlHandlers = {
        resetStates,
        setDummyState
    }

    return (
        <main className="main-page">
            <EditorSection
                appStateControlHandlers={appStateControlHandlers}
                generalInfoChange={{ generalInfo, generalHandlerContainer }}
                educationalExperienceChange={{ educationalExperience, educationalHandlerContainer, writeEducationalExperienceHandler }}
                practicalExperienceChange={{ practicalExperience, practicalHandlerContainer, writePracticalExperienceHandler }}
                educationalExperienceEdit={{ educationalExperienceContainer, deleteEducationalHandler }}
                practicalExperienceEdit={{ practicalExperienceContainer, deletePracticalHandler }}
            />
            <ScreenSection
                generalInfo={generalInfo}
                educationalExperienceContainer={educationalExperienceContainer}
                practicalExperienceContainer={practicalExperienceContainer}
            />
        </main>
    );
}
