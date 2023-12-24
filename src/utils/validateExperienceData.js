export default function validateExperienceData(experienceObject) {
    let validationResult = true;
    
    Object.keys(experienceObject).forEach((key) => {
        if (experienceObject[key].trim() === '') {
            validationResult = false;
        }
    });

    return validationResult;
}