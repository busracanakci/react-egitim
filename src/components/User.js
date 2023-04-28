import React, { Component } from 'react';
class User extends Component {
    render(){
        return (
            <div>
                <ul>
                    <li>İsim: {this.props.name}</li>
                    <li>Görev:{this.props.task} </li>
                    <li>Süre:{this.props.time}</li>
                </ul>
            </div>
        );
    }
    
}
export default User;
