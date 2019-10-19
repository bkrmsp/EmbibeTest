import React from 'react';
import { loginUser } from '../actions';
import Login from './Login';
import StudentDashboard from './StudentDashboard';

class App extends React.Component {
    state = { isLoggedIn: false };
    onLogin = (flag) => {
        this.setState({ isLoggedIn: flag });
    }
    render() {
        return (
            <div>
                {
                    this.state.isLoggedIn ? <StudentDashboard /> : <Login loginUser={this.onLogin} />
                }                
            </div>            
        );
    }    
};

export default App;