import studentApi from '../apis/studentApi';

// Get students
export const fetchStudents = () => {
    return async (dispatch) => {
        const response = await studentApi.get('/bins/1dlper');
        dispatch( {
            type: 'GET_STUDENTS',
            payload: response
        });
    };    
};