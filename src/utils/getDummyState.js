export default function getDummyState() {
    const tempGeneralInfo = {
        firstName: 'John',
        lastName: 'Johnson',
        email: 'john.johnson@example.com',
        phoneNumber: '555-5555-5555',
    };
    const tempEducationalExperience = {
        schoolName: 'University of Michigan',
        titleOfStudy: 'Bachelor of Computer Science',
        dateOfStudy: '09.21.2019-05.31.2022',
    };
    const tempPracticalExperience = {
        companyName: 'StartUp.org',
        positionTitle: 'Junior Software Developer',
        mainResponsibilities: 'React Testing',
        employmentPeriod: '06.21.2021-09.01.2021',
    };

    return [
        tempGeneralInfo,
        tempEducationalExperience,
        tempPracticalExperience
    ];
}