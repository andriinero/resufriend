import dummyFromText from '../data/dummyFormText.json';

export default function getDummyState() {
    const [dummyGeneralInfo,dummyEducationalExperience,dummyPracticalExperience] = dummyFromText;

    return [
        dummyGeneralInfo,
        dummyEducationalExperience,
        dummyPracticalExperience
    ];
}