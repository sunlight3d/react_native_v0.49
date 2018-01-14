/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Redux-form => Normalize phone number. Ex: 096.489.6239
*/
export default normalizePhoneNumber = (value) => {
    if (!value) {
        return '';
    }
    const numberValue = value.replace(/[^\d]/g, '');
    if (numberValue.length <= 3) {
        return numberValue;
    }
    if (numberValue.length <= 7) {
        return `${numberValue.slice(0, 3)}.${numberValue.slice(3)}`;
    }
    return `${numberValue.slice(0, 3)}.${numberValue.slice(3, 6)}.${numberValue.slice(6, 10)}`;
};