import { useState } from "react";

import { Analytics } from "@vercel/analytics/react";
import { Controls } from "./pages/initialPage/controls/Controls";
import { Editor } from "./pages/initialPage/editor/Editor";
import { Preview } from "./pages/initialPage/preview/Preview";

import getDummyState from "./utils/getDummyState";
import getExperienceItemHash from "./utils/getExperienceItemHash";
import getResetExperienceObject from "./utils/getResetExperienceObject";
import validateExperienceData from "./utils/validateExperienceData";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
  });

  const [educationalExperience, setEducationalExperience] = useState({
    name: "",
    title: "",
    period: "",
  });

  const [practicalExperience, setPracticalExperience] = useState({
    name: "",
    title: "",
    mainResponsibilities: "",
    period: "",
  });

  const [educationalExperienceContainer, setEducationalExperienceContainer] =
    useState([]);
  const [practicalExperienceContainer, setPracticalExperienceContainer] =
    useState([]);

  // State handlers section
  // Educational Experience
  function writeEducationalExperienceHandler() {
    if (!validateExperienceData(educationalExperience)) return;

    setEducationalExperienceContainer([
      ...educationalExperienceContainer,
      {
        ...educationalExperience,
        id: getExperienceItemHash(educationalExperience),
      },
    ]);

    resetEducationalExperience();
  }

  function deleteEducationalHandler(id) {
    const newContainer = educationalExperienceContainer.filter((experience) => {
      console.log("ORIGINAL =" + experience.id);
      console.log("ARGUMENT =" + id);
      return experience.id !== id;
    });

    setEducationalExperienceContainer(newContainer);
  }

  function enterEditEducationalHandler(id) {
    const selectedItem = educationalExperienceContainer.find(
      (experience) => experience.id === id,
    );
    setEducationalExperience(selectedItem);
  }

  function saveEditEducationalHandler(id) {
    if (!validateExperienceData(educationalExperience)) return;

    const newContainer = educationalExperienceContainer.filter((experience) => {
      return experience.id !== id;
    });

    setEducationalExperienceContainer(newContainer);

    setEducationalExperienceContainer([
      ...newContainer,
      {
        ...educationalExperience,
        id: getExperienceItemHash(educationalExperience),
      },
    ]);

    resetEducationalExperience();
  }

  // Practical Experience
  function writePracticalExperienceHandler() {
    if (!validateExperienceData(practicalExperience)) return;

    setPracticalExperienceContainer([
      ...practicalExperienceContainer,
      {
        ...practicalExperience,
        id: getExperienceItemHash(practicalExperience),
      },
    ]);

    resetPracticalExperience();
  }

  function deletePracticalHandler(id) {
    const newContainer = practicalExperienceContainer.filter((experience) => {
      console.log("ORIGINAL =" + experience.id);
      console.log("ARGUMENT =" + id);
      return experience.id !== id;
    });

    setPracticalExperienceContainer(newContainer);
  }

  function enterEditPracticalHandler(id) {
    const selectedItem = practicalExperienceContainer.find(
      (experience) => experience.id === id,
    );
    setPracticalExperience(selectedItem);
  }

  function saveEditPracticalHandler(id) {
    if (!validateExperienceData(practicalExperience)) return;

    const newContainer = practicalExperienceContainer.filter((experience) => {
      return experience.id !== id;
    });

    setPracticalExperienceContainer(newContainer);

    setPracticalExperienceContainer([
      ...newContainer,
      {
        ...practicalExperience,
        id: getExperienceItemHash(practicalExperience),
      },
    ]);

    resetPracticalExperience();
  }

  // General Information
  const generalHandlerContainer = {
    firstNameHandler: (e) =>
      setGeneralInfo({ ...generalInfo, firstName: e.target.value }),
    lastNameHandler: (e) =>
      setGeneralInfo({ ...generalInfo, lastName: e.target.value }),
    emailHandler: (e) =>
      setGeneralInfo({ ...generalInfo, email: e.target.value }),
    phoneNumberHandler: (e) =>
      setGeneralInfo({ ...generalInfo, phoneNumber: e.target.value }),
    locationHandler: (e) =>
      setGeneralInfo({ ...generalInfo, location: e.target.value }),
  };

  const educationalHandlerContainer = {
    nameHandler: (e) =>
      setEducationalExperience({
        ...educationalExperience,
        name: e.target.value,
      }),
    titleHandler: (e) =>
      setEducationalExperience({
        ...educationalExperience,
        title: e.target.value,
      }),
    periodHandler: (e) =>
      setEducationalExperience({
        ...educationalExperience,
        period: e.target.value,
      }),
  };

  const practicalHandlerContainer = {
    nameHandler: (e) =>
      setPracticalExperience({ ...practicalExperience, name: e.target.value }),
    titleHandler: (e) =>
      setPracticalExperience({ ...practicalExperience, title: e.target.value }),
    mainResponsibilitiesHandler: (e) =>
      setPracticalExperience({
        ...practicalExperience,
        mainResponsibilities: e.target.value,
      }),
    periodHandler: (e) =>
      setPracticalExperience({
        ...practicalExperience,
        period: e.target.value,
      }),
  };

  // App Controls Section
  function resetStates() {
    setGeneralInfo(getResetExperienceObject(generalInfo));
    setEducationalExperience(getResetExperienceObject(educationalExperience));
    setPracticalExperience(getResetExperienceObject(practicalExperience));

    setEducationalExperienceContainer([]);
    setPracticalExperienceContainer([]);
  }

  function resetEducationalExperience() {
    setEducationalExperience(getResetExperienceObject(educationalExperience));
  }

  function resetPracticalExperience() {
    setPracticalExperience(getResetExperienceObject(practicalExperience));
  }

  function setDummyState() {
    const [
      dummyGeneralInfo,
      dummyEducationalExperience,
      dummyPracticalExperience,
    ] = getDummyState();

    setGeneralInfo(dummyGeneralInfo);
    setEducationalExperience(dummyEducationalExperience);
    setPracticalExperience(dummyPracticalExperience);
  }

  function printCV() {
    window.print();
  }

  const appStateControlHandlers = {
    resetStates,
    setDummyState,
    printCV,
  };

  return (
    <main className="main-page">
      <Analytics />
      <Controls {...appStateControlHandlers} />
      <Editor
        generalInfoChange={{ generalInfo, generalHandlerContainer }}
        educationalExperienceChange={{
          educationalExperience,
          educationalHandlerContainer,
          writeEducationalExperienceHandler,
        }}
        practicalExperienceChange={{
          practicalExperience,
          practicalHandlerContainer,
          writePracticalExperienceHandler,
        }}
        educationalExperienceEdit={{
          educationalExperienceContainer,
          deleteEducationalHandler,
        }}
        practicalExperienceEdit={{
          practicalExperienceContainer,
          deletePracticalHandler,
        }}
        educationalExperienceSave={{
          enterEditEducationalHandler,
          saveEditEducationalHandler,
        }}
        practicalExperienceSave={{
          enterEditPracticalHandler,
          saveEditPracticalHandler,
        }}
      />
      <Preview
        generalInfo={generalInfo}
        educationalExperienceContainer={educationalExperienceContainer}
        practicalExperienceContainer={practicalExperienceContainer}
      />
    </main>
  );
}

export default App;
