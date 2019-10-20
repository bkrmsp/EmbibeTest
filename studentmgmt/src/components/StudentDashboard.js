import React from 'react';
import '../styles/StudentDashboard.css';
import StudentList from './StudentList';

export default class StudentDashboard extends React.Component {
    state = { searchText: ''};
    render() {
        return (
                <div>
                    <h3>Dashboard</h3>
                    <div>
                    <input type="text" id="txtSearchBar" value={this.state.searchText} 
                    onChange={(e) => this.setState({ searchText: e.target.value})} 
                    />
                    </div>
                    <hr></hr>
                    <div>
                        <StudentList />
                    </div>
                </div>
        );
    }
}