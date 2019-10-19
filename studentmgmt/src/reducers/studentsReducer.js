export default (state = [], action) => {
    if (action.type === 'GET_STUDENTS')
        return action.payload;
    
        return state;
};