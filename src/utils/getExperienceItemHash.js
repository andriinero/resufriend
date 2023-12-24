export default function getExperienceItemHash(experienceData) {
    let experienceHash = '';
    
    Object.keys(experienceData).forEach(key => {
        experienceHash += experienceData[key];
    });

    return experienceHash;
}