export default function getExperienceItemHash(experienceData) {
    let experienceHash = '';
    
    Object.keys(experienceData).forEach(key => {
        console.log('genping =' + key);
        experienceHash += experienceData[key];
    });

    return experienceHash;
}