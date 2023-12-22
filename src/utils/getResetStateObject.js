export default function getResetStateObject(stateObj) {
    const tempStateObj = {};

    Object.keys(stateObj).forEach((key) => {
        tempStateObj[key] = '';
    });

    return tempStateObj;
}