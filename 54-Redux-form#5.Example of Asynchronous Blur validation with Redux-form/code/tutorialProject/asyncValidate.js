/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
"asyncValidate" function
*/
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const asyncValidate = values => {
    return sleep(1000).then(() => {                
        if (!['hoang', 'hoangnd', 'ndhoang'].includes(values.username)) {            
            throw { username: 'User does not exist' };            
        }                 
    });
};
export default asyncValidate;