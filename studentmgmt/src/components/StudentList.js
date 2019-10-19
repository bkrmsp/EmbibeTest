import React from 'react';
import {connect} from 'react-redux';
import { fetchStudents} from '../actions';


class StudentList extends React.Component {

    componentDidMount() {
        this.props.fetchStudents();
    }
    render() {
        return (
            <div>
                Student List
            </div>
        );
    }
}

const mapStateToProps = (state) => {
return {students: state.students};
}
export default connect(mapStateToProps, {fetchStudents: fetchStudents})(StudentList);