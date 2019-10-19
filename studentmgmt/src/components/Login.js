import React from 'react';
import '../styles/Login.css';
//import {connect} from 'react-redux';

class Login extends React.Component {
    state = { loginId: '', loginPassword: '', lstUsers: [
        { id: 'abc', password: '123' }
    ]};
    onLoginBtnClick = () => {
        if (this.state.loginId == '' || this.state.loginId == undefined || this.state.loginId == null) {
            alert('Please enter User Id.');
            return;
        }
            
        if (this.state.loginPassword == '' || this.state.loginPassword == undefined || this.state.loginPassword == null) {
            alert('Please enter Password');
            return;
        }
            
        var user = this.state.lstUsers.find(x => x.id == this.state.loginId && x.password == this.state.loginPassword);
        this.props.loginUser(user != null && user != undefined);
    }

    render() {
        return (
            <div className="divWrapper">
                <div className="divParent">
                    <h1>Login</h1>
                    <div className="divLoginFields">
                        <table>
                            <tbody>
                            <tr>
                                <td>User Id:</td>
                                <td>
                                <div> 
                                    <input className="inputField" type="text" value={this.state.loginId} 
                                    onChange={ (e) => this.setState({ loginId: e.target.value}) }></input>
                                   </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Password:</td>
                                <td>
                                    <div>
                                        <input className="inputField" type="text" value={this.state.loginPassword} 
                                        onChange={ (e) => this.setState({ loginPassword: e.target.value}) }></input>
                                    </div>
                                </td>
                            </tr>
                            </tbody>                            
                        </table>
                        <div className="divButton">
                            <button id="btnLogin" onClick={this.onLoginBtnClick}>Log in</button>
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;