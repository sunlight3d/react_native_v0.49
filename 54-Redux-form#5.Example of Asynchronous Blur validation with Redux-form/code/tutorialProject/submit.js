/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
"submit" function
*/
import { SubmissionError } from 'redux-form';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const submit = values => {
    return sleep(1000).then(() => {
        if (!['hoang', 'hoangnd', 'ndhoang'].includes(values.username)) {
            throw new SubmissionError({
                username: 'User does not exist',
                _error: 'Login failed!',
            });
        } else if (values.email !== 'sunlight4d@gmail.com') {
            throw new SubmissionError({
                email: 'Wrong email',
                _error: 'Login failed!',
            });
        } else {
            alert(`Validation success. Values = ${JSON.stringify(values)}`);
        }
    });
};
export default submit;
