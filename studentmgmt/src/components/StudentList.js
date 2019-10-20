import React from 'react';
import {connect} from 'react-redux';
import { fetchStudents} from '../actions';
import '../styles/StudentList.css';

class StudentList extends React.Component {
    // constructor() {
    //     this.divCardRef = React.createRef();
    // }
    componentDidMount() {
        this.props.fetchStudents();
    }

    renderList () {
        if (this.props.students == null || this.props.students == undefined || this.props.students.length <= 0) 
            return '';
        
        var obj = this.props.students;
        var lstStudents = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                lstStudents.push(obj[key]);
        }
        
        return lstStudents.map(student => {
            return (
            <div className="divStudent" key={student.rollNo}>
                <div className="divContent">
                        <div className="divHeader">
                            {student.name}
                        </div>
                        <hr></hr>
                        <div className="divDescription"> 
                            Marks: {student.marks.s1}
                            <div className="divRollNo">
                                Roll No: {student.rollNo}
                            </div>
                        </div>
                </div>
            </div>
            );
        });
    }
    render() {
        return (
            <div className="studentList">
                {this.renderList()}               
            </div>
        );
    }
}

const mapStateToProps = (state) => {
return {students: state.students};
}
export default connect(mapStateToProps, {fetchStudents: fetchStudents})(StudentList);